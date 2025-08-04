import { 
  type Faculty, 
  type InsertFaculty,
  type Student,
  type InsertStudent,
  type Event,
  type InsertEvent,
  type Achievement,
  type InsertAchievement,
  type ContactMessage,
  type InsertContactMessage,
  type GalleryItem,
  type InsertGalleryItem
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Faculty methods
  getFaculty(): Promise<Faculty[]>;
  getFacultyById(id: string): Promise<Faculty | undefined>;
  createFaculty(faculty: InsertFaculty): Promise<Faculty>;
  
  // Student methods
  getStudents(): Promise<Student[]>;
  getStudentById(id: string): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  searchStudents(query: string): Promise<Student[]>;
  
  // Event methods
  getEvents(): Promise<Event[]>;
  getEventById(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  getUpcomingEvents(): Promise<Event[]>;
  getPastEvents(): Promise<Event[]>;
  
  // Achievement methods
  getAchievements(): Promise<Achievement[]>;
  getAchievementById(id: string): Promise<Achievement | undefined>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
  
  // Contact message methods
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  
  // Gallery methods
  getGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItemsByCategory(category: string): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
}

export class MemStorage implements IStorage {
  private faculty: Map<string, Faculty> = new Map();
  private students: Map<string, Student> = new Map();
  private events: Map<string, Event> = new Map();
  private achievements: Map<string, Achievement> = new Map();
  private contactMessages: Map<string, ContactMessage> = new Map();
  private galleryItems: Map<string, GalleryItem> = new Map();

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Initialize faculty data
    const facultyData: InsertFaculty[] = [
      {
        name: "Dr. Alex Morgan",
        title: "Head of Department",
        email: "alex.morgan@college.edu",
        phone: "+1 (555) 123-4567",
        specialization: "Network Security & Threat Analysis",
        bio: "PhD in Cybersecurity with 15+ years experience in network security and ethical hacking",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Prof. Sarah Chen",
        title: "Associate Professor",
        email: "sarah.chen@college.edu",
        phone: "+1 (555) 123-4568",
        specialization: "Digital Forensics & Incident Response",
        bio: "Specialist in Digital Forensics and Incident Response, published researcher with industry experience",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b332446c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Marcus Williams",
        title: "Senior Lecturer",
        email: "marcus.williams@college.edu",
        phone: "+1 (555) 123-4569",
        specialization: "Ethical Hacking & Penetration Testing",
        bio: "Expert in Cryptography and Blockchain Security, industry consultant and researcher",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Dr. Emma Rodriguez",
        title: "Assistant Professor",
        email: "emma.rodriguez@college.edu",
        phone: "+1 (555) 123-4570",
        specialization: "Cryptography & Blockchain Security",
        bio: "Penetration Testing and Vulnerability Assessment specialist with extensive field experience",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Prof. David Park",
        title: "Lecturer",
        email: "david.park@college.edu",
        phone: "+1 (555) 123-4571",
        specialization: "Cloud Security & Infrastructure",
        bio: "Network Security and Firewall Management expert, former industry professional",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
      },
      {
        name: "Ms. Lisa Anderson",
        title: "Lab Instructor",
        email: "lisa.anderson@college.edu",
        phone: "+1 (555) 123-4572",
        specialization: "Practical Security Training",
        bio: "Hands-on security tools and practical cybersecurity training specialist",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
      }
    ];

    facultyData.forEach(faculty => {
      this.createFaculty(faculty);
    });

    // Initialize student data
    const studentData: InsertStudent[] = [
      { name: "Alice Johnson", registrationNumber: "CS2021001", mentorId: Array.from(this.faculty.keys())[0], researchInterest: "Network Security & Intrusion Detection", year: 4, email: "alice.johnson@student.edu" },
      { name: "Bob Smith", registrationNumber: "CS2021002", mentorId: Array.from(this.faculty.keys())[1], researchInterest: "Digital Forensics & Incident Response", year: 4, email: "bob.smith@student.edu" },
      { name: "Carol Davis", registrationNumber: "CS2021003", mentorId: Array.from(this.faculty.keys())[2], researchInterest: "Ethical Hacking & Penetration Testing", year: 4, email: "carol.davis@student.edu" },
      { name: "David Wilson", registrationNumber: "CS2021004", mentorId: Array.from(this.faculty.keys())[3], researchInterest: "Cryptography & Blockchain Security", year: 4, email: "david.wilson@student.edu" },
      { name: "Emma Thompson", registrationNumber: "CS2021005", mentorId: Array.from(this.faculty.keys())[0], researchInterest: "Malware Analysis & Reverse Engineering", year: 4, email: "emma.thompson@student.edu" },
      { name: "Frank Garcia", registrationNumber: "CS2021006", mentorId: Array.from(this.faculty.keys())[1], researchInterest: "Cyber Threat Intelligence", year: 4, email: "frank.garcia@student.edu" },
      { name: "Grace Lee", registrationNumber: "CS2021007", mentorId: Array.from(this.faculty.keys())[2], researchInterest: "IoT Security & Privacy", year: 4, email: "grace.lee@student.edu" },
      { name: "Henry Brown", registrationNumber: "CS2021008", mentorId: Array.from(this.faculty.keys())[3], researchInterest: "Web Application Security", year: 4, email: "henry.brown@student.edu" },
      { name: "Isabel Martinez", registrationNumber: "CS2021009", mentorId: Array.from(this.faculty.keys())[0], researchInterest: "Cloud Security Architecture", year: 4, email: "isabel.martinez@student.edu" },
      { name: "Jack Taylor", registrationNumber: "CS2021010", mentorId: Array.from(this.faculty.keys())[1], researchInterest: "Mobile Security & App Analysis", year: 4, email: "jack.taylor@student.edu" },
      { name: "Kate Anderson", registrationNumber: "CS2021011", mentorId: Array.from(this.faculty.keys())[2], researchInterest: "AI-Driven Threat Detection", year: 4, email: "kate.anderson@student.edu" },
      { name: "Liam Clark", registrationNumber: "CS2021012", mentorId: Array.from(this.faculty.keys())[3], researchInterest: "Social Engineering & Human Factors", year: 4, email: "liam.clark@student.edu" },
      { name: "Maya Rodriguez", registrationNumber: "CS2021013", mentorId: Array.from(this.faculty.keys())[0], researchInterest: "Zero-Day Exploit Research", year: 4, email: "maya.rodriguez@student.edu" },
      { name: "Noah White", registrationNumber: "CS2021014", mentorId: Array.from(this.faculty.keys())[1], researchInterest: "Quantum Cryptography", year: 4, email: "noah.white@student.edu" },
      { name: "Olivia Johnson", registrationNumber: "CS2022001", mentorId: Array.from(this.faculty.keys())[2], researchInterest: "Blockchain Security Protocols", year: 3, email: "olivia.johnson@student.edu" },
      { name: "Peter Kim", registrationNumber: "CS2022002", mentorId: Array.from(this.faculty.keys())[3], researchInterest: "Industrial Control Systems Security", year: 3, email: "peter.kim@student.edu" },
      { name: "Quinn Davis", registrationNumber: "CS2022003", mentorId: Array.from(this.faculty.keys())[0], researchInterest: "Automotive Cybersecurity", year: 3, email: "quinn.davis@student.edu" },
      { name: "Rachel Green", registrationNumber: "CS2022004", mentorId: Array.from(this.faculty.keys())[1], researchInterest: "Healthcare Security Systems", year: 3, email: "rachel.green@student.edu" },
      { name: "Sam Miller", registrationNumber: "CS2022005", mentorId: Array.from(this.faculty.keys())[2], researchInterest: "Financial Technology Security", year: 3, email: "sam.miller@student.edu" },
      { name: "Tina Wilson", registrationNumber: "CS2022006", mentorId: Array.from(this.faculty.keys())[3], researchInterest: "Privacy-Preserving Technologies", year: 3, email: "tina.wilson@student.edu" },
      { name: "Uma Patel", registrationNumber: "CS2022007", mentorId: Array.from(this.faculty.keys())[0], researchInterest: "Bug Bounty & Vulnerability Research", year: 3, email: "uma.patel@student.edu" },
      { name: "Victor Chen", registrationNumber: "CS2022008", mentorId: Array.from(this.faculty.keys())[1], researchInterest: "Secure Software Development", year: 3, email: "victor.chen@student.edu" },
      { name: "Wendy Lopez", registrationNumber: "CS2022009", mentorId: Array.from(this.faculty.keys())[2], researchInterest: "Cyber Physical Systems Security", year: 3, email: "wendy.lopez@student.edu" },
      { name: "Xavier Garcia", registrationNumber: "CS2022010", mentorId: Array.from(this.faculty.keys())[3], researchInterest: "Machine Learning Security", year: 3, email: "xavier.garcia@student.edu" },
      { name: "Yuki Tanaka", registrationNumber: "CS2023001", mentorId: Array.from(this.faculty.keys())[0], researchInterest: "Distributed Systems Security", year: 2, email: "yuki.tanaka@student.edu" },
      { name: "Zoe Williams", registrationNumber: "CS2023002", mentorId: Array.from(this.faculty.keys())[1], researchInterest: "Security Awareness & Training", year: 2, email: "zoe.williams@student.edu" },
      { name: "Alex Kim", registrationNumber: "CS2023003", mentorId: Array.from(this.faculty.keys())[2], researchInterest: "Incident Response Automation", year: 2, email: "alex.kim@student.edu" },
      { name: "Blake Foster", registrationNumber: "CS2023004", mentorId: Array.from(this.faculty.keys())[3], researchInterest: "Threat Hunting & Analytics", year: 2, email: "blake.foster@student.edu" }
    ];

    studentData.forEach(student => {
      this.createStudent(student);
    });

    // Initialize events data
    const currentDate = new Date();
    const eventsData: InsertEvent[] = [
      {
        title: "Advanced Penetration Testing Workshop",
        description: "Hands-on workshop covering latest penetration testing tools and techniques including OWASP Top 10 vulnerabilities.",
        type: "Workshop",
        date: new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        endDate: new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000), // 4 hours later
        location: "Cybersecurity Lab A",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isUpcoming: true,
        maxParticipants: 25,
        currentParticipants: 18
      },
      {
        title: "Capture The Flag Competition",
        description: "Inter-college CTF competition with exciting challenges in web security, cryptography, and reverse engineering.",
        type: "Competition",
        date: new Date(currentDate.getTime() + 45 * 24 * 60 * 60 * 1000), // 45 days from now
        endDate: new Date(currentDate.getTime() + 47 * 24 * 60 * 60 * 1000), // 2 days later
        location: "Main Auditorium",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isUpcoming: true,
        maxParticipants: 100,
        currentParticipants: 75
      },
      {
        title: "Industry Expert Seminar",
        description: "Leading cybersecurity professionals share industry insights and career guidance for aspiring security experts.",
        type: "Seminar",
        date: new Date(currentDate.getTime() + 60 * 24 * 60 * 60 * 1000), // 60 days from now
        endDate: new Date(currentDate.getTime() + 60 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // 2 hours later
        location: "Conference Hall",
        imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isUpcoming: true,
        maxParticipants: 200,
        currentParticipants: 45
      },
      {
        title: "Ethical Hacking Certification",
        description: "Students received industry-recognized ethical hacking certifications from leading cybersecurity organizations.",
        type: "Certification",
        date: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        location: "Department Auditorium",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isUpcoming: false
      },
      {
        title: "24-Hour Security Hackathon",
        description: "Students developed innovative security solutions in intensive 24-hour hackathon focused on real-world challenges.",
        type: "Hackathon",
        date: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        endDate: new Date(currentDate.getTime() - 59 * 24 * 60 * 60 * 1000), // 1 day later
        location: "Innovation Center",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isUpcoming: false
      }
    ];

    eventsData.forEach(event => {
      this.createEvent(event);
    });

    // Initialize achievements data
    const achievementsData: InsertAchievement[] = [
      {
        title: "National Cybersecurity Excellence Award",
        description: "Department recognized as the leading cybersecurity education program in the region for outstanding curriculum and research.",
        category: "department",
        date: new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000),
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "CTF Competition Champion",
        description: "Emma Rodriguez secured first place in the National Capture The Flag competition, demonstrating exceptional skills in cybersecurity.",
        category: "student",
        achieverName: "Emma Rodriguez",
        date: new Date(currentDate.getTime() - 45 * 24 * 60 * 60 * 1000),
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
      },
      {
        title: "Research Publication Excellence",
        description: "Dr. Alex Morgan published groundbreaking research on AI-driven threat detection in top-tier cybersecurity journal.",
        category: "faculty",
        achieverName: "Dr. Alex Morgan",
        date: new Date(currentDate.getTime() - 120 * 24 * 60 * 60 * 1000),
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
      },
      {
        title: "Bug Bounty Achievement",
        description: "Lisa Wong earned over $50,000 from ethical hacking and vulnerability research, contributing to global cybersecurity.",
        category: "student",
        achieverName: "Lisa Wong",
        date: new Date(currentDate.getTime() - 75 * 24 * 60 * 60 * 1000),
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
      }
    ];

    achievementsData.forEach(achievement => {
      this.createAchievement(achievement);
    });

    // Initialize gallery data
    const galleryData: InsertGalleryItem[] = [
      {
        title: "Advanced Cybersecurity Lab",
        description: "State-of-the-art cybersecurity lab with multiple workstations and security equipment",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        category: "labs"
      },
      {
        title: "Network Security Infrastructure",
        description: "Network infrastructure with servers and networking equipment for cybersecurity training",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        category: "labs"
      },
      {
        title: "Student Collaboration",
        description: "Students collaborating on cybersecurity project with laptops and documents",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        category: "students"
      },
      {
        title: "Penetration Testing Workshop",
        description: "Hands-on cybersecurity workshop with students learning security techniques",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        category: "events"
      },
      {
        title: "Research Excellence",
        description: "Award ceremony recognizing cybersecurity excellence and achievements",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        category: "achievements"
      }
    ];

    galleryData.forEach(item => {
      this.createGalleryItem(item);
    });
  }

  // Faculty methods
  async getFaculty(): Promise<Faculty[]> {
    return Array.from(this.faculty.values());
  }

  async getFacultyById(id: string): Promise<Faculty | undefined> {
    return this.faculty.get(id);
  }

  async createFaculty(facultyData: InsertFaculty): Promise<Faculty> {
    const id = randomUUID();
    const faculty: Faculty = {
      ...facultyData,
      id,
      createdAt: new Date(),
    };
    this.faculty.set(id, faculty);
    return faculty;
  }

  // Student methods
  async getStudents(): Promise<Student[]> {
    return Array.from(this.students.values());
  }

  async getStudentById(id: string): Promise<Student | undefined> {
    return this.students.get(id);
  }

  async createStudent(studentData: InsertStudent): Promise<Student> {
    const id = randomUUID();
    const student: Student = {
      ...studentData,
      id,
      createdAt: new Date(),
    };
    this.students.set(id, student);
    return student;
  }

  async searchStudents(query: string): Promise<Student[]> {
    const students = Array.from(this.students.values());
    const lowerQuery = query.toLowerCase();
    
    return students.filter(student => 
      student.name.toLowerCase().includes(lowerQuery) ||
      student.registrationNumber.toLowerCase().includes(lowerQuery) ||
      student.researchInterest.toLowerCase().includes(lowerQuery)
    );
  }

  // Event methods
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getEventById(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(eventData: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = {
      ...eventData,
      id,
      createdAt: new Date(),
    };
    this.events.set(id, event);
    return event;
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const events = Array.from(this.events.values());
    return events.filter(event => event.isUpcoming).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  async getPastEvents(): Promise<Event[]> {
    const events = Array.from(this.events.values());
    return events.filter(event => !event.isUpcoming).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  // Achievement methods
  async getAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getAchievementById(id: string): Promise<Achievement | undefined> {
    return this.achievements.get(id);
  }

  async createAchievement(achievementData: InsertAchievement): Promise<Achievement> {
    const id = randomUUID();
    const achievement: Achievement = {
      ...achievementData,
      id,
      createdAt: new Date(),
    };
    this.achievements.set(id, achievement);
    return achievement;
  }

  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async createContactMessage(messageData: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...messageData,
      id,
      isRead: false,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  // Gallery methods
  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getGalleryItemsByCategory(category: string): Promise<GalleryItem[]> {
    const items = Array.from(this.galleryItems.values());
    return items.filter(item => item.category === category);
  }

  async createGalleryItem(itemData: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const item: GalleryItem = {
      ...itemData,
      id,
      createdAt: new Date(),
    };
    this.galleryItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
