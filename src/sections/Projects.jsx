import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <span className="section-tag">Work</span>
        <h2 className="section-title">My Projects</h2>
        <p className="projects-intro">
          Click on a project to see the details, media, and links.
        </p>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
