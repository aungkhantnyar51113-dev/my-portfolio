import { useState, useEffect } from 'react'

import Home from './components/Home'
import About from './components/About'
import TechTrip from './components/TechTrip'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import WhatICanDo from './components/WhatICanDo'
import Connect from './components/Connect'
import { Github, Mail, Menu, X, Sun, Moon, Home as HomeIcon, Compass, Code2, Award, User, Zap, MessageCircle } from 'lucide-react'

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    const sections = ['home', 'about', 'techtrip', 'projects', 'certificates', 'whaticando', 'connect']
    
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
    { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'techtrip', label: 'Tech Trip', icon: <Compass size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code2 size={20} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={20} /> },
    { id: 'whaticando', label: 'What I Can Do', icon: <Zap size={20} /> },
    { id: 'connect', label: 'Connect', icon: <MessageCircle size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-amber-100 dark:selection:bg-amber-900/30 selection:text-amber-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[var(--background)]/80 backdrop-blur-md z-30 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a
            href="#home"
            className="group flex items-center gap-1.5 text-xl font-black tracking-tighter transition-all duration-300 hover:scale-105 mr-auto"
          >
            <span className="text-neutral-400 dark:text-neutral-500 font-light mr-0.5">&lt;</span>
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all duration-500">
              AKN
            </span>
            <span className="text-neutral-800 dark:text-white">.dev</span>
            <span className="text-neutral-400 dark:text-neutral-500 font-light ml-0.5">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-row items-center gap-8 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm transition-colors hover:text-cyan-400 pb-1 border-b-2 ${
                  activeSection === link.id ? 'text-[#171717] dark:text-white font-medium border-cyan-400' : 'text-neutral-500 dark:text-neutral-400 border-transparent'
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

          {/* Mobile Hamburger Button - ONLY below md: */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Blur Overlay - FIXED HIGHEST PRIORITY (z-40) */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Drawer - FIXED HIGHEST PRIORITY (z-50) */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-neutral-900 z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close Button Inside Sidebar */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col h-full p-6 pt-24 gap-6 text-left">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 text-lg font-medium transition-colors ${
                  activeSection === link.id ? 'text-neutral-900 dark:text-white opacity-100' : 'text-neutral-500 dark:text-neutral-400 opacity-60'
                }`}
              >
                <span>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Sidebar Footer */}
          <div className="mt-auto pt-8 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-neutral-400 dark:text-neutral-400">
            <span className="text-xs uppercase tracking-widest font-bold">AKN Portfolio</span>
            <div className="flex gap-4">
              <Github size={18} />
              <Mail size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <section id="home" className="scroll-mt-32">
          <Home />
        </section>

        <section id="about" className="scroll-mt-32">
          <About />
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

        <section id="whaticando" className="scroll-mt-32">
          <WhatICanDo />
        </section>

        <section id="connect" className="scroll-mt-32">
          <Connect />
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-300">
            © {new Date().getFullYear()} Aung Khant Nyar, Fullstack Engineer
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/aungkhantnyar51113-dev" target="_blank" rel="noopener noreferrer" className="text-neutral-400 dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="mailto:aungkhantnyar51113@gmail.com?subject=Project Inquiry From Portfolio" className="text-neutral-400 dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
