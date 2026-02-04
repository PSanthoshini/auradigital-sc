import { ExternalLink } from 'lucide-react'

export function FeaturedProject() {
  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Featured Project
        </h2>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Project Image Placeholder */}
              <div className="flex items-center justify-center bg-primary/5 rounded-lg h-64 md:h-full min-h-[300px]">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿</div>
                  <p className="text-foreground/60 text-sm">Botaniq Flora Project</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    Botaniq Flora
                  </h3>
                  <p className="text-foreground/60 text-sm font-medium mb-4">
                    Plant-Themed E-Commerce Website
                  </p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  A modern plant-themed website featuring clean UI, smooth interactions, and responsive design. This project showcases our ability to create engaging, visually appealing digital experiences that convert visitors into customers.
                </p>

                <div className="space-y-2 pt-4">
                  <p className="text-sm text-foreground/70">
                    <strong>Technologies:</strong> React, Next.js, Tailwind CSS, Responsive Design
                  </p>
                  <p className="text-sm text-foreground/70">
                    <strong>Focus:</strong> UI/UX, Performance, Mobile-First Design
                  </p>
                </div>

                <a
                  href="https://botaniq-flora.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium w-fit"
                >
                  View Live Site
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
