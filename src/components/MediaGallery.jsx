import './MediaGallery.css'

export default function MediaGallery({ images = [], videos = [], gifs = [], projectId }) {
  const isEmpty = images.length === 0 && videos.length === 0 && gifs.length === 0

  if (isEmpty) {
    return (
      <div className="media-placeholder">
        Soon
      </div>
    )
  }

  const videosBlock = videos.length > 0 && (
    <div className="media-videos">
      {videos.map((video, i) => (
        <figure className="media-item media-video" key={`vid-${i}`}>
          <video autoPlay loop muted playsInline preload="metadata" poster={video.poster}>
            <source src={video.src} />
          </video>
          {video.caption && <figcaption>{video.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )

  // --- Modern Edge ---
  if (projectId === 'modern-edge' && images.length === 7) {
    const [mockup, ...squares] = images

    return (
      <div className="media-gallery">
        <div className="modern-edge-gallery">
          <figure className="media-item modern-edge-mockup">
            <img src={mockup.src} alt={mockup.alt} loading="lazy" />
          </figure>

          <div className="modern-edge-grid">
            {squares.map((img, i) => (
              <figure className="media-item" key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Madic pump
  if (projectId === 'madic-pump' && images.length === 1 && gifs.length === 4) {
    return (
      <div className="media-gallery">
        <div className="madic-pump-gallery">
          <figure className="media-item madic-bills">
            <img src={images[0].src} alt={images[0].alt} loading="lazy" />
          </figure>
          <div className="madic-pump-grid">
            {gifs.map((gif, i) => (
              <figure className="media-item" key={i}>
                <img src={gif.src} alt={gif.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // --- Disposition générique (masonry) ---
  return (
    <div className="media-gallery">
      {videosBlock}
      {(images.length > 0 || gifs.length > 0) && (
        <div className="media-images">
          {images.map((img, i) => (
            <figure
              className={`media-item${img.transparent ? ' media-item--transparent' : ''}`}
              key={`img-${i}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
          {gifs.map((gif, i) => (
            <figure className="media-item" key={`gif-${i}`}>
              <img src={gif.src} alt={gif.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}