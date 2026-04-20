import { useTypewriter, useInView } from '../hooks'

function Cube3D() {
  return (
    <div className="cube-scene">
      <div className="cube">
        {['front', 'back', 'left', 'right', 'top', 'bottom'].map(face => (
          <div key={face} className={`cube-face face-${face}`}>
            <div className="face-inner" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero({ onNav }) {
  const roles = ['Software Engineer', 'Full Stack Developer', 'Mobile Dev', 'DevOps Engineer', 'AI Integrator']
  const role = useTypewriter(roles)
  const [ref, visible] = useInView(0.01)

  return (
    <section id="hero" ref={ref} className={`section hero-section ${visible ? 'in-view' : ''}`}>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-label reveal-1">{'< Louis Chambon />'}</div>
          <h1 className="hero-name reveal-2">
            Building <span className="accent-text">Attractive</span>
            <br />Products.
          </h1>
          <div className="hero-role reveal-3">
            <span className="mono">&gt; </span>
            <span className="typewriter accent-text">{role}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-bio reveal-4">
            Mobile &amp; web applications, DevOps, AI Integrations. I build attractive products that scale.
          </p>
          <div className="hero-cta reveal-5">
            <button className="btn-primary" onClick={() => onNav('projects')}>View Projects</button>
            <button className="btn-ghost" onClick={() => onNav('contact')}>Get in touch</button>
          </div>
        </div>
        <div className="hero-visual reveal-6">
          <Cube3D />
          <div className="hero-rings">
            {[1, 2, 3].map(i => <div key={i} className={`ring ring-${i}`} />)}
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span className="mono muted">scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
