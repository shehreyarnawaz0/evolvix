import React from 'react'

const technologies = [
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'AWS Cloud', icon: '☁️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TensorFlow', icon: '🍊' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Next.js', icon: '▲' },
  { name: 'FastAPI', icon: '⚡' },
]

export default function TechSlider() {
  // Duplicate array for seamless infinite marquee loop
  const doubleTechs = [...technologies, ...technologies]

  return (
    <section className="tech-slider-section">
      <div className="container">
        <div className="tech-slider-title">Powering Innovation with Modern Tech Stack</div>
      </div>
      <div className="tech-slider-container">
        <div className="tech-slider-track">
          {doubleTechs.map((tech, i) => (
            <div className="tech-slide-item" key={i}>
              <span className="tech-slide-icon">{tech.icon}</span>
              <span className="tech-slide-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
