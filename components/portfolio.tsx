'use client'
import { useState, useRef, useEffect } from 'react'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { projects, Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function Portfolio() {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories: (Project['category'] | 'All')[] = [
    'All',
    'Hotel/Resort',
    'Architect',
    'Banquet Hall',
    'Flower Shop',
  ]

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <section id="work" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-primary)/0.02,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Our Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1]">
              A Gallery of <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary to-accent">Premier Works</span>.
            </h3>
          </motion.div>

          {/* Category Filter Dropdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center justify-between min-w-[200px] px-6 py-4 bg-secondary rounded-2xl border border-border/50 text-xs font-black uppercase tracking-widest text-foreground hover:border-primary/30 transition-all duration-500"
            >
              <span className="flex flex-col items-start gap-1">
                <span className="text-[10px] text-muted-foreground font-bold">Category</span>
                {filter}
              </span>
              <ChevronDown className={cn("w-4 h-4 text-primary transition-transform duration-500", isOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-4 w-[240px] p-2 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl z-50 origin-top"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setFilter(cat)
                        setIsOpen(false)
                      }}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300",
                        filter === cat
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="premium-card !p-0 group"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group flex flex-col">
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-background/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-foreground border border-border/50">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-3 py-1 bg-secondary text-foreground/70 rounded-full border border-border/50 font-bold uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
