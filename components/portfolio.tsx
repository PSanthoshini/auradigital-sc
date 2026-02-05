'use client'
import { ExternalLink } from 'lucide-react'

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Banquet Hall',
      category: 'website',
      description: 'A premium banquet hall booking platform with elegant design and seamless user experience.',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      image: '🎉',
      link: 'https://banquet-hall-gold.vercel.app/',
      featured: false,
    },
    {
      id: 2,
      title: 'Botaniq Flora',
      category: 'ecommerce',
      description: 'Modern plant-themed e-commerce platform with smooth interactions and responsive design.',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      image: '🌿',
      link: 'https://botaniq-flora.vercel.app/',
      featured: false,
    },
    {
      id: 3,
      title: 'Architexture',
      category: 'website',
      description: 'Architectural portfolio showcasing modern designs and innovative structures.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      image: '🏛️',
      link: 'https://architexture.vercel.app/',
      featured: false,
    },
  ]

  return (
    <section id="work" className="py-2 md:py-4 bg-gradient-to-b from-background via-purple-50/40 to-blue-50/40 dark:from-background dark:via-purple-950/15 dark:to-blue-950/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Our Work
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            A selection of our recent projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-xl border border-primary/20 overflow-hidden hover:border-primary/60 shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover-lift slide-up flex flex-col"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
                {/* Project Image */}
                <div
                  className="bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 flex items-center justify-center relative overflow-hidden h-48"
                >
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300 float">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent group-hover:from-primary/20 transition-colors duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6 bg-gradient-to-br from-card to-card/80 dark:from-card dark:to-card/60 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink size={18} className="text-foreground/50 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4 pt-4 border-t border-primary/10 mt-4">
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
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
