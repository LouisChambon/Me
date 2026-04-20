import { useState } from 'react'
import { useInView } from '../hooks'

const jobs = [
  {
    company: 'Groupama Gan Vie',
    roles: [
      { title: 'Software Engineer',    type: 'CDI', period: 'Apr 2026 — Present',      duration: '1 mo' },
      { title: 'Full-stack Developer', type: 'CDD', period: 'Sept 2025 — Mar 2026',    duration: '7 mo' },
    ],
    location: 'Nanterre, France · Hybrid',
    desc: 'Contribute to development of internal web & mobile applications, maintain and automate internal infrastructure, implement LLM integrations to enhance automation.',
    stack: ['Angular', '.NET', 'Liquibase', 'Microservices', 'LLM'],
    color: '#7c3aed',
  },
  {
    company: 'You & Us',
    roles: [
      { title: 'CEO · Full Stack · Product Designer', type: 'Freelance', period: 'May 2024 — Present', duration: '2 yr' },
    ],
    location: 'Paris, France · Hybrid',
    desc: 'Co-Founder of You&Us — connecting local businesses and individuals via loyalty, geolocated animations and targeted news. Full-stack, mobile, cloud infra, UI/UX on Figma.',
    stack: ['Flutter', 'Node.js', 'GCP', 'Figma', 'Firebase', 'NFC'],
    color: '#9f67ff',
  },
  {
    company: 'Ministère de la Sécurité Publique',
    roles: [
      { title: 'Full-stack Developer', type: 'CDD', period: 'Oct 2024 — May 2025', duration: '8 mo' },
    ],
    location: 'Québec, Canada · Remote',
    desc: 'Developed an internal web app for database migration for MSP and MTMD, ensuring secure and efficient data transitions while maintaining operational continuity and compliance.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Security', 'Cloud'],
    color: '#06b6d4',
  },
  {
    company: 'Carrefour',
    roles: [
      { title: 'Data Engineer', type: 'Internship', period: 'Feb 2024 — Jun 2024', duration: '5 mo' },
    ],
    location: 'Massy, France · Hybrid',
    desc: 'Enhanced e-commerce personalization with Python, Streamlit & Pandas. Built recommendation algorithm testing tools and newsletter personalization dashboards using BigQuery.',
    stack: ['Python', 'BigQuery', 'GCP', 'Streamlit', 'Pandas'],
    color: '#10b981',
  },
  {
    company: 'Orano',
    roles: [
      { title: 'Frontend Developer', type: 'Internship', period: 'Jul 2022 — Dec 2022', duration: '6 mo' },
    ],
    location: 'Châtillon, France',
    desc: 'Worked as a frontend developer building internal interfaces with React and TypeScript.',
    stack: ['React', 'TypeScript'],
    color: '#f59e0b',
  },
]

export default function Timeline() {
  const [ref, visible] = useInView()
  const [active, setActive] = useState(0)

  return (
    <section id="experience" ref={ref} className={`section ${visible ? 'in-view' : ''}`}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag mono">03 / experience</span>
          <h2 className="section-title">Career Timeline</h2>
        </div>
        <div className="timeline-layout">
          <div className="timeline-list">
            {jobs.map((job, i) => (
              <div
                key={i}
                className={`timeline-item ${active === i ? 'tl-active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--dot-color': job.color }}
              >
                <div className="tl-dot" />
                <div className="tl-content">
                  <div className="tl-company">{job.company}</div>
                  <div className="tl-role mono muted">{job.roles[0].title}</div>
                  <div className="tl-period mono muted small">{job.roles[0].period}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-detail glass-card" key={active}>
            <div className="td-header">
              <h3 className="td-company" style={{ color: jobs[active].color }}>{jobs[active].company}</h3>
              <span className="mono muted small">{jobs[active].location}</span>
            </div>
            {jobs[active].roles.map((r, i) => (
              <div key={i} className="td-role-row">
                <span className="td-title">{r.title}</span>
                <span className="td-badge">{r.type}</span>
                <span className="mono muted small">{r.period}</span>
              </div>
            ))}
            <p className="td-desc">{jobs[active].desc}</p>
            <div className="project-tags">
              {jobs[active].stack.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
