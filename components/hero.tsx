import Link from 'next/link'
import { ArrowRight, Code, Zap, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-2 md:py-4 overflow-hidden bg-gradient-to-br from-background via-blue-50/50 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-secondary/20 to-accent/20 rounded-full blur-3xl rotate-slow opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-6 fade-in">
            <div className="inline-block bounce-in">
              <span className="px-5 py-3 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-primary font-semibold text-sm border border-primary/30 shadow-lg shadow-primary/20">
                Digital Solutions That Scale
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight slide-up" style={{ animationDelay: '100ms' }}>
              Building Scalable Web Experiences
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto slide-up" style={{ animationDelay: '200ms' }}>
              From design to deployment, we craft fast, secure, and scalable web applications that drive your business forward and deliver measurable results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 slide-up" style={{ animationDelay: '300ms' }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold shadow-lg shadow-primary/40 hover-lift hover:shadow-xl hover:shadow-primary/60 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover-scale"
            >
              View Work
            </a>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto slide-up" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-primary/10 hover-glow transition-all">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                <Code className="text-primary" size={24} />
              </div>
              <span className="text-xs text-foreground/70 font-semibold">Clean Code</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-accent/10 hover-glow transition-all">
              <div className="p-3 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg">
                <Zap className="text-accent" size={24} />
              </div>
              <span className="text-xs text-foreground/70 font-semibold">Fast Perf</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-primary/10 hover-glow transition-all">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <Shield className="text-primary" size={24} />
              </div>
              <span className="text-xs text-foreground/70 font-semibold">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
