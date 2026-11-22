import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext.jsx'
import social from '../data/social.js'
import './Contact.css'
import googleplayLogo from '../assets/logo/google-play.svg'


export default function Contact() {
  const { t } = useLang()
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card glass">
          <span className="section-tag">{t.contact.tag}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="contact-text">{t.contact.text}</p>
          <div className="contact-links">
            <a href={social.email} className="btn btn-primary"><FiMail aria-hidden="true" /> Email</a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><FiGithub aria-hidden="true" /> GitHub</a>
            <a href={social.googlePlay} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><img src={googleplayLogo} alt="" className="about-link-icon google-play-icon" /> Google Play</a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nathan Adelmard. {t.contact.footer}</p>
      </footer>
    </section>
  )
}
