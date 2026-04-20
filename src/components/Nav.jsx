export default function Nav({ active, onNav, theme, onTheme }) {
  const items = [
    { id: 'hero',       label: 'Home',       icon: '⌂' },
    { id: 'projects',   label: 'Projects',   icon: '◈' },
    { id: 'experience', label: 'Experience', icon: '◎' },
    { id: 'skills',     label: 'Skills',     icon: '◆' },
    { id: 'contact',    label: 'Contact',    icon: '◉' },
  ]

  return (
    <nav className="floating-nav">
      <div className="nav-pill">
        {items.map(item => (
          <button
            key={item.id}
            className={`nav-btn ${active === item.id ? 'active' : ''}`}
            onClick={() => onNav(item.id)}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
        <div className="nav-divider" />
        <button className="nav-btn theme-btn" onClick={onTheme} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
          <span className="nav-icon">{theme === 'dark' ? '☀' : '◑'}</span>
        </button>
      </div>
    </nav>
  )
}
