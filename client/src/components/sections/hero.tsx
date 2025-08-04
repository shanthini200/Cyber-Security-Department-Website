import { Code, ArrowRight, Users, GraduationCap, Building, Clock } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative cyber-grid pt-20" data-testid="hero-section">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float mb-8">
          <Code className="text-6xl md:text-8xl text-cyber-purple mx-auto animate-glow" data-testid="hero-icon" />
        </div>
        
        <h1 
          className="text-4xl md:text-7xl font-mono font-bold mb-6 glitch" 
          data-text="CYBER DEPARTMENT"
          data-testid="hero-title"
        >
          CYBER DEPARTMENT
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
          Pioneering the future of cybersecurity education and research
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => scrollTo("about")}
            className="cyber-btn-primary"
            data-testid="button-explore-programs"
          >
            EXPLORE PROGRAMS
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button 
            onClick={() => scrollTo("faculty")}
            className="cyber-btn-secondary"
            data-testid="button-view-research"
          >
            VIEW RESEARCH
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="cyber-card text-center" data-testid="stat-students">
            <Users className="mx-auto mb-2 text-cyber-purple" />
            <div className="text-3xl font-mono font-bold text-cyber-purple">150+</div>
            <div className="text-sm text-gray-300">Students</div>
          </div>
          <div className="cyber-card text-center" data-testid="stat-faculty">
            <GraduationCap className="mx-auto mb-2 text-cyber-cyan" />
            <div className="text-3xl font-mono font-bold text-cyber-cyan">25+</div>
            <div className="text-sm text-gray-300">Faculty</div>
          </div>
          <div className="cyber-card text-center" data-testid="stat-labs">
            <Building className="mx-auto mb-2 text-cyber-green" />
            <div className="text-3xl font-mono font-bold text-cyber-green">12</div>
            <div className="text-sm text-gray-300">Labs</div>
          </div>
          <div className="cyber-card text-center" data-testid="stat-experience">
            <Clock className="mx-auto mb-2 text-cyber-purple" />
            <div className="text-3xl font-mono font-bold text-cyber-purple">5+</div>
            <div className="text-sm text-gray-300">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}
