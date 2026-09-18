import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiHome, FiUser, FiBookOpen, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi'
import './Navbar.css'

const NAV_ITEMS = [
  { to: 'home', label: 'Home', icon: FiHome },
  { to: 'about', label: 'About', icon: FiUser },
  { to: 'projects', label: 'Projects', icon: FiFolder },
  { to: 'experience', label: 'Experience', icon: FiBriefcase },
  { to: 'contact', label: 'Contact', icon: FiMail },
]

function useIsHorizontalNav(breakpoint = 900) {
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth <= breakpoint)
  useEffect(() => {
    const handleResize = () => setIsHorizontal(window.innerWidth <= breakpoint)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])
  return isHorizontal
}

function DockIcon({ mouseX, mouseY, isHorizontal, item }) {
  const ref = useRef(null)

  const distance = useTransform([mouseX, mouseY], ([x, y]) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 }
    return isHorizontal
      ? x - bounds.x - bounds.width / 2
      : y - bounds.y - bounds.height / 2
  })

  const scaleRaw = useTransform(distance, [-90, 0, 90], [1, 1.6, 1])
  const scale = useSpring(scaleRaw, { mass: 0.1, stiffness: 200, damping: 14 })


  if (isHorizontal) {
    return (
      <span ref={ref} className="nav-icon">
        <item.icon />
      </span>
    )
  }

  return (
    <motion.span ref={ref} style={{ scale }} className="nav-icon">
      <item.icon />
    </motion.span>
  )
}

const BOTTOM_MARGIN = 200

export default function Navbar() {
  const mouseX = useMotionValue(Infinity)
  const mouseY = useMotionValue(Infinity)
  const isHorizontal = useIsHorizontalNav()
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.to))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          setActiveId(topMost.target.id)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight
      const viewportBottom = window.innerHeight + window.scrollY
      if (pageHeight - viewportBottom <= BOTTOM_MARGIN) {
        setActiveId('contact')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  const handleMouseLeave = () => {
    mouseX.set(Infinity)
    mouseY.set(Infinity)
  }

  return (
    <nav className="navbar glass">
      <ul className="navbar-list" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-40}
              className={`nav-link${activeId === item.to ? ' active' : ''}`}
            >
              <DockIcon mouseX={mouseX} mouseY={mouseY} isHorizontal={isHorizontal} item={item} />
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}