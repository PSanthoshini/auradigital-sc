import { Globe, Code, Zap, Server, Rocket, Gauge } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Static & Business Websites',
      description: 'Professional, fast-loading websites perfect for showcasing your business and engaging customers online.',
    },
    {
      icon: Code,
      title: 'Full-Stack Web Applications',
      description: 'Complete web solutions from database to UI, built with modern technologies and best practices.',
    },
    {
      icon: Zap,
      title: 'React / Next.js Development',
      description: 'Lightning-fast, interactive web applications using industry-leading frameworks and tools.',
    },
    {
      icon: Server,
      title: 'Backend & API Development',
      description: 'Robust server-side solutions with secure APIs, scalable databases, and real-time capabilities.',
    },
    {
      icon: Rocket,
      title: 'MVP Development for Startups',
      description: 'Accelerate your startup with rapid MVP development that validates your idea and attracts investors.',
    },
    {
      icon: Gauge,
      title: 'Website Performance & Optimization',
      description: 'Improve speed, SEO, and user experience with comprehensive performance audits and optimization.',
    },
  ]

  const iconColors = [
    { bg: 'from-primary/20 to-secondary/20', icon: 'text-primary' },
    { bg: 'from-secondary/20 to-accent/20', icon: 'text-secondary' },
    { bg: 'from-accent/20 to-primary/20', icon: 'text-accent' },
    { bg: 'from-primary/20 to-accent/20', icon: 'text-primary' },
    { bg: 'from-secondary/20 to-primary/20', icon: 'text-secondary' },
    { bg: 'from-accent/20 to-secondary/20', icon: 'text-accent' },
  ]

  return (
    <section id="services" className="py-2 md:py-4 bg-gradient-to-b from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/10 dark:to-purple-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Our Services
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Comprehensive web development services tailored to your business needs, from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = iconColors[index]
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover-lift slide-up overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`p-3 bg-gradient-to-br ${colors.bg} rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
