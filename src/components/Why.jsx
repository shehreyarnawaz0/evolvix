const whyFeatures = [
  {
    icon: '🎓',
    title: 'Deep Technical Expertise',
    desc: 'Our team combines years of experience in AI research, software engineering, and product design.',
  },
  {
    icon: '🌍',
    title: 'Business-Centric Approach',
    desc: "We don't just build technology — we understand your business goals and align every solution to them.",
  },
  {
    icon: '📈',
    title: 'Scalable Architecture',
    desc: 'Every solution we build is designed to scale with your growth from day one.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    desc: "We embed with your team, becoming a trusted long-term technology partner — not just a vendor.",
  },
]

const stats = [
  { icon: '🤖', number: '100%', label: 'AI-Powered Solutions' },
  { icon: '⚡', number: 'Fast', label: 'Delivery & Iteration' },
  { icon: '🔒', number: '24/7', label: 'Support & Monitoring' },
  { icon: '🏆', number: 'Top', label: 'Industry Standards' },
]

export default function Why() {
  return (
    <section className="why section" id="why">
      <div className="why-bg-text">EVOLVIX</div>
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">The Evolvix Advantage</h2>
            <p className="section-subtitle">
              In a world full of technology vendors, Evolvix stands apart as a true
              innovation partner. Here's what sets us apart.
            </p>

            <div className="why-features">
              {whyFeatures.map((f, i) => (
                <div className={`why-feature reveal reveal-delay-${i + 1}`} key={f.title}>
                  <div className="why-feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-stats">
            {stats.map((s, i) => (
              <div className={`stat-card reveal reveal-delay-${i + 1}`} key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
