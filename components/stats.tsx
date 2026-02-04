import { Users, FileText, TrendingUp, Zap } from 'lucide-react'

export function Stats() {
  const stats = [
    {
      icon: FileText,
      number: '50+',
      label: 'Projects Delivered',
      description: 'Successful projects across diverse industries and scales',
    },
    {
      icon: Users,
      number: '40+',
      label: 'Happy Clients',
      description: 'From startups to enterprises, we deliver measurable results',
    },
    {
      icon: TrendingUp,
      number: '2.5x',
      label: 'Average ROI',
      description: 'Our clients see significant business growth and improvement',
    },
    {
      icon: Zap,
      number: '99.9%',
      label: 'Uptime',
      description: 'Reliable, secure, and scalable solutions you can depend on',
    },
  ]

  const iconColors = [
    { bg: 'from-primary/20 to-secondary/20', icon: 'text-primary' },
    { bg: 'from-secondary/20 to-accent/20', icon: 'text-secondary' },
    { bg: 'from-accent/20 to-primary/20', icon: 'text-accent' },
    { bg: 'from-primary/20 to-accent/20', icon: 'text-primary' },
  ]

  return (
    <section className="py-2 md:py-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            const colors = iconColors[idx]
            return (
              <div
                key={idx}
                className="text-center group p-6 rounded-xl border border-primary/20 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 bg-gradient-to-br ${colors.bg} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                </div>
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </p>
                <p className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
                <p className="text-sm text-foreground/70">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
