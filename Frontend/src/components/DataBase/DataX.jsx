
import { Code, Users, Award ,Layers, Coffee, Database, Zap, BarChart3} from "lucide-react";

const timeline = [
  {
    type: "Internship",
    role: "Software Development Intern (Full-time)",
    company: "W3Villa",
    location: "Noida, Sector 59",
    duration: "Jul 2025 – Sep 2025",
    description:
      "Completed a 2-month full-time internship focused on MERN Stack development with real-world projects.",
    highlights: [
      "Built a full-stack Task Management System",
      "Developed real-time Chat Application using WebSockets",
      "Worked with React, Node.js, Express & MongoDB",
      "Created responsive UI and integrated APIs",
    ],
    icon: <Code className="w-5 h-5 text-blue-600" />,
  },
  {
    type: "Internship",
    role: "Software Development Intern",
    company: "Arundan Technologies",
    location: "Prayagraj",
    duration: "2024 – 2025",
    description:
      "Gained hands-on experience in MERN stack and worked on team-based projects.",
    highlights: [
      "Worked on MERN stack projects",
      "Improved problem-solving skills",
      "Learned industry best practices",
    ],
    icon: <Users className="w-5 h-5 text-purple-600" />,
  },
  {
    type: "Education",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Prof. Rajendra Singh University",
    location: "Prayagraj",
    duration: "2022 – 2025 (Completed)",
    description:
      "Completed BCA with strong foundation in programming and computer science fundamentals.",
    highlights: [
      "Strong academic foundation",
      "Learned C, Java, DBMS & Web Technologies",
    ],
    icon: <Award className="w-5 h-5 text-green-600" />,
  },
];


const skills = [
  {
    title: "C Language (Core)",
    desc: "Strong foundation in C programming and problem solving.",
    icon: <Code />,
    level: 75,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "MERN Full Stack",
    desc: "MongoDB, Express, React & Node.js development.",
    icon: <Layers />,
    level: 80,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Core Java",
    desc: "OOP concepts, collections",
    icon: <Coffee />,
    level: 78,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Database (SQL & MongoDB)",
    desc: "Relational and NoSQL database design & queries.",
    icon: <Database />,
    level: 50,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "React & JavaScript",
    desc: "Modern UI development with ES6+ & hooks.",
    icon: <Zap />,
    level: 82,
    gradient: "from-yellow-500 to-orange-500",
  },
//   {
//     title: "DSA",
//     desc: "Intermediate level data structures & algorithms.",
//     icon: <BarChart3 />,
//     level: 65,
//     gradient: "from-indigo-500 to-purple-500",
//   },
];
export {timeline , skills}
