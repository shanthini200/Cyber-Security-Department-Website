export const DEPARTMENT_INFO = {
  name: "Cyber Security Department",
  college: "College of Technology",
  address: {
    building: "Tech Campus, Building B",
    street: "123 University Avenue",
    city: "Innovation City",
    state: "TC",
    zipCode: "12345"
  },
  contact: {
    mainPhone: "+1 (234) 567-8900",
    admissionsPhone: "+1 (234) 567-8901",
    email: "cyber.dept@college.edu",
    admissionsEmail: "admissions@college.edu"
  },
  officeHours: {
    weekdays: "Monday-Friday: 9:00 AM - 5:00 PM",
    saturday: "Saturday: 10:00 AM - 2:00 PM", 
    sunday: "Sunday: Closed"
  }
} as const;

export const SOCIAL_LINKS = {
  twitter: "#",
  linkedin: "#", 
  github: "#",
  youtube: "#"
} as const;

export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500
} as const;

export const CYBER_COLORS = {
  dark: "hsl(240, 10%, 3.9%)",
  darker: "hsl(240, 15%, 2%)",
  gray: "hsl(240, 3.7%, 15.9%)",
  light: "hsl(240, 5%, 26%)",
  purple: "hsl(263, 70%, 50%)",
  purpleLight: "hsl(270, 70%, 60%)",
  cyan: "hsl(194, 100%, 50%)",
  green: "hsl(142, 76%, 36%)"
} as const;

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Media" },
  { id: "labs", label: "Labs & Infrastructure" },
  { id: "events", label: "Events & Workshops" },
  { id: "students", label: "Student Activities" },
  { id: "achievements", label: "Achievements" }
] as const;

export const RESEARCH_AREAS = [
  "Network Security & Intrusion Detection",
  "Digital Forensics & Incident Response", 
  "Ethical Hacking & Penetration Testing",
  "Cryptography & Blockchain Security",
  "Malware Analysis & Reverse Engineering",
  "Cyber Threat Intelligence",
  "IoT Security & Privacy",
  "Web Application Security",
  "Cloud Security Architecture",
  "Mobile Security & App Analysis",
  "AI-Driven Threat Detection",
  "Social Engineering & Human Factors"
] as const;

export const EVENT_TYPES = [
  "Workshop",
  "Competition", 
  "Seminar",
  "Conference",
  "Certification",
  "Hackathon",
  "Training"
] as const;

export const ACHIEVEMENT_CATEGORIES = [
  "student",
  "faculty", 
  "department"
] as const;
