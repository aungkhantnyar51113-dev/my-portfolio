import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Books & Friends',
      description: 'A minimalist social platform for book enthusiasts to share reviews, track reading progress, and connect with fellow readers.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/aungkhantnyar51113-dev/book-and-friends/commit/7edc05a29c0a76fb5feabf4125a0b68ed6f57292',
      live: 'https://example.com'
    },
    {
      title: 'Visitors to Myanmar',
      description: 'A real-time tracking application for visitors to Myanmar.That is a school small project at ITPEC (IP) passport exam course.',
      tech: ['HTML5/CSS3', 'JavaScript (ES6+)'],
      github: 'https://github.com/aungkhantnyar51113-dev/myanmar-map',
      live: 'https://myanmar-map.vercel.app'
    } ,
    {
      title: 'Song Note App',
      description: 'A simple song note application to manage your favorite songs note write and save local storage.',
      tech: ['HTML5/CSS3', 'JavaScript (ES6+) , (JSON)Local Storage'],
      github: 'https://github.com/aungkhantnyar51113-dev/myanmar/tree/main/song-note-app',
      live: 'https://song-note-app.vercel.app'
    },
    {
      title: 'Movie App',
      description: 'A simple movie application , movie detial reader.',
      tech: ['Next.js (App Router)', 'TypeScript (TSX)', 'MDB (The Movie Database)'],
      github: 'https://github.com/aungkhantnyar51113-dev/movie-app',
      live: 'https://akn-movie.vercel.app'
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
            className="group flex flex-col bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 text-[10px] uppercase tracking-wider font-bold rounded-md border border-slate-200 dark:border-slate-700/50 transition-colors shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-700/50 transition-colors duration-300">
              <a 
                href={project.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-sm font-semibold"
              >
                <Github size={16} />
                Code
              </a>
              <a 
                href={project.live} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-sm font-semibold"
              >
                <ExternalLink size={16} />
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
