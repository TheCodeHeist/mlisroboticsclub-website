import { Mail, Instagram, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 flex items-center justify-center">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">MLIS Robotics Club</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering students through hands-on robotics education and competitive excellence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Join the Club
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Our Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 MLIS Robotics Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
