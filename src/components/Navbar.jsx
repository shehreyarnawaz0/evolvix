import { useState, useEffect } from 'react'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'services', 'why', 'team', 'contact']
      let currentSection = 'home'

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          // If the top of the section is near the middle of the viewport or higher, it might be the active one
          if (rect.top <= 160) {
            currentSection = section
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logoImg} alt="Evolvix Logo" />
          </a>

          <div className="hero-badge navbar-badge">
            <span className="hero-badge-dot" />
            AI-Driven Technology Company
          </div>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="navbar-cta"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              >
                Get In Touch
              </a>
            </li>
          </ul>

          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{ color: 'var(--color-accent)', fontWeight: 700 }}
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
        >
          Get In Touch →
        </a>
      </div>
    </>
  )
}
