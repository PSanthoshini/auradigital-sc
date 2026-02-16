'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--color-primary)/0.03,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Inquiry</h2>
              <h3 className="text-4xl md:text-7xl font-black text-foreground leading-[1.1]">
                Let's Architect <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary to-accent">Your Future</span>.
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Connect with our elite engineering team to discuss your next premier digital infrastructure.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: Mail, label: 'Email Primary', value: 'hello@auradigital.sc', link: 'mailto:hello@auradigital.sc' },
                { icon: Phone, label: 'Secure Line', value: '+91 8309 8040 89', link: 'tel:+918309804089' },
                { icon: MapPin, label: 'HQ Virtual', value: 'Strategic Digital Hub, Hyderabad', link: '#' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={idx}
                    href={item.link}
                    variants={itemVariants}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    className="premium-card flex items-center gap-6 group hover:border-primary/20 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-lg font-black text-foreground tracking-tight group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="premium-card relative overflow-hidden backdrop-blur-3xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>
                    <h4 className="text-3xl font-black text-foreground uppercase tracking-widest">Inquiry Received</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Our elite team has received your request. <br />We will reach out with a strategic response shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary/70 transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="ALEXANDER VOGT"
                          className="w-full px-6 py-4 bg-secondary rounded-2xl border border-border/50 focus:border-primary/50 focus:ring-0 text-foreground placeholder:text-foreground/20 text-xs font-bold uppercase tracking-wider transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Work Email</label>
                        <input
                          type="email"
                          required
                          placeholder="ALEX@ELITE.INC"
                          className="w-full px-6 py-4 bg-secondary rounded-2xl border border-border/50 focus:border-primary/50 focus:ring-0 text-foreground placeholder:text-foreground/20 text-xs font-bold uppercase tracking-wider transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Strategic Objective</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="TELL US ABOUT YOUR VISION..."
                        className="w-full px-6 py-4 bg-secondary rounded-2xl border border-border/50 focus:border-primary/50 focus:ring-0 text-foreground placeholder:text-foreground/20 text-xs font-bold uppercase tracking-wider transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:translate-y-0",
                        isSubmitting && "animate-pulse"
                      )}
                    >
                      {isSubmitting ? 'Transmitting...' : 'Transmit Inquiry'}
                      <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
