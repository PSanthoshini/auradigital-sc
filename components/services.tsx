'use client'

import { Code2, Smartphone, Globe, Shield, Rocket, Palette } from 'lucide-react'
import { motion } from 'framer-motion'

export function Services() {
  const services = [
    {
      title: 'Global Web Architecture',
      description: 'Engineering resilient, distributed web systems designed for infinite scalability and ultra-low latency.',
      icon: Globe,
      color: 'primary',
    },
    {
      title: 'Sophisticated UI/UX',
      description: 'Crafting minimalist, high-conversion interfaces that resonate with luxury brands and discerning users.',
      icon: Palette,
      color: 'accent',
    },
    {
      title: 'Premier Engineering',
      description: 'Utilizing Next.js, TypeScript, and high-performance cloud infrastructure to build industry-leading products.',
      icon: Code2,
      color: 'primary',
    },
    {
      title: 'Secure Ecosystems',
      description: 'Implementing advanced security protocols and privacy-first architectures for total digital protection.',
      icon: Shield,
      color: 'accent',
    },
    {
      title: 'Strategic Performance',
      description: 'Meticulous optimization achieving perfect lighthouse scores and instantaneous user interactions.',
      icon: Rocket,
      color: 'primary',
    },
    {
      title: 'Adaptive Solutions',
      description: 'Fluid, cross-platform experiences that maintain brand integrity across all devices and resolutions.',
      icon: Smartphone,
      color: 'accent',
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
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight">
            Specialized in <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary to-accent">Premier Infrastructure</span>.
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We deliver more than just code. We build the technological foundation for the next generation of industry leaders.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="premium-card group hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                </div>
                <h4 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
