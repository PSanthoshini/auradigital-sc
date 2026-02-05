import { CheckCircle } from 'lucide-react'

export function About() {
  const principles = [
    {
      title: 'Reliability',
      description: 'We deliver on time, every time. Your project is our commitment.',
    },
    {
      title: 'Clean Code',
      description: 'Maintainable, scalable, and well-documented code that stands the test of time.',
    },
    {
      title: 'Business-Focused',
      description: 'Every line of code serves a purpose. We align technology with your business goals.',
    },
  ]

  return (
    <section id="about" className="py-2 md:py-4 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Auradigital-sc
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Auradigital-sc is a freelance web development agency dedicated to delivering end-to-end digital solutions. We specialize in crafting modern websites and full-stack web applications that combine exceptional design with robust functionality.
              </p>
              <p>
                From UI/UX design and frontend development to backend systems and deployment, we handle every aspect of web development with the same level of attention and expertise. Whether you're a startup looking to launch your first MVP or an enterprise needing scalable solutions, Auradigital-sc is your trusted partner.
              </p>
            </div>
          </div>

          {/* Right - Principles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Our Principles
            </h3>
            {principles.map((principle, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg bg-background hover:bg-card transition-colors slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
