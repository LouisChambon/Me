import { useInView } from '../hooks'

const links = [
  { label: 'LinkedIn', handle: '/in/louis-chambon', href: 'https://www.linkedin.com/in/louis-chambon-4175b2225/', icon: '◈' },
  { label: 'GitHub',   handle: 'LouisChambon',      href: 'https://github.com/LouisChambon',                      icon: '◎' },
  { label: 'Email',    handle: 'chambonl.pro@gmail.com', href: 'mailto:chambonl.pro@gmail.com',                   icon: '◉' },
]

export default function Contact() {
  const [ref, visible] = useInView()

  return (
    <section id="contact" ref={ref} className={`section ${visible ? 'in-view' : ''}`}>
      <div className="section-inner contact-inner">
        <div className="section-header">
          <span className="section-tag mono">05 / contact</span>
          <h2 className="section-title">Let's Build Something</h2>
        </div>
        <p className="contact-sub">
          Open to exciting opportunities, collaborations, or just a great conversation about tech.
        </p>
        <div className="contact-links">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="contact-icon accent-text">{l.icon}</span>
              <div>
                <div className="contact-label mono muted small">{l.label}</div>
                <div className="contact-handle">{l.handle}</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
        <div className="footer-line mono muted small">
          © 2026 Louis Chambon · Built with passion &amp; TypeScript
        </div>
      </div>
    </section>
  )
}
