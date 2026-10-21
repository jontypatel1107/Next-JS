
export interface Student {
  id: number;
  name: string;
  course: string;
  year: string;
  image: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  skills: string[];
  projects: string[];
}

export const students: Student[] = [
  {
    id: 1,
    name: "Aarav Patel",
    course: "Computer Science",
    year: "3rd Year",
    image: "/students/aarav.jpg",
    email: "aarav.patel@example.com",
    phone: "+91 98765 43210",
    location: "Ahmedabad, Gujarat",
    bio: "A passionate student interested in web development, artificial intelligence, and building innovative applications.",
    skills: ["React", "Next.js", "JavaScript", "Python", "HTML", "CSS"],
    projects: [
      "Student Management System",
      "Weather App",
      "Personal Portfolio Website",
    ],
  },
  {
    id: 2,
    name: "Riya Shah",
    course: "Information Technology",
    year: "2nd Year",
    image: "/students/riya.jpg",
    email: "riya.shah@example.com",
    phone: "+91 98765 12345",
    location: "Vadodara, Gujarat",
    bio: "A creative IT student who enjoys designing user-friendly websites and learning modern frontend technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    projects: [
      "Online Shopping Website",
      "Recipe Finder App",
      "College Event Portal",
    ],
  },
  {
    id: 3,
    name: "Karan Mehta",
    course: "Electronics",
    year: "3rd Year",
    image: "/students/karan.jpg",
    email: "karan.mehta@example.com",
    phone: "+91 98765 23456",
    location: "Surat, Gujarat",
    bio: "An electronics student interested in embedded systems, robotics, and Internet of Things applications.",
    skills: ["C", "C++", "Arduino", "Python", "IoT"],
    projects: [
      "Smart Home Automation",
      "Obstacle Avoiding Robot",
      "Temperature Monitoring System",
    ],
  },
  {
    id: 4,
    name: "Sneha Joshi",
    course: "Computer Science",
    year: "1st Year",
    image: "/students/sneha.jpg",
    email: "sneha.joshi@example.com",
    phone: "+91 98765 34567",
    location: "Rajkot, Gujarat",
    bio: "An enthusiastic beginner exploring programming, web design, and problem-solving through practical projects.",
    skills: ["C", "HTML", "CSS", "JavaScript", "Git"],
    projects: [
      "Personal Portfolio",
      "Calculator App",
      "Responsive Landing Page",
    ],
  },
  {
    id: 5,
    name: "Rahul Verma",
    course: "Mechanical",
    year: "4th Year",
    image: "/students/rahul.jpg",
    email: "rahul.verma@example.com",
    phone: "+91 98765 45678",
    location: "Gandhinagar, Gujarat",
    bio: "A final-year mechanical engineering student interested in CAD design, automation, and sustainable engineering.",
    skills: ["AutoCAD", "SolidWorks", "MATLAB", "3D Modeling"],
    projects: [
      "Solar Powered Vehicle",
      "Automatic Irrigation System",
      "Mechanical Component Design",
    ],
  },
  {
    id: 6,
    name: "Priya Desai",
    course: "Information Technology",
    year: "2nd Year",
    image: "/students/priya.jpg",
    email: "priya.desai@example.com",
    phone: "+91 98765 56789",
    location: "Anand, Gujarat",
    bio: "An aspiring software developer who enjoys working with databases, frontend development, and creative digital solutions.",
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "SQL"],
    projects: [
      "Expense Tracker",
      "Student Attendance System",
      "Task Management App",
    ],
  },
  {
    id: 7,
    name: "Dev Malhotra",
    course: "Computer Science",
    year: "3rd Year",
    image: "/students/dev.jpg",
    email: "dev.malhotra@example.com",
    phone: "+91 98765 67890",
    location: "Mumbai, Maharashtra",
    bio: "A technology enthusiast interested in backend development, data structures, and scalable web applications.",
    skills: ["Node.js", "Express", "MongoDB", "TypeScript", "Git"],
    projects: [
      "REST API Platform",
      "Chat Application",
      "Online Learning Portal",
    ],
  },
];
