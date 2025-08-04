import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./button";

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
  alt?: string;
}

export default function Lightbox({ imageUrl, onClose, alt = "Gallery Image" }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("lightbox-overlay")) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div 
      className="lightbox-overlay fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      data-testid="lightbox-overlay"
    >
      <div className="relative max-w-6xl max-h-full">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:text-cyber-purple text-2xl z-10"
          data-testid="button-close-lightbox"
        >
          <X className="h-6 w-6" />
        </Button>
        
        <img 
          src={imageUrl} 
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg neon-border"
          data-testid="lightbox-image"
        />
      </div>
    </div>
  );
}
