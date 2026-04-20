import { useState, useEffect } from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('hero')

  // Sync theme to <html data-theme>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'projects', 'experience', 'skills', 'contact']
    const observers = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Background theme={theme} />
      <Nav active={activeSection} onNav={scrollTo} theme={theme} onTheme={toggleTheme} />
      <main>
        <Hero onNav={scrollTo} />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
