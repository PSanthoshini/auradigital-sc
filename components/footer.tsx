import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Infraly</h3>
            <p className="text-primary-foreground/80 text-sm">
              Building scalable web experiences that drive business results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-sm hover:opacity-80 transition-opacity">
                About
              </a>
              <a href="#services" className="block text-sm hover:opacity-80 transition-opacity">
                Services
              </a>
              <a href="#portfolio" className="block text-sm hover:opacity-80 transition-opacity">
                Portfolio
              </a>
              <a href="#contact" className="block text-sm hover:opacity-80 transition-opacity">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:santhoshinipac@gmail.com" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Mail size={16} />
                Email
              </a>
              <a href="tel:+918309804089" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Phone size={16} />
                Phone
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold">Follow</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-sm text-primary-foreground/80">
              © {currentYear} Infraly – Web Development Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:opacity-80 transition-opacity">
                Privacy
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
