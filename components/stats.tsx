'use client'

import { motion } from 'framer-motion'

export function Stats() {
  const stats = [
    {
      label: 'Premier Projects',
      value: '100+',
      description: 'Elite digital architectures successfully deployed globally.',
    },
    {
      label: 'Performance Score',
      value: '99+',
      description: 'Average Lighthouse performance across our premier ecosystem.',
    },
    {
      label: 'Security Rating',
      value: 'A+',
      description: 'Industry-leading security protocols in every architectural layer.',
    },
    {
      label: 'Global Partners',
      value: '50+',
      description: 'Elite firms and visionary brands trusting our technical mastery.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="premium-card text-center flex flex-col items-center justify-center p-12 group hover:border-primary/20 transition-all duration-500"
            >
              <span className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </span>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground mb-4">
                {stat.label}
              </h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed font-bold">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
