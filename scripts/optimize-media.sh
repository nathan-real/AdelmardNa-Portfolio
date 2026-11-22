#!/usr/bin/env bash
# Builds web-optimized media in src/assets/ from the full-size originals in
# media-originals/ (git-ignored). Requires ffmpeg with libwebp and libx264.
# Usage: bash scripts/optimize-media.sh
set -euo pipefail

SRC="media-originals"
OUT="src/assets"

if [ ! -d "$SRC" ]; then
  echo "Missing $SRC/ folder (original media)." >&2
  exit 1
fi

# Output name: lowercase, spaces -> dashes, new extension.
out_path() {
  local rel="$1" ext="$2"
  local dir name
  dir=$(dirname "$rel")
  name=$(basename "${rel%.*}" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  echo "$OUT/$dir/$name.$ext"
}

# Image -> WebP, resized to a max width (never upscaled).
webp() {
  local rel="$1" width="$2" dst
  dst=$(out_path "$rel" webp)
  mkdir -p "$(dirname "$dst")"
  ffmpeg -v error -y -i "$SRC/$rel" -vf "scale='min($width,iw)':-2" \
    -c:v libwebp -quality 80 -compression_level 6 "$dst"
  echo "$dst"
}

# GIF / video -> H.264 MP4 (no audio), resized, 30 fps, fast start.
mp4() {
  local rel="$1" width="$2" crf="$3" dst
  dst=$(out_path "$rel" mp4)
  mkdir -p "$(dirname "$dst")"
  ffmpeg -v error -y -i "$SRC/$rel" -an \
    -vf "fps=30,scale='min($width,iw)':-2,format=yuv420p" \
    -c:v libx264 -preset slow -crf "$crf" -movflags +faststart "$dst"
  echo "$dst"
}

# First frame of a video -> WebP poster.
poster() {
  local rel="$1" width="$2" dst
  dst=$(out_path "${rel%.*}-poster.webp" webp)
  ffmpeg -v error -y -i "$SRC/$rel" -frames:v 1 -vf "scale='min($width,iw)':-2" \
    -c:v libwebp -quality 75 "$dst"
  echo "$dst"
}

P=projects

# Swipe Clean
webp "$P/swipe-clean/images/logo_transparant.png" 256
for i in 1 2 3 4; do webp "$P/swipe-clean/images/$i.png" 540; done
mp4 "$P/swipe-clean/videos/presentation.mp4" 720 30
poster "$P/swipe-clean/videos/presentation.mp4" 720

# Modern Edge
webp "$P/modern-edge/images/modernedgeLogo.png" 256
webp "$P/modern-edge/images/mockup-1.png" 480
for i in 1 2 3 4 5 6; do webp "$P/modern-edge/images/${i}watchface.png" 400; done

# Radar Time
webp "$P/radar-time/images/RadarTimeLogo.png" 256
webp "$P/radar-time/mockups/MockupRadarTime.png" 600
for c in Blanc Bleue Orange Rose Rouge Vert Violet; do
  webp "$P/radar-time/images/$c Miniature RadarTime.png" 400
done

# Pharma delivery
webp "$P/pharma-delivery/figma/deliveryLogo.png" 256
for s in delivery deliveries scan profile; do webp "$P/pharma-delivery/figma/$s.png" 540; done

# Madic pump
webp "$P/madic-pump/icons/payment_cash_logo.png" 256
webp "$P/madic-pump/icons/bills.png" 320
for g in insert remove problem cashok; do mp4 "$P/madic-pump/gifs/$g.gif" 480 26; done

# Skill logos
webp "logo/watchfacestudio.png" 96
