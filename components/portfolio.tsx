'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Botaniq Flora',
      category: 'ecommerce',
      description: 'Modern plant-themed e-commerce platform with smooth interactions and responsive design.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Responsive'],
      image: '🌿',
      link: 'https://botaniq-flora.vercel.app/',
      featured: true,
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'saas',
      description: 'Full-featured analytics dashboard with real-time data visualization and user management.',
      tech: ['React', 'TypeScript', 'Chart.js', 'API Integration'],
      image: '📊',
      link: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'website',
      description: 'Stunning portfolio site showcasing creative work with smooth animations and transitions.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'SEO'],
      image: '🎨',
      link: '#',
    },
    {
      id: 4,
      title: 'Mobile App Landing',
      category: 'marketing',
      description: 'High-converting landing page for mobile app with integrated analytics and email capture.',
      tech: ['Next.js', 'React', 'Vercel', 'Conversion'],
      image: '📱',
      link: '#',
    },
    {
      id: 5,
      title: 'API Platform',
      category: 'saas',
      description: 'Scalable REST API with comprehensive documentation, rate limiting, and developer portal.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      image: '⚙️',
      link: '#',
    },
    {
      id: 6,
      title: 'Content Platform',
      category: 'website',
      description: 'Publishing platform with rich text editing, media management, and collaborative features.',
      tech: ['Next.js', 'PostgreSQL', 'Rich Text', 'Real-time'],
      image: '📝',
      link: '#',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'saas', label: 'SaaS' },
    { value: 'website', label: 'Websites' },
    { value: 'marketing', label: 'Marketing' },
  ]

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="py-2 md:py-4 bg-gradient-to-b from-background via-purple-50/40 to-blue-50/40 dark:from-background dark:via-purple-950/15 dark:to-blue-950/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Our Work
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            A selection of projects we've built for startups, agencies, and enterprises across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 slide-up" style={{ animationDelay: '100ms' }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                filter === cat.value
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-white/50 dark:bg-white/5 border border-primary/20 text-foreground hover:border-primary/50 hover:shadow-md hover:shadow-primary/20 backdrop-blur-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group rounded-xl border border-primary/20 overflow-hidden hover:border-primary/60 shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover-lift slide-up ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Project Image */}
              <div
                className={`bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 flex items-center justify-center relative overflow-hidden ${
                  project.featured ? 'h-96' : 'h-48'
                }`}
              >
                <div className="text-6xl md:text-8xl group-hover:scale-110 transition-transform duration-300 float">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent group-hover:from-primary/20 transition-colors duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 bg-gradient-to-br from-card to-card/80 dark:from-card dark:to-card/60 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4 pt-4 border-t border-primary/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
