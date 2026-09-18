import './Experience.css'

const experiences = [
  {
    id: 'i2c',
    title: 'i2c Student Enterprise at ENSC',
    period: '2025 — present',
    description:
      "i2c is ENSC's student enterprise: it carries out real missions for external clients, with project management, deadlines and real deliverables.",
    clients: [
      { name: 'SNS Solutions', mission: 'Mobile app prototype for pharmacy delivery drivers (UI/UX, Figma)' },
      { name: 'Madic', mission: 'Motion design and illustration for gas station payment terminals (Figma, Jitter)' },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <span className="section-tag">Experience</span>
        <h2 className="section-title">Beyond the classroom</h2>

        {experiences.map((exp) => (
          <div className="experience-card glass" key={exp.id}>
            <div className="experience-head">
              <h3>{exp.title}</h3>
              <span>{exp.period}</span>
            </div>
            <p className="experience-desc">{exp.description}</p>
            <div className="experience-clients">
              {exp.clients.map((c) => (
                <div className="client-pill" key={c.name}>
                  <strong>{c.name}</strong>
                  <span>{c.mission}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
