import { motion } from 'framer-motion'
import { 
  Code2, Database, Layout, Server, Terminal, 
  Cpu, GitBranch, Globe, Smartphone, FileCode,
  Layers, Box, Zap, Settings, Cloud
} from 'lucide-react'

const SkillsMarquee = () => {
  const skills = {
    frontend: [
      { name: 'React', icon: <Code2 size={32} /> },
      { name: 'JavaScript (ES6+)', icon: <FileCode size={32} /> },
      { name: 'Next.js', icon: <Globe size={32} /> },
      { name: 'Tailwind CSS', icon: <Layout size={32} /> },
      { name: 'Vite', icon: <Zap size={32} /> },
      { name: 'HTML5/CSS3', icon: <Layers size={32} /> },
    ],
    backend: [
      { name: 'Node.js', icon: <Server size={32} /> },
      { name: 'Express', icon: <Terminal size={32} /> },
      { name: 'SQL (PostgreSQL)', icon: <Database size={32} /> },
      { name: 'PHP', icon: <Box size={32} /> },
      { name: 'Laravel 9', icon: <Settings size={32} /> },
    ],
    tools: [
      { name: 'Git', icon: <GitBranch size={32} /> },
      { name: 'GitHub', icon: <GitBranch size={32} /> },
      { name: 'VS Code', icon: <Code2 size={32} /> },
      { name: 'NPM/Yarn', icon: <Box size={32} /> },
      { name: 'Postman', icon: <Cloud size={32} /> },
      { name: 'TRAE', icon: <Cpu size={32} /> },
      { name: 'Windsurf', icon: <Zap size={32} /> },
      { name: 'Cursor AI', icon: <Settings size={32} /> },
      { name: 'Android Studio', icon: <Smartphone size={32} /> },
    ]
  }

  const MarqueeRow = ({ items, direction = 'left' }) => {
    const duplicatedItems = [...items, ...items, ...items]

    return (
      <div className="relative overflow-hidden py-6">
        <motion.div
          className="flex gap-8"
          animate={{
            x: direction === 'left' ? [0, -1000] : [-1000, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear'
            }
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700/50 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h2 className="text-lg font-medium text-cyan-500 dark:text-cyan-400 uppercase tracking-widest">
        Skills Matrix
      </h2>
      
      <div className="space-y-6">
        {/* Front-End Row */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <MarqueeRow items={skills.frontend} direction="left" />
        </div>

        {/* Back-End Row */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <MarqueeRow items={skills.backend} direction="right" />
        </div>

        {/* Tools Row */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <MarqueeRow items={skills.tools} direction="left" />
        </div>
      </div>
    </div>
  )
}

export default SkillsMarquee
