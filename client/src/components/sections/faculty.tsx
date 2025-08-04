import { useQuery } from "@tanstack/react-query";
import { Mail, Phone } from "lucide-react";
import type { Faculty } from "@shared/schema";

export default function Faculty() {
  const { data: faculty, isLoading } = useQuery<Faculty[]>({
    queryKey: ["/api/faculty"],
  });

  if (isLoading) {
    return (
      <section id="faculty" className="py-20" data-testid="faculty-section">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text">
            FACULTY_MATRIX
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="cyber-card animate-pulse">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-cyber-gray"></div>
                <div className="h-4 bg-cyber-gray rounded mx-auto mb-2 w-3/4"></div>
                <div className="h-3 bg-cyber-gray rounded mx-auto mb-4 w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faculty" className="py-20" data-testid="faculty-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="faculty-title">
          FACULTY_MATRIX
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty?.map((member, index) => (
            <div 
              key={member.id} 
              className="cyber-card hover:scale-105 transition-all duration-300"
              data-testid={`faculty-card-${index}`}
            >
              <img 
                src={member.imageUrl || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300`} 
                alt={`${member.name} - ${member.title}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cyber-purple object-cover"
                data-testid={`faculty-image-${index}`}
              />
              <h3 className="text-xl font-mono font-semibold text-center text-cyber-purple mb-2" data-testid={`faculty-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-center text-gray-300 mb-2" data-testid={`faculty-title-${index}`}>
                {member.title}
              </p>
              <p className="text-center text-sm text-gray-400 mb-4" data-testid={`faculty-specialization-${index}`}>
                {member.specialization}
              </p>
              {member.bio && (
                <p className="text-center text-xs text-gray-500 mb-4" data-testid={`faculty-bio-${index}`}>
                  {member.bio}
                </p>
              )}
              <div className="flex justify-center space-x-4">
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-cyber-cyan hover:text-cyber-purple transition-colors"
                  data-testid={`faculty-email-${index}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
                {member.phone && (
                  <a 
                    href={`tel:${member.phone}`} 
                    className="text-cyber-cyan hover:text-cyber-purple transition-colors"
                    data-testid={`faculty-phone-${index}`}
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
