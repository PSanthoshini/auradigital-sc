'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Alexander Vogt',
      role: 'CEO, Alpine Resorts',
      content: 'AURADIGITAL transformed our booking experience. The performance and aesthetic quality they delivered are simply unmatched in the luxury travel sector.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Elena Rossi',
      role: 'Founding Partner, Rossi & Co.',
      content: 'Professionalism at its peak. Their architectural approach to web development ensured our portfolio resonates perfectly with our high-end clientele.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Marcus Thorne',
      role: 'Director, Thorne Estates',
      content: 'Exceptional strategic insight. They didn’t just build a website; they architected a digital engine that has significantly increased our strategic inquiry rate.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="testimonials" className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight">
            Trusted by <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary to-accent">Industry Visionaries</span>.
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Elite partnerships built on trust, precision, and the consistent delivery of exceptional digital results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="premium-card relative flex flex-col h-full group"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              <blockquote className="flex-1 mb-8">
                <p className="text-lg font-medium text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-xs">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-black text-foreground uppercase tracking-wider text-xs">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
