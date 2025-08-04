import { Download, BookOpen, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Curriculum() {
  const courseStructure = [
    {
      year: "First Year",
      semesters: [
        {
          title: "Semester 1",
          courses: [
            "Computer Fundamentals",
            "Mathematics for Computing", 
            "Introduction to Cybersecurity",
            "Programming Basics"
          ]
        },
        {
          title: "Semester 2",
          courses: [
            "Data Structures & Algorithms",
            "Network Fundamentals",
            "Operating Systems",
            "Discrete Mathematics"
          ]
        }
      ]
    },
    {
      year: "Second Year",
      semesters: [
        {
          title: "Semester 3",
          courses: [
            "Network Security",
            "Cryptography & Encryption",
            "Database Security",
            "Web Application Security"
          ]
        },
        {
          title: "Semester 4",
          courses: [
            "Ethical Hacking",
            "Digital Forensics",
            "Malware Analysis",
            "Security Protocols"
          ]
        }
      ]
    },
    {
      year: "Third Year",
      semesters: [
        {
          title: "Semester 5",
          courses: [
            "Penetration Testing",
            "Incident Response",
            "Risk Assessment",
            "Cyber Law & Ethics"
          ]
        },
        {
          title: "Semester 6",
          courses: [
            "Advanced Cryptography",
            "Mobile Security",
            "Cloud Security",
            "Research Methodology"
          ]
        }
      ]
    },
    {
      year: "Fourth Year",
      semesters: [
        {
          title: "Semester 7",
          courses: [
            "AI in Cybersecurity",
            "IoT Security",
            "Capstone Project I",
            "Industry Internship"
          ]
        },
        {
          title: "Semester 8",
          courses: [
            "Advanced Threat Detection",
            "Security Management",
            "Capstone Project II",
            "Professional Certification"
          ]
        }
      ]
    }
  ];

  const downloadResources = [
    { name: "Complete Syllabus PDF", icon: Download },
    { name: "Course Structure Guide", icon: Download },
    { name: "Lab Manual Collection", icon: Download }
  ];

  const programHighlights = [
    "Industry-certified instructors",
    "Hands-on lab experience", 
    "Industry partnerships",
    "Research opportunities"
  ];

  const handleDownload = (resourceName: string) => {
    // In a real implementation, this would trigger a PDF download
    console.log(`Downloading ${resourceName}`);
  };

  return (
    <section id="curriculum" className="py-20" data-testid="curriculum-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="curriculum-title">
          CURRICULUM_DATA
        </h2>
        
        {/* Program Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="cyber-card text-center" data-testid="stat-program-years">
            <Clock className="mx-auto mb-2 text-cyber-purple" />
            <div className="text-3xl font-bold text-cyber-purple mb-2">4</div>
            <div className="text-gray-300">Years Program</div>
          </div>
          <div className="cyber-card text-center" data-testid="stat-semesters">
            <BookOpen className="mx-auto mb-2 text-cyber-green" />
            <div className="text-3xl font-bold text-cyber-green mb-2">8</div>
            <div className="text-gray-300">Semesters</div>
          </div>
          <div className="cyber-card text-center" data-testid="stat-credit-hours">
            <Users className="mx-auto mb-2 text-cyber-cyan" />
            <div className="text-3xl font-bold text-cyber-cyan mb-2">160</div>
            <div className="text-gray-300">Credit Hours</div>
          </div>
          <div className="cyber-card text-center" data-testid="stat-core-subjects">
            <CheckCircle className="mx-auto mb-2 text-cyber-purple" />
            <div className="text-3xl font-bold text-cyber-purple mb-2">32</div>
            <div className="text-gray-300">Core Subjects</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-mono font-semibold text-cyber-purple">Course Structure</h3>
            <div className="space-y-6">
              {courseStructure.map((year, yearIndex) => (
                <div key={yearIndex} className="space-y-4" data-testid={`year-${yearIndex}`}>
                  <h4 className="text-xl font-mono font-semibold text-cyber-cyan" data-testid={`year-title-${yearIndex}`}>
                    {year.year}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {year.semesters.map((semester, semesterIndex) => (
                      <div 
                        key={semesterIndex} 
                        className="cyber-card"
                        data-testid={`semester-${yearIndex}-${semesterIndex}`}
                      >
                        <h5 className="font-semibold text-white mb-3" data-testid={`semester-title-${yearIndex}-${semesterIndex}`}>
                          {semester.title}
                        </h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {semester.courses.map((course, courseIndex) => (
                            <li 
                              key={courseIndex}
                              data-testid={`course-${yearIndex}-${semesterIndex}-${courseIndex}`}
                            >
                              • {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-mono font-semibold text-cyber-purple">Download Resources</h3>
            <div className="space-y-4">
              {downloadResources.map((resource, index) => (
                <Button
                  key={index}
                  onClick={() => handleDownload(resource.name)}
                  className="w-full p-4 cyber-card hover:bg-cyber-purple/20 transition-colors flex items-center justify-between border-none bg-cyber-gray/30"
                  data-testid={`download-${index}`}
                >
                  <span className="font-mono">{resource.name}</span>
                  <resource.icon className="h-4 w-4 text-cyber-purple" />
                </Button>
              ))}
            </div>
            
            <div className="cyber-card">
              <h4 className="text-lg font-mono font-semibold text-cyber-cyan mb-3">
                Program Highlights
              </h4>
              <ul className="space-y-2 text-gray-300">
                {programHighlights.map((highlight, index) => (
                  <li 
                    key={index} 
                    className="flex items-center"
                    data-testid={`highlight-${index}`}
                  >
                    <CheckCircle className="text-cyber-green mr-3 h-4 w-4" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
