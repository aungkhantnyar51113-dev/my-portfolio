import { useState, useEffect, useRef } from 'react'

const WhatICanDo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const technicalSkills = [
    'Frontend Development',
    'Backend Development',
    'Database Management',
    'UI/UX Design',
    'API Integration',
    'Performance Optimization'
  ]

  const whatICanBuild = [
    'Responsive Websites',
    'Full-Stack Web Apps',
    'Cloud-Based Solutions',
    'Mobile-First Experiences',
    'Real-Time Applications',
    'Secure Systems'
  ]

  return (
    <section
      ref={sectionRef}
      className={`space-y-12 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">What Can I Do?</h2>
        <p className="text-neutral-500 dark:text-neutral-200 font-light max-w-xl">
          A comprehensive overview of my technical capabilities and the types of solutions I can deliver.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card - Technical Skills */}
        <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 transition-colors duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              Technical Skills
            </h3>

            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-neutral-600 dark:text-neutral-200"
                >
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white flex-shrink-0" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card - What I Can Build */}
        <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 transition-colors duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              What I Can Build
            </h3>

            <div className="space-y-4">
              {whatICanBuild.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-neutral-600 dark:text-neutral-200"
                >
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatICanDo
