'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={cn(
        "fixed top-6 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "top-4" : "top-8"
      )}
    >
      <div className="glass max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-foreground flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xs">AD</span>
          AURADIGITAL
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-all text-xs font-black uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/10"
        >
          Work With Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass mx-4 mt-2 p-6 slide-down">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-6 py-4 bg-primary text-primary-foreground rounded-xl text-center text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Work With Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
