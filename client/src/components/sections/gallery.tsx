import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Lightbox from "@/components/ui/lightbox";
import type { GalleryItem } from "@shared/schema";

const categories = [
  { id: "all", label: "All Media" },
  { id: "labs", label: "Labs & Infrastructure" },
  { id: "events", label: "Events & Workshops" },
  { id: "students", label: "Student Activities" },
  { id: "achievements", label: "Achievements" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const { data: galleryItems, isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery", activeCategory !== "all" ? { category: activeCategory } : undefined],
  });

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems?.filter(item => item.category === activeCategory);

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 bg-cyber-gray/20" data-testid="gallery-section">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text">
            GALLERY_ARCHIVE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="cyber-card animate-pulse h-48"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-cyber-gray/20" data-testid="gallery-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="gallery-title">
          GALLERY_ARCHIVE
        </h2>
        
        {/* Gallery Categories */}
        <div className="flex flex-wrap justify-center mb-8 gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-mono transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-cyber-purple text-white border-cyber-purple"
                  : "bg-transparent border border-cyber-purple/30 text-gray-300 hover:border-cyber-purple hover:text-cyber-purple"
              }`}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems?.map((item, index) => (
            <div 
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg neon-border"
              onClick={() => openLightbox(item.imageUrl)}
              data-testid={`gallery-item-${index}`}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                data-testid={`gallery-image-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium" data-testid={`gallery-title-${index}`}>{item.title}</p>
                  {item.description && (
                    <p className="text-sm text-gray-300" data-testid={`gallery-description-${index}`}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Visits Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Industrial <span className="text-cyber-purple">Visits</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CyberTech Industries",
                description: "Students explored cutting-edge security operations center and learned about real-world threat detection systems.",
                date: "March 2024",
                participants: "45 Students",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              },
              {
                title: "SecureNet Solutions", 
                description: "Hands-on workshop on penetration testing methodologies and vulnerability assessment techniques.",
                date: "January 2024",
                participants: "32 Students",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              },
              {
                title: "CloudSecure Data Center",
                description: "Comprehensive tour of enterprise data center infrastructure and security protocols.",
                date: "November 2023", 
                participants: "28 Students",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              }
            ].map((visit, index) => (
              <div key={index} className="cyber-card" data-testid={`industrial-visit-${index}`}>
                <img 
                  src={visit.image} 
                  alt={visit.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  data-testid={`visit-image-${index}`}
                />
                <h4 className="text-xl font-mono font-semibold mb-3 text-cyber-purple" data-testid={`visit-title-${index}`}>
                  {visit.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4" data-testid={`visit-description-${index}`}>
                  {visit.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-cyber-cyan font-mono" data-testid={`visit-date-${index}`}>
                    {visit.date}
                  </span>
                  <span className="text-gray-400" data-testid={`visit-participants-${index}`}>
                    {visit.participants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <Lightbox
            imageUrl={lightboxImage}
            onClose={closeLightbox}
          />
        )}
      </div>
    </section>
  );
}
