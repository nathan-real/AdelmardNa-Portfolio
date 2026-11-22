import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { FiHome, FiUser, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext.jsx'
import './Navbar.css'

const NAV_ITEMS = [
  { to: 'home', icon: FiHome },
  { to: 'about', icon: FiUser },
  { to: 'projects', icon: FiFolder },
  { to: 'experience', icon: FiBriefcase },
  { to: 'contact', icon: FiMail },
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
  const reduceMotion = useReducedMotion()

  const distance = useTransform([mouseX, mouseY], ([x, y]) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 }
    return isHorizontal
      ? x - bounds.x - bounds.width / 2
      : y - bounds.y - bounds.height / 2
  })

  const scaleRaw = useTransform(distance, [-90, 0, 90], [1, 1.6, 1])
  const scale = useSpring(scaleRaw, { mass: 0.1, stiffness: 200, damping: 14 })


  if (isHorizontal || reduceMotion) {
    return (
      <span ref={ref} className="nav-icon">
        <item.icon aria-hidden="true" />
      </span>
    )
  }

  return (
    <motion.span ref={ref} style={{ scale }} className="nav-icon">
      <item.icon aria-hidden="true" />
    </motion.span>
  )
}

const BOTTOM_MARGIN = 230

export default function Navbar() {
  const mouseX = useMotionValue(Infinity)
  const mouseY = useMotionValue(Infinity)
  const isHorizontal = useIsHorizontalNav()
  const [activeId, setActiveId] = useState('home')
  const { t } = useLang()

  useEffect(() => {
    const line = () => window.innerHeight * 0.5

    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight
      const viewportBottom = window.innerHeight + window.scrollY
      if (pageHeight - viewportBottom <= BOTTOM_MARGIN) {
        setActiveId('contact')
        return
      }

      const refLine = line()
      let current = null

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.to)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= refLine && rect.bottom >= refLine) {
          current = item.to
          break
        }
      }

      if (!current) {
        for (const item of NAV_ITEMS) {
          const el = document.getElementById(item.to)
          if (el && el.getBoundingClientRect().top <= refLine) {
            current = item.to
          }
        }
      }

      if (current) setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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
    <nav className="navbar glass" aria-label={t.nav.label}>
      <ul className="navbar-list" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              href={`#${item.to}`}
              smooth={true}
              duration={500}
              offset={-40}
              aria-label={t.nav[item.to]}
              aria-current={activeId === item.to ? 'true' : undefined}
              className={`nav-link${activeId === item.to ? ' active' : ''}`}
            >
              <DockIcon mouseX={mouseX} mouseY={mouseY} isHorizontal={isHorizontal} item={item} />
              <span className="nav-label" aria-hidden="true">{t.nav[item.to]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}