import { useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Award, ExternalLink, X } from 'lucide-react'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      name: 'Information Technology Passport Examination (IP)',
      issuer: 'ITPEC / Japan Government',
      date: 'April 2026',
      link: '/IT.jpg'
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

  const CertificateCard = ({ cert, index }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function onMouseMove({ currentTarget, clientX, clientY }) {
      const { left, top, width, height } = currentTarget.getBoundingClientRect()
      x.set(clientX - left - width / 2)
      y.set(clientY - top - height / 2)
    }

    function onMouseLeave() {
      x.set(0)
      y.set(0)
    }

    const rotateX = useTransform(mouseY, [-200, 200], [5, -5])
    const rotateY = useTransform(mouseX, [-200, 200], [-5, 5])

    return (
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative group perspective-1000"
      >
        <motion.div
          style={{
            transform: 'translateZ(20px)'
          }}
          className="flex flex-col p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Award size={28} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-800 px-3 py-1 rounded-full">
              {cert.date}
            </span>
          </div>

          <div className="space-y-3 flex-grow">
            <h3 className="text-lg font-semibold text-[#171717] dark:text-white leading-snug">
              {cert.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
              {cert.issuer}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-700/50">
            <motion.button
              onClick={() => setSelectedCert(cert)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>View Credential</span>
              <ExternalLink size={16} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section className="space-y-12 transition-colors duration-300">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">Certificates</h2>
        <p className="text-neutral-500 dark:text-neutral-200 font-light max-w-xl text-lg">
          Professional certifications and specialized training I've completed to validate my technical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} index={index} />
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <>
          {/* Disable body scroll */}
          <style jsx global>{`
            body { overflow: hidden; }
          `}</style>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl mx-auto flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute -top-14 right-0 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all cursor-pointer z-[110]"
                aria-label="Close modal"
              >
                <X size={24} />
              </motion.button>

              {/* Certificate Image */}
              <div className="w-full bg-white dark:bg-black rounded-2xl overflow-hidden shadow-2xl p-2 md:p-4">
                <img 
                  src={selectedCert.link} 
                  alt={selectedCert.name}
                  className="w-full max-h-[80vh] md:max-h-[85vh] object-contain mx-auto rounded-lg"
                />
                
                {/* Info below image */}
                <div className="mt-4 px-2 pb-2 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white leading-tight">{selectedCert.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium mt-1">{selectedCert.issuer}</p>
                  </div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">{selectedCert.date}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  )
}

export default Certificates
