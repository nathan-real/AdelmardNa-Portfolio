import { FiGithub, FiLinkedin, FiPlayCircle, FiMail } from 'react-icons/fi'
import social from '../data/social.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card glass">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's talk about your project</h2>
          <p className="contact-text">
            Currently looking for an internship / apprenticeship, or just curious about my
            projects? Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href={social.email} className="btn btn-primary"><FiMail /> Email</a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline"><FiLinkedin /> LinkedIn</a>
            <a href={social.github} target="_blank" rel="noreferrer" className="btn btn-outline"><FiGithub /> GitHub</a>
            <a href={social.googlePlay} target="_blank" rel="noreferrer" className="btn btn-outline"><FiPlayCircle /> Google Play</a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nathan Adelmard. Made with React &amp; Vite.</p>
      </footer>
    </section>
  )
}
