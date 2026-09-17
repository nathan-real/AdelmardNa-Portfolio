import { useState } from 'react'
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi'
import MediaGallery from './MediaGallery.jsx'
import './ProjectCard.css'


export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`project-card glass color-${project.color || 'primary'}`}>
      <header className="project-header" onClick={() => setOpen(!open)}>
        <div className="project-header-main">
          {project.media?.logo && (
            <img
              src={project.media.logo.src}
              alt={project.media.logo.alt}
              className={`project-logo${project.media.logo.shape === 'circle' ? ' project-logo--circle' : ''}`}
            />
          )}
          <div className="project-meta">
            <span className="project-year">{project.year}</span>
            {project.featured && <span className="project-featured">Favori</span>}
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <button className="expand-btn" aria-label="Voir le détail">
          <FiChevronDown className={open ? 'open' : ''} />
        </button>
      </header>

      <div className={`project-body ${open ? 'open' : ''}`}>
        <p className="project-role"><strong>Role: </strong>{project.role}</p>

        {project.problem && (
          <div className="project-text-block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
        )}

        {project.solution && (
          <div className="project-text-block">
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>
        )}

        {project.features?.length > 0 && (
          <div className="project-text-block">
            <h4>Key highlights</h4>
            <ul className="project-features">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        <MediaGallery
          images={project.media?.images}
          videos={project.media?.videos}
          gifs={project.media?.gifs}
          layout={project.media?.layout}
          projectId={project.id}
        />

        <div className="project-links">
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FiGithub /> Source code
            </a>
          )}
          {project.links?.googlePlay && (
            <a href={project.links.googlePlay} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FiExternalLink /> Google Play
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
