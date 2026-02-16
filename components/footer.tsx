import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8 col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black uppercase tracking-[0.2em]">AURADIGITAL</h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Architecting premier digital experiences for visionary brands and luxury firms worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-background/40">Navigation</h4>
            <nav className="space-y-4">
              <a href="#about" className="block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Narrative
              </a>
              <a href="#services" className="block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Expertise
              </a>
              <a href="#work" className="block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="block text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                Inquiry
              </a>
            </nav>
          </div>

          {/* Communications */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-background/40">Communications</h4>
            <div className="space-y-4">
              <a href="mailto:auradigital.studio.sc@gmail.com" className="flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors">
                <Mail size={16} />
                Email
              </a>
              <a href="tel:+918309804089" className="flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors">
                <Phone size={16} />
                Call
              </a>
            </div>
          </div>

          {/* Social Presence */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-background/40">Presence</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 border border-background/10">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 border border-background/10">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 border border-background/10">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-background/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/30 text-center md:text-left">
              © {currentYear} AURADIGITAL — ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-10">
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/30 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/30 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
