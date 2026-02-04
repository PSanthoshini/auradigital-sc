import { Check } from 'lucide-react'

export function WhyChoose() {
  const reasons = [
    {
      title: 'Clean & Modern UI Design',
      description: 'Beautiful interfaces that users love to interact with',
    },
    {
      title: 'Mobile-First Responsive Design',
      description: 'Perfect experience on any device, from mobile to desktop',
    },
    {
      title: 'Fast Delivery Without Compromise',
      description: 'Rapid development without sacrificing code quality',
    },
    {
      title: 'Clear Communication',
      description: 'Regular updates and transparency throughout the project',
    },
    {
      title: 'Scalable Architecture',
      description: 'Code that grows with your business and stays maintainable',
    },
  ]

  return (
    <section className="py-2 md:py-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Why Choose Infraly
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 text-xs">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-8 bg-primary/5 rounded-lg border border-primary/10 slide-up" style={{ animationDelay: '250ms' }}>
            <p className="text-foreground/80 leading-relaxed text-center">
              We're not just service providers – we're partners in your digital journey. Every project is approached with the same level of care and expertise, whether it's a simple landing page or a complex web application. Our goal is to deliver solutions that exceed your expectations and provide real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
