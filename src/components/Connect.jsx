import { Github, Linkedin, Send, Facebook, Instagram, Youtube } from 'lucide-react'

const Connect = () => {
  const socials = [
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/aungkhantnyar51113-dev', color: 'hover:text-black dark:hover:text-white' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'http://www.linkedin.com/in/aung-khant-nyar-58120b3a8', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Telegram', icon: <Send size={24} />, url: 'https://t.me/cslkoko', color: 'hover:text-sky-500 dark:hover:text-sky-400' },
    { name: 'Facebook', icon: <Facebook size={24} />, url: 'https://www.facebook.com/share/17W5Mp89PK/', color: 'hover:text-blue-500 dark:hover:text-blue-400' },
    { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://instagram.com/reo532007', color: 'hover:text-pink-500 dark:hover:text-pink-400' },
    { name: 'YouTube', icon: <Youtube size={24} />, url: 'https://www.youtube.com/@AungKhantNyar-13th823', color: 'hover:text-red-600 dark:hover:text-red-400' },
    { name: 'TikTok', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ), url: 'https://www.tiktok.com/@aungkhantnyar.dev', color: 'hover:text-cyan-400 dark:hover:text-cyan-300' },
  ]

  return (
    <section className="space-y-12 transition-colors duration-300">
      <div className="space-y-4">
        <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">Connect With Me</h2>
        <p className="text-neutral-500 dark:text-neutral-300 font-light max-w-xl">
          Let's connect! Reach out to me through any of these platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-3 p-6 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 group ${social.color}`}
            title={social.name}
          >
            <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-inherit transition-colors">
              {social.icon}
            </span>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-inherit transition-colors">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Connect
