import { FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext.jsx'
import skills from '../data/skills.js'
import social from '../data/social.js'
import './AboutMe.css'
import googleplayLogo from '../assets/logo/google-play.svg'
import { useEffect, useState } from 'react'

function SkillGroup({ group }) {
  const { tr } = useLang()
  return (
    <div className="skill-group glass">
      <h3>{tr(group.category)}</h3>

      {(group.type === 'text' || group.type === 'mixed') && (
        <ul>
          {(group.type === 'mixed' ? group.tags : group.items).map((tag) => (
            <li key={tag.en ?? tag}>{tr(tag)}</li>
          ))}
        </ul>
      )}

      {(group.type === 'logos' || group.type === 'mixed') && (
        <div className="skill-logos">
          {group.items.map((item) => (
            <div className="skill-logo" key={item.name}>
              {item.logo ? (
                <img src={item.logo} alt="" className="skill-logo-img" />
              ) : (
                <span className="skill-logo-fallback">{item.name.slice(0, 2)}</span>
              )}
              <span className="skill-logo-name">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AboutMe() {
  const [designGroup, devGroup, toolsGroup, languagesGroup] = skills
  const { lang, t } = useLang()
  const [cvLang, setCvLang] = useState(lang)
  // Follow the site language by default.
  useEffect(() => setCvLang(lang), [lang])
  const resumeHref = cvLang === 'fr' ? social.resumeFr : social.resumeEn

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <span className="section-tag">{t.about.tag}</span>
        <h2 className="section-title">{t.about.title}</h2>

        <div className="about-grid-main">
          <div className="about-text glass">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            <div className="about-actions">
              <div className="btn btn-primary resume-btn">
                <a href={resumeHref} download className="resume-btn-main">
                  <FiDownload aria-hidden="true" /> {t.about.resume} ({cvLang.toUpperCase()})
                </a>
                <div className="resume-lang-switch" role="group" aria-label={t.about.resumeLang}>
                  <button
                    type="button"
                    className={cvLang === 'fr' ? 'active' : ''}
                    aria-pressed={cvLang === 'fr'}
                    onClick={() => setCvLang('fr')}
                  >
                    FR
                  </button>
                  <button
                    type="button"
                    className={cvLang === 'en' ? 'active' : ''}
                    aria-pressed={cvLang === 'en'}
                    onClick={() => setCvLang('en')}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>

            <div className="about-links">
              <a href={social.email} className="btn btn-outline">
                <FiMail aria-hidden="true" /> {t.about.contact}
              </a>
              <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub aria-hidden="true" /></a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin aria-hidden="true" /></a>
              <a href={social.googlePlay} target="_blank" rel="noopener noreferrer" aria-label="Google Play">
                <img src={googleplayLogo} alt="" className="about-link-icon google-play-icon" />
              </a>
            </div>
          </div>

          <div className="skill-stack">
            <SkillGroup group={designGroup} />
            <SkillGroup group={devGroup} />
          </div>
        </div>

        <div className="about-grid-secondary">
          <SkillGroup group={toolsGroup} />
          <SkillGroup group={languagesGroup} />
        </div>
      </div>
    </section>
  )
}