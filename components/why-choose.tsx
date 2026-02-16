import { Check } from 'lucide-react'

export function WhyChoose() {
  const reasons = [
    {
      title: 'Immersive Design',
      description: 'Sophisticated interfaces engineered to elevate brand perception.',
    },
    {
      title: 'Responsive Mastery',
      description: 'Flawless execution across every conceivable device and resolution.',
    },
    {
      title: 'Methodical Velocity',
      description: 'Rapid development cycles without compromising technical integrity.',
    },
    {
      title: 'Transparent Strategy',
      description: 'Clear, consistent communication and strategic project reporting.',
    },
    {
      title: 'Future-Proofing',
      description: 'Architecting scalable systems designed for sustained growth.',
    },
  ]

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--color-primary)/0.02,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="max-w-3xl mb-24 slide-up">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1]">
              Why Visionaries <span className="text-primary/20 bg-clip-text bg-gradient-to-r from-primary to-accent">Choose Us</span>.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-24">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="premium-card !p-6 group slide-up flex flex-col justify-between"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-foreground mb-3 text-base leading-tight group-hover:text-primary transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-12 bg-secondary rounded-[2.5rem] border border-border/50 slide-up" style={{ animationDelay: '500ms' }}>
            <p className="text-xl text-muted-foreground leading-relaxed text-center font-medium italic">
              "We operate as a strategic partner, not just a service provider. Our objective is to engineer digital legacies that resonate with your audience and deliver unassailable market value."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
