'use client'

import { Code2, Smartphone, Globe, Shield, Rocket, Palette, Bot, Mic, ArrowUpRight, Sparkles } from 'lucide-react'
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
    {
      title: 'Customized AI Chatbot',
      description: 'Intelligent, brand-aware conversational agents that automate customer engagement and enhance user interaction.',
      icon: Bot,
      color: 'primary',
      isAI: true,
    },
    {
      title: 'AI Voice Assistant',
      description: 'Advanced voice-activated AI solutions for seamless, hands-free digital experiences with natural processing.',
      icon: Mic,
      color: 'accent',
      isAI: true,
      link: 'https://vapi.ai?demo=true&shareKey=2970c413-ac09-4b24-bb41-c2eed03bc378&assistantId=a34ca162-50e3-4967-aefe-2627ded585b5'
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
            Specialized in <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary to-accent">AI-Driven Infrastructure</span>.
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
                className={`premium-card group transition-all duration-500 relative ${
                  'isAI' in service && service.isAI 
                    ? 'border-primary/50 bg-gradient-to-br from-primary/[0.05] to-accent/[0.05] shadow-[0_0_30px_-10px_rgba(var(--color-primary-rgb),0.2)]' 
                    : 'hover:border-primary/20'
                }`}
              >
                {'isAI' in service && service.isAI && (
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">AI Powered</span>
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                  'isAI' in service && service.isAI 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary group-hover:bg-primary'
                }`}>
                  <Icon className={`w-7 h-7 transition-all duration-500 ${
                    'isAI' in service && service.isAI 
                      ? 'text-primary-foreground' 
                      : 'text-primary group-hover:text-primary-foreground'
                  }`} />
                </div>
                <h4 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                {'link' in service && service.link && (
                  <a 
                    href={service.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline group/link"
                  >
                    Experience Demo
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
