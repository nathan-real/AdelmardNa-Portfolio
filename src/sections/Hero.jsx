import { Link } from 'react-scroll'
import { FiArrowDown } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <p className="hero-hello">Hi, I'm</p>
        <h1 className="hero-name">Nathan Adelmard</h1>
        <p className="hero-role">
          Engineering student at <strong>ENSC</strong>, I design mobile apps,
          watch faces and interfaces, from prototype to finished product.
        </p>
        <div className="hero-actions">
          <Link to="projects" smooth duration={500} offset={-40} className="btn btn-primary">
            View my projects
          </Link>
          <Link to="contact" smooth duration={500} offset={-40} className="btn btn-outline">
            Contact me
          </Link>
        </div>
      </div>
      <Link to="about" smooth duration={500} offset={-40} className="scroll-hint" aria-label="Scroll down">
        <FiArrowDown />
      </Link>
    </section>
  )
}
