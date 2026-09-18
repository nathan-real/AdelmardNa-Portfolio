import { FiGithub, FiLinkedin, FiPlayCircle, FiDownload, FiMail } from 'react-icons/fi'
import skills from '../data/skills.js'
import social from '../data/social.js'
import './AboutMe.css'
import googleplayLogo from '../assets/logo/google-play.svg'
import { useState } from 'react'

function SkillGroup({ group }) {
  return (
    <div className="skill-group glass">
      <h4>{group.category}</h4>

      {(group.type === 'text' || group.type === 'mixed') && (
        <ul>
          {(group.type === 'mixed' ? group.tags : group.items).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      {(group.type === 'logos' || group.type === 'mixed') && (
        <div className="skill-logos">
          {group.items.map((item) => (
            <div className="skill-logo" key={item.name}>
              {item.logo ? (
                <img src={item.logo} alt={item.name} className="skill-logo-img" />
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
  const [cvLang, setCvLang] = useState('fr')
  const resumeHref = cvLang === 'fr' ? social.resumeFr : social.resumeEn

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <span className="section-tag">About</span>
        <h2 className="section-title">Who am I?</h2>

        <div className="about-grid-main">
          <div className="about-text glass">
            <p>
              My name is <strong>Nathan Adelmard</strong>, an engineering student at <strong>ENSC</strong>
              (École Nationale Supérieure de Cognitique) in Bordeaux. I'm passionate about
              mobile development, interface design, and crafting polished digital products,
              from an animated logo all the way to a full app.
            </p>
            <p>
              I like to thoroughly understand a problem before solving it,
              bridging the gap between design and code to build the right solution.
            </p>

            <div className="about-actions">
              <div className="btn btn-primary resume-btn">
                <a href={resumeHref} download className="resume-btn-main">
                  <FiDownload /> {'Download my resume'}
                </a>
                <div className="resume-lang-switch" role="group" aria-label="Choisir la langue du CV">
                  <button
                    type="button"
                    className={cvLang === 'fr' ? 'active' : ''}
                    onClick={() => setCvLang('fr')}
                  >
                    FR
                  </button>
                  <button
                    type="button"
                    className={cvLang === 'en' ? 'active' : ''}
                    onClick={() => setCvLang('en')}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>

            <div className="about-links">
              <a href={social.email} className="btn btn-outline">
                <FiMail /> Contact me
              </a>
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={social.googlePlay} target="_blank" rel="noreferrer" aria-label="Google Play">
                <img src={googleplayLogo} alt="Google Play" className="about-link-icon google-play-icon" />
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