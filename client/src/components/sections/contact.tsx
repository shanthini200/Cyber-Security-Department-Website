import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactMessage } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact-messages"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: ["Cyber Department", "College of Technology", "Tech Campus, Building B", "Innovation City, TC 12345"]
    },
    {
      icon: Mail,
      title: "Email", 
      content: ["cyber.dept@college.edu", "admissions@college.edu"]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["Main Office: +1 (234) 567-8900", "Admissions: +1 (234) 567-8901"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: ["Monday-Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-20" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="contact-title">
          CONTACT_INTERFACE
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="cyber-card" data-testid={`contact-info-${index}`}>
                <div className="flex items-center mb-4">
                  <info.icon className="text-2xl text-cyber-purple mr-4" />
                  <h3 className="text-xl font-mono font-semibold" data-testid={`contact-info-title-${index}`}>
                    {info.title}
                  </h3>
                </div>
                <div className="text-gray-300 space-y-1">
                  {info.content.map((line, lineIndex) => (
                    <p key={lineIndex} data-testid={`contact-info-content-${index}-${lineIndex}`}>
                      {info.title === "Email" ? (
                        <a href={`mailto:${line}`} className="text-cyber-cyan hover:text-cyber-purple transition-colors">
                          {line}
                        </a>
                      ) : info.title === "Phone" && line.includes("+1") ? (
                        <>
                          {line.split(":")[0]}:{" "}
                          <a href={`tel:${line.split(":")[1].trim()}`} className="text-cyber-green hover:text-cyber-purple transition-colors">
                            {line.split(":")[1].trim()}
                          </a>
                        </>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="cyber-card">
            <h3 className="text-2xl font-mono font-semibold mb-6 text-cyber-purple">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">Name *</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="w-full bg-cyber-dark border-cyber-purple text-white font-mono focus:border-cyber-purple-light"
                  placeholder="Enter your name"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full bg-cyber-dark border-cyber-purple text-white font-mono focus:border-cyber-purple-light"
                  placeholder="Enter your email"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">Subject *</label>
                <Select onValueChange={(value) => handleInputChange("subject", value)} required>
                  <SelectTrigger className="w-full bg-cyber-dark border-cyber-purple text-white font-mono" data-testid="select-subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-dark border-cyber-purple">
                    <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                    <SelectItem value="research">Research Collaboration</SelectItem>
                    <SelectItem value="general">General Information</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">Message *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  rows={5}
                  className="w-full bg-cyber-dark border-cyber-purple text-white font-mono focus:border-cyber-purple-light resize-none"
                  placeholder="Enter your message here..."
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full cyber-btn-primary"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
