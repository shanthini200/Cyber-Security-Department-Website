import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "FACULTY", href: "#faculty" },
  { label: "STUDENTS", href: "#students" },
  { label: "EVENTS", href: "#events" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.slice(1);
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 w-full bg-cyber-darker/95 backdrop-blur-md z-50 neon-border border-t-0 border-l-0 border-r-0"
      data-testid="main-navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="text-2xl text-cyber-purple animate-pulse" data-testid="logo-icon" />
            <h1 className="text-xl font-mono font-bold gradient-text" data-testid="logo-text">
              CYBER_DEPT
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-mono text-sm transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-cyber-purple"
                    : "text-white hover:text-cyber-purple"
                }`}
                data-testid={`nav-link-${item.href.slice(1)}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="lg:hidden text-cyber-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyber-purple/30" data-testid="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-3 font-mono text-sm transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-cyber-purple"
                    : "text-white hover:text-cyber-purple"
                }`}
                data-testid={`mobile-nav-link-${item.href.slice(1)}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
