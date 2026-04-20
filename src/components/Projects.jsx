import { useRef } from 'react'
import { useInView } from '../hooks'

function ProjectCard({ project }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -10
    const rotY = ((x - cx) / cx) * 10
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <div
      ref={cardRef}
      className="project-card glass-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.1s ease' }}
    >
      <div className="card-glow" />
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
              ↗ Live
            </a>
          )}
        </div>
      </div>
      <h3 className="project-title">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.stack.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

const projects = [
  {
    name: 'You & Us',
    icon: '&',
    description: 'A hand tool for small retailers — an innovative mobile app connecting local businesses and individuals through a loyalty system, geolocated animations and targeted news.',
    stack: ['Flutter', 'Node.js', 'GCP', 'Figma', 'Firebase'],
    live: 'https://you-n-us.com/en',
  },
]

export default function Projects() {
  const [ref, visible] = useInView()

  return (
    <section id="projects" ref={ref} className={`section ${visible ? 'in-view' : ''}`}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag mono">02 / projects</span>
          <h2 className="section-title">Selected Work</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  )
}
