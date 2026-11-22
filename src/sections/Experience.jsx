import { useLang } from '../i18n/LanguageContext.jsx'
import './Experience.css'

const experiences = [
  {
    id: 'i2c',
    title: { en: 'i2c Student Enterprise at ENSC', fr: "Entreprise étudiante i2c de l'ENSC" },
    period: { en: '2025 — present', fr: "2025 — aujourd'hui" },
    description: {
      en: "i2c is ENSC's student enterprise: it carries out real missions for external clients, with project management, deadlines and real deliverables.",
      fr: "i2c est l'entreprise étudiante de l'ENSC : elle réalise de vraies missions pour des clients externes, avec gestion de projet, délais et livrables concrets.",
    },
    clients: [
      {
        name: 'SNS Solutions',
        mission: {
          en: 'Mobile app prototype for pharmacy delivery drivers (UI/UX, Figma)',
          fr: "Prototype d'application mobile pour livreurs de pharmacie (UI/UX, Figma)",
        },
      },
      {
        name: 'Madic',
        mission: {
          en: 'Motion design and illustration for gas station payment terminals (Figma, Jitter)',
          fr: 'Motion design et illustration pour bornes de paiement de station-service (Figma, Jitter)',
        },
      },
    ],
  },
]

export default function Experience() {
  const { t, tr } = useLang()
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <span className="section-tag">{t.experience.tag}</span>
        <h2 className="section-title">{t.experience.title}</h2>

        {experiences.map((exp) => (
          <div className="experience-card glass" key={exp.id}>
            <div className="experience-head">
              <h3>{tr(exp.title)}</h3>
              <span>{tr(exp.period)}</span>
            </div>
            <p className="experience-desc">{tr(exp.description)}</p>
            <div className="experience-clients">
              {exp.clients.map((c) => (
                <div className="client-pill" key={c.name}>
                  <strong>{c.name}</strong>
                  <span>{tr(c.mission)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
