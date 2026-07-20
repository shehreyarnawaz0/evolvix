import React from 'react'
import shehreyarImg from '../assets/shehreyar.png'
import abdullahImg from '../assets/abdullah.jpg'
import haroonImg from '../assets/harron.jpeg'
import ahmadImg from '../assets/ahmed.jpeg'
import mominImg from '../assets/momin.jpeg'
import zaidImg from '../assets/zaid.png'

const teamMembers = [
  {
    name: 'Muhammad Shehreyar Nawaz',
    role: 'Founder & CEO',
    initials: 'MSN',
    image: shehreyarImg,
    desc: 'Visionary leader driving the strategic growth, AI innovations, and long-term vision of Evolvix.',
  },
  {
    name: 'Haroon Abdullah',
    role: 'Chief Technology Officer (CTO)',
    initials: 'HA',
    image: haroonImg,
    desc: 'Architecting state-of-the-art AI infrastructures, custom software solutions, and technical excellence.',
  },
  {
    name: 'Momin Latif Khokhar',
    role: 'Chief Operating Officer (COO)',
    initials: 'MLK',
    image: mominImg,
    desc: 'Streamlining operational frameworks, process automation pipelines, and delivery cycles.',
  },
  {
    name: 'Muhammad Ahmad',
    role: 'Chief Marketing Officer (CMO)',
    initials: 'MA',
    image: ahmadImg,
    desc: 'Spearheading global growth, brand positioning, and customer acquisition strategies.',
  },
  {
    name: 'Zaid Iqbal',
    role: 'Chief Financial Officer (CFO)',
    initials: 'ZI',
    image: zaidImg,
    desc: 'Managing financial strategies, risk management, and scalable business investment models.',
  },
  {
    name: 'Abdullah Hamid',
    role: 'CBDO / Head of Business Development',
    initials: 'AH',
    image: abdullahImg,
    desc: 'Fostering strategic partnerships, client relationships, and new market opportunities.',
  },
]

export default function Team() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="team-header">
          <p className="section-label">Leadership</p>
          <h2 className="section-title">Meet the Visionaries</h2>
          <p className="section-subtitle">
            A diverse team of innovators, engineers, and strategists dedicated to helping
            businesses grow through AI and modern digital solutions.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div className={`team-card reveal reveal-delay-${(i % 3) + 1}`} key={member.name}>
              <div className="team-card-photo">
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  /* Visual placeholder for future pictures */
                  <div className="team-photo-placeholder">
                    <div className="team-avatar-ring">
                      {member.initials}
                    </div>
                    <div className="team-photo-label">Photo Placeholder</div>
                  </div>
                )}
                <div className="team-card-overlay" />
              </div>


              <div className="team-card-info">
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <p className="role-desc">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
