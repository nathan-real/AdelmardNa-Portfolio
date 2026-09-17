import education from '../data/education.js'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <span className="section-tag">Path</span>
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((entry) => (
            <div className="timeline-item glass" key={entry.id}>
              <div className="timeline-dot" />
              <div className="timeline-header">
                <h3>{entry.school}</h3>
                <span className="timeline-period">{entry.period}</span>
              </div>
              <p className="timeline-degree">{entry.degree} · {entry.location}</p>
              <p className="timeline-desc">{entry.description}</p>
              <ul className="timeline-highlights">
                {entry.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
