import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, MapPin, Users, Trophy, Award, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event, Achievement } from "@shared/schema";

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const { data: upcomingEvents } = useQuery<Event[]>({
    queryKey: ["/api/events", { type: "upcoming" }],
  });

  const { data: pastEvents } = useQuery<Event[]>({
    queryKey: ["/api/events", { type: "past" }],
  });

  const { data: achievements } = useQuery<Achievement[]>({
    queryKey: ["/api/achievements"],
  });

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="events" className="py-20 bg-cyber-gray/20" data-testid="events-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="events-title">
          EVENTS_LOG
        </h2>
        
        {/* Event Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-cyber-gray/30 rounded-lg p-1 flex">
            <Button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2 rounded-lg transition-all font-mono ${
                activeTab === "upcoming" 
                  ? "bg-cyber-purple text-white" 
                  : "bg-transparent text-gray-300 hover:text-cyber-purple"
              }`}
              data-testid="tab-upcoming-events"
            >
              Upcoming Events
            </Button>
            <Button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-2 rounded-lg transition-all font-mono ${
                activeTab === "past" 
                  ? "bg-cyber-purple text-white" 
                  : "bg-transparent text-gray-300 hover:text-cyber-purple"
              }`}
              data-testid="tab-past-events"
            >
              Past Events
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentEvents?.map((event, index) => (
            <div 
              key={event.id} 
              className="cyber-card hover:scale-105 transition-all duration-300"
              data-testid={`event-card-${index}`}
            >
              {event.imageUrl && (
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  data-testid={`event-image-${index}`}
                />
              )}
              <div className="flex items-center justify-between mb-2">
                <span 
                  className={`font-mono text-sm px-3 py-1 rounded-full ${
                    activeTab === "upcoming" 
                      ? "bg-cyber-purple/20 text-cyber-purple border border-cyber-purple" 
                      : "bg-cyber-gray/20 text-gray-400 border border-gray-400"
                  }`}
                  data-testid={`event-type-${index}`}
                >
                  {event.type}
                </span>
                <span className="text-gray-400 font-mono text-sm" data-testid={`event-date-${index}`}>
                  {formatDate(event.date.toString())}
                </span>
              </div>
              <h3 className="text-xl font-mono font-semibold mb-3" data-testid={`event-title-${index}`}>
                {event.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4" data-testid={`event-description-${index}`}>
                {event.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-cyber-purple">
                  <Clock className="mr-2 h-4 w-4" />
                  <span data-testid={`event-time-${index}`}>
                    {formatTime(event.date.toString())}
                    {event.endDate && ` - ${formatTime(event.endDate.toString())}`}
                  </span>
                </div>
                {event.location && (
                  <div className="flex items-center text-cyber-cyan">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span data-testid={`event-location-${index}`}>{event.location}</span>
                  </div>
                )}
                {event.maxParticipants && event.currentParticipants !== undefined && (
                  <div className="flex items-center text-cyber-green">
                    <Users className="mr-2 h-4 w-4" />
                    <span data-testid={`event-participants-${index}`}>
                      {event.currentParticipants}/{event.maxParticipants} participants
                    </span>
                  </div>
                )}
              </div>
              {activeTab === "upcoming" ? (
                <Button className="w-full mt-4 cyber-btn-primary" data-testid={`button-register-${index}`}>
                  REGISTER
                </Button>
              ) : (
                <div className="flex items-center text-cyber-green text-sm mt-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Completed Successfully</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Star Performers Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Star <span className="text-cyber-purple">Performers</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements?.slice(0, 3).map((achievement, index) => (
              <div key={achievement.id} className="cyber-card text-center" data-testid={`achievement-card-${index}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-purple to-cyber-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                  {achievement.category === "student" && <Trophy className="text-2xl text-white" />}
                  {achievement.category === "faculty" && <Microscope className="text-2xl text-white" />}
                  {achievement.category === "department" && <Award className="text-2xl text-white" />}
                </div>
                <h4 className="text-lg font-bold text-white mb-2" data-testid={`achievement-title-${index}`}>
                  {achievement.title}
                </h4>
                {achievement.achieverName && (
                  <p className="text-cyber-purple font-medium mb-2" data-testid={`achievement-achiever-${index}`}>
                    {achievement.achieverName}
                  </p>
                )}
                <p className="text-gray-300 text-sm" data-testid={`achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
