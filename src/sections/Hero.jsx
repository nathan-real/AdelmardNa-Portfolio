import { Link } from 'react-scroll'
import { FiArrowDown } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext.jsx'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <p className="hero-hello">{t.hero.hello}</p>
        <h1 className="hero-name">Nathan Adelmard</h1>
        <p className="hero-role">{t.hero.role}</p>
        <p className="hero-availability">
          <span className="hero-availability-dot" aria-hidden="true" />
          {t.hero.availability}
        </p>
        <div className="hero-actions">
          <Link to="projects" href="#projects" smooth duration={500} offset={-40} className="btn btn-primary">
            {t.hero.ctaProjects}
          </Link>
          <Link to="contact" href="#contact" smooth duration={500} offset={-40} className="btn btn-outline">
            {t.hero.ctaContact}
          </Link>
        </div>
      </div>
      <Link
        to="about"
        href="#about"
        smooth
        duration={500}
        offset={-40}
        className="scroll-hint"
        aria-label={t.hero.scrollHint}
      >
        <FiArrowDown aria-hidden="true" />
      </Link>
    </section>
  )
}
