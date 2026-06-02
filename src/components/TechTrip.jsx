const TechTrip = () => {
  const timelineData = [
    {
      year: '2026',
      title: 'Refining & Deepening',
      description: 'Focused on refining Front-End expertise, mastering Next.js, and launching the "Books & Friends" social platform.Then, I passed the ITPEC (IP) passport exam course. And now, i am learning PHP and Laravel.',
      status: 'Current',
      milestones: ['Next.js App Router', 'TypeScript Transition', 'Community Building']
    },
    {
      year: '2025',
      title: 'The Foundation',
      description: 'Built a solid foundation in modern web development. I understand well the Html, Css, and JavaScript and mySQL.Next, I am familiar with React, Node.js at Fairway Technology(Tech School). By the time of learning web development, I have learned about ITPEC (IP) passport exam course',
      status: 'Completed',
      milestones: ['React Ecosystem', 'Responsive Design', 'SQL Fundamentals']
    }
  ]

  return (
    <section className="max-w-2xl mx-auto py-8 transition-colors duration-300">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl font-medium tracking-tight dark:text-neutral-100">Tech Trip</h2>
        <p className="text-neutral-500 dark:text-neutral-300 font-light">A chronological look at my growth and learning path.</p>
      </div>

      <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 space-y-16 transition-colors duration-300">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-10 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[6px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-neutral-900 ring-4 transition-all duration-300 ${
              item.status === 'Current' ? 'bg-amber-500 ring-amber-100 dark:ring-amber-900/30' : 'bg-neutral-300 dark:bg-neutral-700 ring-neutral-100 dark:ring-neutral-800/50'
            }`} />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className={`text-sm font-semibold tracking-tighter ${
                  item.status === 'Current' ? 'text-amber-600 dark:text-amber-400' : 'text-neutral-400 dark:text-neutral-500'
                }`}>
                  {item.year}
                </span>
                {item.status === 'Current' && (
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider rounded transition-colors duration-300">
                    Active
                  </span>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-[#171717] dark:text-neutral-100">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.milestones.map((milestone) => (
                  <span 
                    key={milestone}
                    className="text-xs text-neutral-500 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded transition-colors duration-300"
                  >
                    {milestone}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechTrip
