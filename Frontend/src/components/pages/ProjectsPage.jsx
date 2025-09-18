import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import AdvancedBackdropSVG from "../ui/AdvancedBackdropSVG";

const projects = [
  {
    id: 1,
    title: "Exhibition Management System",
    description: "A comprehensive MERN-based system designed to manage exhibitions, stalls, tickets, and payments with separate admin and user panels. This system streamlines the entire exhibition process from planning to execution.",
    detailedDescription: "This full-stack application provides a complete solution for managing exhibitions. The admin panel allows for creating and managing exhibitions, setting up stalls, managing vendors, and tracking sales. The user panel enables visitors to browse exhibitions, purchase tickets, and make payments securely. The system includes real-time updates, payment integration, and comprehensive reporting features.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    github: "https://github.com/ashish/exhibition",
    live: "#",
    features: [
      "Admin dashboard for exhibition management",
      "User-friendly ticket booking system",
      "Secure payment processing",
      "Real-time stall availability updates",
      "Comprehensive reporting and analytics",
      "Multi-role authentication system"
    ],
    challenges: "Implementing real-time updates for stall availability and managing concurrent bookings was challenging. I solved this using WebSocket connections and database transactions to ensure data consistency.",
    learnings: "Learned advanced state management with Redux, WebSocket implementation, and payment gateway integration. Also gained experience in handling concurrent user operations and database optimization."
  },
  {
    id: 2,
    title: "Canteen Management System",
    description: "A React + Node.js based system for canteen orders, payments, and real-time management. Streamlines the entire food ordering process from menu browsing to order fulfillment.",
    detailedDescription: "This system revolutionizes canteen operations by providing a digital platform for food ordering and management. Students can browse menus, place orders, make payments, and track their order status in real-time. The admin panel allows for menu management, order tracking, and inventory control.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay"],
    github: "https://github.com/ashishpatel102/CanteenProject",
    live: "https://canteenease84k.onrender.com/",
    features: [
      "Real-time order tracking",
      "Menu management system",
      "Payment integration",
      "Order history and analytics",
      "Inventory management",
      "Push notifications for order updates"
    ],
    challenges: "Managing real-time order updates and ensuring smooth payment processing were the main challenges. I implemented Socket.IO for real-time communication and integrated Razorpay for secure payments.",
    learnings: "Gained expertise in real-time applications, payment gateway integration, and user experience optimization. Also learned about inventory management systems and notification services."
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website with modern animations, contact form, and smooth UI/UX. Showcases my skills, projects, and professional journey in an interactive and engaging way.",
    detailedDescription: "A responsive and interactive portfolio website built with modern web technologies. Features smooth animations, dark/light mode toggle, contact form with email integration, and a comprehensive showcase of my work. The design focuses on user experience and performance optimization.",
    tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS", "React Router"],
    github: "https://github.com/ashish/portfolio",
    live: "#",
    features: [
      "Responsive design for all devices",
      "Dark/Light mode toggle",
      "Smooth animations and transitions",
      "Contact form with email integration",
      "Project showcase with detailed views",
      "SEO optimized",
      "Fast loading and performance optimized"
    ],
    challenges: "Creating smooth animations while maintaining performance was challenging. I optimized animations using Framer Motion's performance features and implemented lazy loading for images.",
    learnings: "Mastered modern CSS techniques, animation libraries, and performance optimization. Also learned about SEO best practices and responsive design principles."
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A real-time chat app built using WebSocket/Socket.IO with features like user online/offline status, typing indicators, and message history. Enables seamless communication between users.",
    detailedDescription: "This application provides a complete real-time messaging experience with modern features. Users can create accounts, join chat rooms, send messages, and see who's online. The app includes typing indicators, message delivery status, and message history persistence.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Node.js", "Socket.IO", "MongoDB", "Express"],
    github: "https://github.com/ashish84k/chat-app/",
    live: "https://chat-app-ashish84k.onrender.com/",
    features: [
      "Real-time messaging",
      "User online/offline status",
      "Typing indicators",
      "Message history",
      "Room-based chat",
      "User authentication",
      "Message delivery status"
    ],
    challenges: "Implementing real-time features and managing user connections efficiently was challenging. I used Socket.IO for real-time communication and implemented connection pooling for better performance.",
    learnings: "Gained deep understanding of WebSocket technology, real-time applications, and user state management. Also learned about scaling real-time applications and connection management."
  },
  {
    id: 5,
    title: "Task Management System",
    description: "A full-featured task management application with user authentication, task creation, status tracking, and deadline reminders. Helps users organize and manage their work efficiently.",
    detailedDescription: "This comprehensive task management system provides all the tools needed for effective project and task organization. Users can create projects, add tasks, set deadlines, assign team members, and track progress. The system includes notifications, reporting, and collaboration features.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "JWT", "Nodemailer"],
    github: "https://github.com/ashish84k/taskManagement",
    live: "https://task-management-olive-six.vercel.app/",
    features: [
      "User authentication and authorization",
      "Project and task creation",
      "Status tracking (Pending, In Progress, Completed)",
      "Deadline reminders and notifications",
      "Team collaboration features",
      "Progress reporting and analytics",
      "Email notifications"
    ],
    challenges: "Implementing complex task dependencies and notification systems was challenging. I created a robust notification system using cron jobs and email services.",
    learnings: "Learned about complex state management, notification systems, and project management principles. Also gained experience in team collaboration features and analytics implementation."
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden md:py-46 ">
        <div className="max-w-6xl mx-auto px-6">
          <AdvancedBackdropSVG />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A collection of my work showcasing full-stack development skills, 
              modern technologies, and creative problem-solving approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Info */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges & Learnings */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Challenges:
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {project.challenges}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Key Learnings:
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {project.learnings}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                          View Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
