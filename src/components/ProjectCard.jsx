import { useState } from 'react'
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi'
import MediaGallery from './MediaGallery.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  // Media are only mounted once the card has been opened, so nothing is downloaded up front.
  const [hasOpened, setHasOpened] = useState(false)
  const { t, tr } = useLang()
  const bodyId = `project-body-${project.id}`
  const title = tr(project.title)

  const toggle = () => {
    setOpen((o) => !o)
    setHasOpened(true)
  }

  return (
    <article className={`project-card glass color-${project.color || 'primary'}`}>
      {/* The whole header is clickable for mouse users; the button is the accessible control. */}
      <header className="project-header" onClick={toggle}>
        <div className="project-header-main">
          {project.media?.logo && (
            <img
              src={project.media.logo.src}
              alt=""
              className={`project-logo${project.media.logo.shape === 'circle' ? ' project-logo--circle' : ''}`}
            />
          )}
          <div className="project-meta">
            <span className="project-year">{tr(project.year)}</span>
            {project.featured && <span className="project-featured">{t.projects.featured}</span>}
          </div>
          <h3 className="project-title">{title}</h3>
          <p className="project-subtitle">{tr(project.subtitle)}</p>
          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className={`expand-btn${open ? ' open' : ''}`}
          aria-expanded={open}
          aria-controls={bodyId}
          aria-label={`${open ? t.projects.hideDetails : t.projects.showDetails}: ${title}`}
          onClick={(e) => {
            e.stopPropagation()
            toggle()
          }}
        >
          <FiChevronDown aria-hidden="true" />
        </button>
      </header>

      <div id={bodyId} className={`project-body ${open ? 'open' : ''}`} inert={!open}>
        <p className="project-role"><strong>{t.projects.role}: </strong>{tr(project.role)}</p>

        {project.problem && (
          <div className="project-text-block">
            <h4>{t.projects.problem}</h4>
            <p>{tr(project.problem)}</p>
          </div>
        )}

        {project.solution && (
          <div className="project-text-block">
            <h4>{t.projects.solution}</h4>
            <p>{tr(project.solution)}</p>
          </div>
        )}

        {project.features?.length > 0 && (
          <div className="project-text-block">
            <h4>{t.projects.highlights}</h4>
            <ul className="project-features">
              {project.features.map((f) => (
                <li key={f.en ?? f}>{tr(f)}</li>
              ))}
            </ul>
          </div>
        )}

        {hasOpened && (
          <MediaGallery
            images={project.media?.images}
            videos={project.media?.videos}
            animations={project.media?.animations}
            mockups={project.media?.mockups}
            projectId={project.id}
          />
        )}

        <div className="project-links">
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FiGithub aria-hidden="true" /> {t.projects.source}
            </a>
          )}
          {project.links?.googlePlay && (
            <a href={project.links.googlePlay} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FiExternalLink aria-hidden="true" /> Google Play
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
