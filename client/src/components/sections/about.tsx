import { Target, Eye, Shield, Search, Lock, Bug } from "lucide-react";

export default function About() {
  const specializations = [
    { name: "Ethical Hacking", color: "text-cyber-purple" },
    { name: "Network Security", color: "text-cyber-cyan" },
    { name: "Digital Forensics", color: "text-cyber-green" },
  ];

  const researchAreas = [
    { icon: Shield, name: "Network Security", description: "Advanced firewall and intrusion detection systems" },
    { icon: Search, name: "Digital Forensics", description: "Cyber crime investigation and evidence analysis" },
    { icon: Lock, name: "Cryptography", description: "Advanced encryption and secure communication" },
    { icon: Bug, name: "Ethical Hacking", description: "Penetration testing and vulnerability assessment" },
  ];

  return (
    <section id="about" className="py-20 bg-cyber-gray/20" data-testid="about-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="about-title">
          ABOUT_US
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern cybersecurity lab with multiple monitors showing security dashboards" 
              className="rounded-xl neon-border w-full h-auto"
              data-testid="about-image"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="text-2xl text-cyber-purple" />
                <h3 className="text-2xl font-mono font-semibold text-cyber-purple">MISSION.exe</h3>
              </div>
              <p className="text-gray-300 leading-relaxed" data-testid="mission-text">
                To cultivate the next generation of cybersecurity professionals through cutting-edge education, 
                innovative research, and hands-on experience in defending digital infrastructures.
              </p>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="text-2xl text-cyber-cyan" />
                <h3 className="text-2xl font-mono font-semibold text-cyber-cyan">VISION.exe</h3>
              </div>
              <p className="text-gray-300 leading-relaxed" data-testid="vision-text">
                To be a globally recognized center of excellence in cybersecurity education and research, 
                producing ethical hackers and security experts who protect our digital future.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {specializations.map((spec, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-cyber-purple/20 border border-cyber-purple rounded-full text-sm font-mono ${spec.color}`}
                  data-testid={`specialization-${index}`}
                >
                  {spec.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div>
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-white">
            Research <span className="text-cyber-purple">Areas</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="cyber-card text-center" data-testid={`research-area-${index}`}>
                <area.icon className="text-3xl text-cyber-purple mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-white mb-2">{area.name}</h4>
                <p className="text-cyber-gray-light text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
