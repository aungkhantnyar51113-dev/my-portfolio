import { Github, Mail, Download, Send, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

const Home = () => {
  const skills = {
    'Front-End': ['React', 'JavaScript (ES6+)','Next.js', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
    'Back-End': ['Node.js', 'Express','Next.js', 'SQL (PostgreSQL)', 'PHP' , 'Laravel 9'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'NPM/Yarn', 'Postman' , 'TRAE', 'Windsurf', 'Cursor AI' , 'Android Studio']
  }

  const socials = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/aungkhantnyar51113-dev', color: 'hover:text-black dark:hover:text-white' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'http://www.linkedin.com/in/aung-khant-nyar-58120b3a8', color: 'hover:text-blue-600' },
    { name: 'Telegram', icon: <Send size={20} />, url: 'https://t.me/cslkoko', color: 'hover:text-sky-500' },
    { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/share/17W5Mp89PK/', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com/reo532007', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: <Youtube size={20} />, url: 'https://www.youtube.com/@AungKhantNyar-13th823', color: 'hover:text-red-600' },
    { name: 'TikTok', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ), url: 'https://www.tiktok.com/@aungkhantnyar.dev', color: 'hover:text-cyan-400' },
  ]

  return (
    <section className="space-y-24 transition-colors duration-300">
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
               I am deeply passionate about building modern digital solutions and is constantly upgrading my skills to become a professional full-stack engineer. 
             
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/cv-form.pdf" 
              download="AungKhantNyar_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 shadow-md shadow-indigo-500/20"
            >
              <Download size={18} />
              Download CV
            </a>
            <a 
              href="mailto:aungkhantnyar51113@gmail.com?subject=Project Inquiry From Portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[#171717] dark:text-white rounded-full text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all hover:border-neutral-300 dark:hover:border-neutral-600"
            >
              <Mail size={18} />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="space-y-8">
        <h2 className="text-lg font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Connect with Me</h2>
        <div className="flex flex-wrap gap-6 md:gap-10">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 text-neutral-500 dark:text-neutral-400 transition-all duration-300 ${social.color} group`}
              title={social.name}
            >
              <span className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-neutral-100 dark:border-neutral-800">
                {social.icon}
              </span>
              <span className="text-sm font-medium hidden sm:block">{social.name}</span>
            </a>
          ))}
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
           I build web applications using React, Node.js, PHP, and Laravel 9.I can handle full-stack development.
           I create user interfaces (UI) using React and Material UI (MUI).

I builds server-side systems and databases using Node.js, Express, and Prisma ORM.

I am currently exploring TypeScript and mobile app development using React Native and Expo.

I smartly uses AI tools like Cursor AI, GitHub Copilot, and Windsurf to write cleaner code and build projects faster.
        </p>
      </div>
    </section>
  )
}

export default Home
