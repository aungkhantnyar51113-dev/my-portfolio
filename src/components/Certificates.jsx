import { useState } from 'react'
import { Award, Download, X } from 'lucide-react'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      name: 'Information Technology Passport Examination (IP)',
      issuer: 'ITPEC / Japan Government',
      date: 'April 2026',
      link: '/'
    },
    {
      name: 'Full Stack Web Development Professional',
      issuer: 'Fairway Technology',
      date: 'Mar 2026',
      link: '/professional.jpg'
    },
    {
      name: 'Programming Foundation',
      issuer: 'Fairway Technology',
      date: 'Oct 2025',
      link: '/basic.jpg'
    }
  ]

  const closeModal = () => {
    setSelectedCert(null)
  }

  return (
    <section className="space-y-12 transition-colors duration-300">
      <div className="space-y-4">
        <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">Certificates</h2>
        <p className="text-neutral-500 dark:text-neutral-200 font-light max-w-xl">
          Professional certifications and specialized training I've completed to validate my technical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index}
            className="flex flex-col p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-neutral-400 dark:text-neutral-500 group-hover:text-amber-500 transition-colors">
                <Award size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-400">
                {cert.date}
              </span>
            </div>

            <div className="space-y-2 flex-grow">
              <h3 className="text-base font-medium text-[#171717] dark:text-white leading-snug">
                {cert.name}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-300 font-light">
                {cert.issuer}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4 pt-4 border-t border-neutral-50 dark:border-neutral-700/50">
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-xs font-medium text-neutral-400 dark:text-neutral-400 hover:text-[#171717] dark:hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download size={12} />
                View Credential
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm transition-opacity" />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-5xl mx-auto flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Placed neatly at top-right of container or outside */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors cursor-pointer z-[110]"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {/* Certificate Image - Dynamic scaling, object-contain ensures no cropping */}
            <div className="w-full bg-white dark:bg-black rounded-2xl overflow-hidden shadow-2xl p-2 md:p-4">
              <img 
                src={selectedCert.link} 
                alt={selectedCert.name}
                className="w-full max-h-[80vh] md:max-h-[85vh] object-contain mx-auto rounded-lg"
              />
              
              {/* Info below image */}
              <div className="mt-4 px-2 pb-2 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-white leading-tight">{selectedCert.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium mt-1">{selectedCert.issuer}</p>
                </div>
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase">{selectedCert.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
