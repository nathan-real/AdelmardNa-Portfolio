import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Contact from './sections/Contact.jsx'
import BackgroundBlobs from './components/BackgroundBlobs/BackgroundBlobs.jsx'

function App() {
  return (
    <div className="app-root">
      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
