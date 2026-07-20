import logoImg from '../assets/logo.png'

const values = [
  {
    icon: '🧠',
    title: 'AI-First Thinking',
    desc: 'Every solution is designed with intelligence at its core.',
  },
  {
    icon: '⚡',
    title: 'Rapid Innovation',
    desc: 'We move fast, iterating and delivering at speed.',
  },
  {
    icon: '🎯',
    title: 'Results Driven',
    desc: 'We measure success by the value we create for clients.',
  },
  {
    icon: '🔒',
    title: 'Trusted Partner',
    desc: 'Long-term partnerships built on transparency and trust.',
  },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual Side */}
          <div className="about-visual reveal">
            <div className="about-card-main">
              <img src={logoImg} alt="Evolvix Logo" className="about-logo-large" />
              <p className="about-tagline">
                <span>Evolve.</span> Innovate. <span>Excel.</span>
              </p>
            </div>
            <div className="about-float-badge">
              <strong>Est.</strong>
              <span>2024</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Transforming Business<br />Through AI Innovation</h2>
            <p className="section-subtitle">
              Evolvix is an AI-driven technology company on a mission to help businesses
              innovate, automate, and grow. We specialize in building intelligent systems
              that deliver measurable impact — from AI-powered applications to fully
              custom software and scalable digital ecosystems.
            </p>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              Founded by a team of technology visionaries, Evolvix bridges the gap between
              cutting-edge artificial intelligence and practical business solutions,
              ensuring our clients always stay ahead of the curve.
            </p>

            <div className="about-values">
              {values.map((v, i) => (
                <div className={`about-value reveal reveal-delay-${i + 1}`} key={v.title}>
                  <span className="about-value-icon">{v.icon}</span>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
