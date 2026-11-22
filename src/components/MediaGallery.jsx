import { useLang } from '../i18n/LanguageContext.jsx'
import './MediaGallery.css'

function Img({ img, tr }) {
  return <img src={img.src} alt={tr(img.alt)} loading="lazy" decoding="async" />
}

// Short looping animation (ex-GIF) rendered as a muted video.
function Animation({ anim, tr }) {
  return (
    <video
      src={anim.src}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      role="img"
      aria-label={tr(anim.alt)}
    />
  )
}

export default function MediaGallery({ images = [], videos = [], animations = [], mockups = [], projectId }) {
  const { t, tr } = useLang()
  const isEmpty = images.length === 0 && videos.length === 0 && animations.length === 0

  if (isEmpty) {
    return <div className="media-placeholder">{t.projects.soon}</div>
  }

  const videosBlock = videos.length > 0 && (
    <div className="media-videos">
      {videos.map((video, i) => (
        <figure className="media-item media-video" key={`vid-${i}`}>
          <video autoPlay loop muted playsInline preload="none" poster={video.poster} src={video.src} />
          {video.caption && <figcaption>{tr(video.caption)}</figcaption>}
        </figure>
      ))}
    </div>
  )

  // Modern Edge
  if (projectId === 'modern-edge' && images.length === 7) {
    const [mockup, ...squares] = images

    return (
      <div className="media-gallery">
        <div className="modern-edge-gallery">
          <figure className="media-item modern-edge-mockup">
            <Img img={mockup} tr={tr} />
          </figure>

          <div className="modern-edge-grid">
            {squares.map((img, i) => (
              <figure className="media-item" key={i}>
                <Img img={img} tr={tr} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Madic pump
  if (projectId === 'madic-pump' && images.length === 1 && animations.length === 4) {
    return (
      <div className="media-gallery">
        <div className="madic-pump-gallery">
          <figure className="media-item madic-bills">
            <Img img={images[0]} tr={tr} />
          </figure>
          <div className="madic-pump-grid">
            {animations.map((anim, i) => (
              <figure className="media-item" key={i}>
                <Animation anim={anim} tr={tr} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Radar Time
  if (projectId === 'radar-time' && images.length === 7) {
    return (
      <div className="media-gallery">
        <div className="radar-time-gallery">
          <figure className="media-item radar-time-mockup">
            <Img img={mockups[0]} tr={tr} />
          </figure>
          <div className="radar-time-grid">
            {images.map((img, i) => (
              <figure className="media-item" key={i}>
                <Img img={img} tr={tr} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // General
  return (
    <div className="media-gallery">
      {videosBlock}
      {(images.length > 0 || animations.length > 0) && (
        <div className="media-images">
          {images.map((img, i) => (
            <figure
              className={`media-item${img.transparent ? ' media-item--transparent' : ''}`}
              key={`img-${i}`}
            >
              <Img img={img} tr={tr} />
            </figure>
          ))}
          {animations.map((anim, i) => (
            <figure className="media-item" key={`anim-${i}`}>
              <Animation anim={anim} tr={tr} />
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}
