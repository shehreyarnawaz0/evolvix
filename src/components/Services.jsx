const services = [
  {
    icon: '🤖',
    title: 'AI Applications',
    desc: 'Custom AI-powered applications that transform how your business operates — from intelligent assistants to predictive analytics platforms.',
    tags: ['Machine Learning', 'NLP', 'Computer Vision', 'LLMs'],
  },
  {
    icon: '💻',
    title: 'Custom Software Development',
    desc: 'End-to-end software solutions tailored to your specific business needs, built with modern architectures and best-in-class engineering.',
    tags: ['Web Apps', 'Mobile', 'APIs', 'Cloud'],
  },
  {
    icon: '⚙️',
    title: 'Intelligent Automation',
    desc: 'Streamline operations and eliminate manual bottlenecks with smart automation systems powered by AI and advanced workflow engines.',
    tags: ['Process Automation', 'RPA', 'AI Workflows', 'Integration'],
  },
  {
    icon: '🚀',
    title: 'Scalable Digital Products',
    desc: 'From MVP to enterprise-scale, we design and build digital products that grow with your business and deliver lasting value.',
    tags: ['Product Strategy', 'UX/UI', 'SaaS', 'Infrastructure'],
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 0 }}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 16px' }}>
            Our Core Specializations
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We offer a comprehensive suite of AI and technology services designed to
            accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className={`service-card reveal reveal-delay-${i + 1}`} key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
