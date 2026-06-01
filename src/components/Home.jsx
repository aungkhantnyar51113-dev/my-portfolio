import { Github, Mail } from 'lucide-react'

const Home = () => {
  const skills = {
    'Front-End': ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
    'Back-End': ['Node.js', 'Express', 'SQL (PostgreSQL)', 'REST APIs'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'NPM/Yarn', 'Postman']
  }

  return (
    <section className="space-y-20 transition-colors duration-300">
      {/* Hero Section - CV Style Layout */}
      <div className="flex flex-col md:flex-row gap-10 md:items-center">
        {/* Profile Image Container */}
        <div className="shrink-0">
          <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
            <img 
              src="/cvphoto.jpg" 
              alt="Aung Khant Nyar" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Bio Text Container */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#171717] dark:text-neutral-100 leading-tight">
              Hi, I'm Aung Khant Nyar.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-300 leading-relaxed font-light">
              A 19-year-old Tech Learner and Web Developer from Myanmar. 
              I build clean, functional, and human-centric digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/aungkhantnyar51113-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] dark:bg-white text-white dark:text-[#171717] rounded-full text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:shadow-md"
            >
              <Github size={16} />
              GitHub
            </a>
            <a 
              href="mailto:aungkhantnyar51113@gmail.com?subject=Project Inquiry From Portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[#171717] dark:text-white rounded-full text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all hover:border-neutral-300 dark:hover:border-neutral-600"
            >
              <Mail size={16} />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-8">
        <h2 className="text-lg font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Skills Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-semibold text-[#171717] dark:text-neutral-100">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-md border border-amber-100/50 dark:border-amber-900/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brief About / Philosophy */}
      <div className="prose prose-neutral prose-lg max-w-none border-t border-neutral-100 dark:border-neutral-800 pt-16 transition-colors duration-300">
        <p className="text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
          I believe that technology should feel natural and unobtrusive. My approach to development 
          focuses on clean code, thoughtful typography, and intentional whitespace. Currently refining 
          my craft in the React ecosystem while exploring the depths of full-stack development.
        </p>
      </div>
    </section>
  )
}

export default Home
