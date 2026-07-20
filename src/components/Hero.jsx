import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(26, 111, 255, ${0.12 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(26, 111, 255, ${p.opacity})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container">
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="line-1">Building the Future</span>
            <span className="line-2">With Intelligence</span>
          </h1>

          <p className="hero-description">
            We help businesses innovate, automate, and grow through modern artificial
            intelligence solutions — from custom AI applications to scalable digital products
            that deliver real business value.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              id="hero-explore-btn"
              onClick={() => scrollToSection('#services')}
            >
              Explore Our Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="btn btn-outline"
              id="hero-contact-btn"
              onClick={() => scrollToSection('#contact')}
            >
              Talk to Us
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>AI</h3>
              <p>Powered Solutions</p>
            </div>
            <div className="hero-stat">
              <h3>15+</h3>
              <p>Expert Team Members</p>
            </div>
            <div className="hero-stat">
              <h3>4</h3>
              <p>Core Specializations</p>
            </div>
            <div className="hero-stat">
              <h3>∞</h3>
              <p>Growth Potential</p>
            </div>
            <div className="hero-stat">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="hero-stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>



      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        Scroll
      </div>
    </section>
  )
}
