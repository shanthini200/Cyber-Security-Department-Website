import { Shield, Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Footer() {
  const scrollTo = useSmoothScroll();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Faculty", href: "#faculty" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Events", href: "#events" },
  ];

  const resources = [
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Gallery", href: "#gallery" },
    { label: "Students", href: "#students" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 bg-cyber-darker border-t border-cyber-purple" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="text-2xl text-cyber-purple" />
              <h3 className="text-xl font-mono font-bold gradient-text">CYBER_DEPT</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Pioneering cybersecurity education and research for the digital future.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-semibold text-cyber-purple mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href.slice(1))}
                    className="text-gray-400 hover:text-cyber-purple transition-colors"
                    data-testid={`footer-link-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-semibold text-cyber-purple mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {resources.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href.slice(1))}
                    className="text-gray-400 hover:text-cyber-purple transition-colors"
                    data-testid={`footer-resource-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-semibold text-cyber-purple mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors" data-testid="social-twitter">
                <Twitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors" data-testid="social-linkedin">
                <Linkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors" data-testid="social-github">
                <Github className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors" data-testid="social-youtube">
                <Youtube className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-gray mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm font-mono">
            © 2024 Cyber Department, College of Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
