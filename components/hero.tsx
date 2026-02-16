'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)/0.03,transparent_70%)]" />

      {/* Background geometric shapes with motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">
              Elevating Digital Presence
            </h2>
            <h1 className="text-6xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
              ARCHITECTING <br />
              <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">PREMIER</span> <br />
              EXPERIENCES
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium"
          >
            AURADIGITAL crafts high-performance, visually stunning web applications for visionary brands. We blend strategic design with cutting-edge engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              See our projects
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-secondary text-foreground rounded-2xl font-black uppercase tracking-[0.2em] text-xs border border-border/50 hover:bg-background hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              Start an inquiry
            </a>
          </motion.div>

          {/* Minimal Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-black tabular-nums">1.2s</span>
              <span className="text-[10px] uppercase tracking-widest font-black">LCP Score</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-black tabular-nums">99.9%</span>
              <span className="text-[10px] uppercase tracking-widest font-black">Reliability</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-black tabular-nums">100%</span>
              <span className="text-[10px] uppercase tracking-widest font-black">Security Score</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-black tabular-nums">24/7</span>
              <span className="text-[10px] uppercase tracking-widest font-black">Active Monitoring</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
