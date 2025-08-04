import { Monitor, Network, Server, Shield } from "lucide-react";

export default function Infrastructure() {
  const facilities = [
    {
      icon: Monitor,
      title: "Advanced Computing Labs",
      description: "12 state-of-the-art labs equipped with high-performance workstations for security research and analysis.",
      color: "text-cyber-purple"
    },
    {
      icon: Network,
      title: "Network Security Lab",
      description: "Dedicated environment for testing network protocols, firewalls, and intrusion detection systems.",
      color: "text-cyber-cyan"
    },
    {
      icon: Server,
      title: "Digital Forensics Suite",
      description: "Specialized tools and hardware for digital evidence recovery and cybercrime investigation.",
      color: "text-cyber-green"
    },
    {
      icon: Shield,
      title: "Security Operations Center",
      description: "Real-time monitoring and incident response training facility with enterprise-grade tools.",
      color: "text-cyber-purple"
    }
  ];

  const labEquipment = [
    { name: "Kali Linux Systems", description: "Pre-configured penetration testing environments", icon: "fas fa-laptop-code" },
    { name: "Network Simulators", description: "Cisco, Juniper, and virtual network environments", icon: "fas fa-network-wired" },
    { name: "Vulnerability Scanners", description: "Nessus, OpenVAS, and custom scanning tools", icon: "fas fa-bug" },
    { name: "Forensics Tools", description: "EnCase, FTK, and open-source forensics suites", icon: "fas fa-search" }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Advanced cybersecurity lab with multiple workstations and security equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Network server room with organized cables and networking equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Cybersecurity monitoring center with multiple screens displaying security data"
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Digital forensics workstation with analysis tools and equipment"
    }
  ];

  return (
    <section id="infrastructure" className="py-20" data-testid="infrastructure-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="infrastructure-title">
          INFRASTRUCTURE_SYS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {facilities.map((facility, index) => (
              <div key={index} className="cyber-card" data-testid={`facility-card-${index}`}>
                <div className="flex items-center mb-4">
                  <facility.icon className={`text-2xl ${facility.color} mr-4`} />
                  <h3 className="text-xl font-mono font-semibold" data-testid={`facility-title-${index}`}>
                    {facility.title}
                  </h3>
                </div>
                <p className="text-gray-300" data-testid={`facility-description-${index}`}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <img 
                key={index}
                src={image.src} 
                alt={image.alt}
                className="rounded-xl neon-border w-full h-auto hover:scale-105 transition-transform cursor-pointer"
                data-testid={`infrastructure-image-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Lab Equipment Details */}
        <div className="cyber-card">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">
            Lab <span className="text-cyber-purple">Equipment</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labEquipment.map((equipment, index) => (
              <div key={index} className="text-center" data-testid={`equipment-item-${index}`}>
                <i className={`${equipment.icon} text-3xl text-cyber-purple mb-3`}></i>
                <h4 className="font-semibold text-white mb-2" data-testid={`equipment-name-${index}`}>
                  {equipment.name}
                </h4>
                <p className="text-gray-300 text-sm" data-testid={`equipment-description-${index}`}>
                  {equipment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
