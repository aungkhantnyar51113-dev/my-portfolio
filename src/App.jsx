import { useState, useEffect } from 'react'

import Home from './components/Home'
import TechTrip from './components/TechTrip'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import { Github, Mail, Menu, X, Sun, Moon } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the middle of view
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = ['home', 'techtrip', 'projects', 'certificates']
    
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'techtrip', label: 'Tech Trip' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
  ]

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-amber-100 dark:selection:bg-amber-900/30 selection:text-amber-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[var(--background)]/80 backdrop-blur-md z-50 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a 
            href="#home"
            className="group flex items-center gap-1.5 text-xl font-black tracking-tighter transition-all duration-300 hover:scale-105"
          >
            <span className="text-neutral-400 dark:text-neutral-600 font-light mr-0.5">&lt;</span>
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all duration-500">
              AKN
            </span>
            <span className="text-neutral-800 dark:text-white">.dev</span>
            <span className="text-neutral-400 dark:text-neutral-600 font-light ml-0.5">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm transition-colors hover:text-[#171717] dark:hover:text-white ${
                  activeSection === link.id ? 'text-[#171717] dark:text-white font-medium' : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#fafafa] dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-left text-sm py-2 transition-colors ${
                  activeSection === link.id ? 'text-[#171717] dark:text-white font-medium' : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <section id="home" className="scroll-mt-32">
          <Home />
        </section>
        
        <section id="techtrip" className="scroll-mt-32">
          <TechTrip />
        </section>

        <section id="projects" className="scroll-mt-32">
          <Projects />
        </section>

        <section id="certificates" className="scroll-mt-32">
          <Certificates />
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Aung Khant Nyar, Fullstack Engineer
          </div>
          <div className="flex items-center gap-6"> 
            <a href="https://github.com/aungkhantnyar51113-dev" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="mailto:aungkhantnyar51113@gmail.com?subject=Project Inquiry From Portfolio" className="text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
