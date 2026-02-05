'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('https://formspree.io/f/xreazyvy', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        setMessage('Thank you! We\'ll get back to you soon.')
        e.currentTarget.reset()
        setTimeout(() => setMessage(''), 5000)
      }
    } catch (error) {
      setMessage('There was an error. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-2 md:py-4 bg-gradient-to-br from-background via-pink-50/30 to-purple-50/30 dark:from-background dark:via-pink-950/15 dark:to-purple-950/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Have a project in mind? We'd love to discuss how we can help bring your vision to life. Get in touch and let's create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6 slide-up">
            <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl border border-primary/20 bg-white/40 dark:bg-white/5 backdrop-blur-sm shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/60 dark:bg-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/60 dark:bg-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/60 dark:bg-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/60 dark:bg-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none backdrop-blur-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover-scale transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {message && (
                <p className={`text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 slide-up" style={{ animationDelay: '100ms' }}>
            <div className="p-6 rounded-xl border border-primary/20 bg-white/40 dark:bg-white/5 backdrop-blur-sm shadow-lg">
              <h3 className="text-xl font-semibold gradient-text mb-6">
                Contact Details
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Email</p>
                    <a
                      href="mailto:auradigital.studio.sc@gmail.com"
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      auradigital.studio.sc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <div className="space-y-1">
                      <a
                        href="tel:+918309804089"
                        className="block text-foreground/70 hover:text-primary transition-colors"
                      >
                        8309804089
                      </a>
                      <a
                        href="tel:+919182741235"
                        className="block text-foreground/70 hover:text-primary transition-colors"
                      >
                        9182741235
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Response Time
              </h3>
              <p className="text-foreground/70">
                We typically respond to inquiries within 24 hours.If there is any delay, we still respond to you in 24 - 72 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
