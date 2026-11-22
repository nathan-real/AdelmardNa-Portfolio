import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import './Projects.css'

export default function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <span className="section-tag">{t.projects.tag}</span>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="projects-intro">{t.projects.intro}</p>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
