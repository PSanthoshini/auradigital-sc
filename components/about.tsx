'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Zap } from 'lucide-react'

export function About() {
  const principles = [
    {
      icon: Target,
      title: 'Strategic Precision',
      description: 'We align every pixel and every line of code with your definitive business objectives.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Depth',
      description: 'Beyond visual flair, we engineer solutions that solve complex architectural challenges.',
    },
    {
      icon: Zap,
      title: 'Extreme Performance',
      description: 'Our uncompromising focus on speed ensures your brand performs at the highest echelon.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Our Narrative</h2>
              <h3 className="text-4xl md:text-7xl font-black text-foreground leading-[1.1]">
                Defining the <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Frontier</span>.
              </h3>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              AURADIGITAL is an elite collective of digital architects and engineers dedicated to crafting premier web experiences. We believe that technology should be as elegant as it is powerful.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            {principles.map((p, idx) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="premium-card flex gap-8 items-start group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-black text-foreground uppercase tracking-wider">
                      {p.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
