import { useInView } from '../hooks'

const categories = [
  { label: 'Languages', skills: ['TypeScript', 'Python', 'Dart', 'SQL', 'C#'] },
  { label: 'Frontend',  skills: ['React', 'Next.js', 'Angular', 'Flutter', 'CSS'] },
  { label: 'Backend',   skills: ['Node.js', '.NET', 'REST APIs', 'GraphQL', 'MongoDB'] },
  { label: 'DevOps & Cloud', skills: ['Kubernetes', 'Terraform', 'GCP', 'Azure', 'Docker'] },
  { label: 'Tools',     skills: ['Figma', 'Git', 'Agile', 'BigQuery', 'Firebase'] },
]

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" ref={ref} className={`section ${visible ? 'in-view' : ''}`}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag mono">04 / skills</span>
          <h2 className="section-title">Tech Arsenal</h2>
        </div>
        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <div key={ci} className="skill-category glass-card" style={{ animationDelay: `${ci * 0.1}s` }}>
              <div className="skill-cat-label mono">{cat.label}</div>
              <div className="skill-tags">
                {cat.skills.map((s, si) => (
                  <span key={si} className="skill-tag" style={{ animationDelay: `${ci * 0.1 + si * 0.05}s` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
