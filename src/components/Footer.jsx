import React from 'react'
import logoImg from '../assets/logo.png'

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" onClick={scrollToTop}>
              <img src={logoImg} alt="Evolvix Logo" />
            </a>
            <p>
              AI-driven technology company helping businesses innovate, automate, and grow
              through modern artificial intelligence solutions.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/evolvixofficial/?viewAsMember=true" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Evolvix</h4>
            <ul>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
              <li><a href="#why" onClick={(e) => handleNavClick(e, '#why')}>Why Us</a></li>
              <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')}>Our Team</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>AI Applications</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Custom Software</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Intelligent Automation</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Scalable Products</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul style={{ gap: '6px' }}>
              <li style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                hr.evolvix.official@gmail.com
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                Global Remote Operations
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Evolvix. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
