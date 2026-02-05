import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        'Auradigital-sc delivered our project on time and exceeded all our expectations. The code quality is exceptional and the entire team was incredibly responsive to our feedback.',
      author: 'Sarah Johnson',
      role: 'Founder, TechStartup Inc.',
      rating: 5,
    },
    {
      id: 2,
      content:
        'Working with Auradigital-sc was a game-changer for our business. They didn\'t just build what we asked for—they provided strategic insights that improved our entire product.',
      author: 'Michael Chen',
      role: 'Product Director, Commerce Co.',
      rating: 5,
    },
    {
      id: 3,
      content:
        'The attention to detail and commitment to clean, maintainable code sets Auradigital-sc apart. They\'re not just developers; they\'re partners invested in your success.',
      author: 'Emma Rodriguez',
      role: 'CEO, Creative Agency',
      rating: 5,
    },
    {
      id: 4,
      content:
        'Best decision we made was partnering with Auradigital-sc for our MVP. Their rapid development approach got us to market faster than we thought possible.',
      author: 'David Williams',
      role: 'Co-founder, SaaS Venture',
      rating: 5,
    },
    {
      id: 5,
      content:
        'Outstanding performance optimization. Our site speed improved by 60% after their work. Highly recommend for any project-focused organization.',
      author: 'Lisa Park',
      role: 'Marketing Director, Enterprise Corp',
      rating: 5,
    },
    {
      id: 6,
      content:
        'Professional, communicative, and technically skilled. Auradigital-sc handled our complex backend requirements with ease and delivered a bulletproof solution.',
      author: 'James Murphy',
      role: 'CTO, Financial Tech Firm',
      rating: 5,
    },
  ]

  return (
    <section className="py-2 md:py-4 bg-gradient-to-b from-background via-cyan-50/30 to-blue-50/30 dark:from-background dark:via-cyan-950/15 dark:to-blue-950/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Hear from the companies and founders who've partnered with us to transform their digital vision into reality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="p-6 bg-card rounded-xl border border-primary/20 shadow-md hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 hover-lift slide-up flex flex-col"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary drop-shadow-sm"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 flex-1 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-primary/10">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
