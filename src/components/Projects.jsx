import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Books & Friends',
      description: 'A minimalist social platform for book enthusiasts to share reviews, track reading progress, and connect with fellow readers.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Family Grocery List',
      description: 'A collaborative real-time grocery list application designed for families to sync their shopping needs efficiently.',
      tech: ['React', 'Node.js', 'Express', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  return (
    <section className="space-y-12 transition-colors duration-300">
      <div className="space-y-4">
        <h2 className="text-3xl font-medium tracking-tight dark:text-neutral-100">Projects</h2>
        <p className="text-neutral-500 dark:text-neutral-300 font-light max-w-xl">
          A selection of projects where I've applied my skills to solve real-world problems and explore new technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group flex flex-col bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 hover:border-amber-200 dark:hover:border-amber-900 transition-all hover:shadow-sm"
          >
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-medium text-[#171717] dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm font-light leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-700 transition-colors duration-300">
              <a 
                href={project.github} 
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <Github size={14} />
                Code
              </a>
              <a 
                href={project.live} 
                className="text-neutral-500 dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
