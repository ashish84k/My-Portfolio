import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaBriefcase, FaCode, FaRocket, FaHeart, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Skills from "../ui/Skills";
import EducationTimeline from "../ui/EducationTimeline";
import ExperienceTimeline from "../ui/ExperienceTimeline";
import AdvancedBackdropSVG from "../ui/AdvancedBackdropSVG";

const AboutPage = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get to know me better - my journey, passions, and what drives me 
              in the world of technology and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <FaHeart className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Hello! I'm Ashish Patel, a passionate full-stack developer with a love for creating 
                innovative solutions and bringing ideas to life through code. My journey in technology 
                began with curiosity and has evolved into a deep passion for web development.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have experience 
                building scalable web applications, real-time systems, and user-friendly interfaces. 
                My approach to development is centered around clean code, user experience, and continuous learning.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through writing and mentoring. I believe in the power of 
                technology to solve real-world problems and make a positive impact.
              </p>
            </div>
          </motion.div>

          {/* Values & Approach */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in writing maintainable, readable, and efficient code that stands the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I love exploring new technologies and finding creative solutions to complex problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous learning is at the core of my development philosophy and personal growth.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Technologies and tools I work with to build amazing applications
              </p>
            </div>
            <Skills />
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
              <p className="text-gray-600 dark:text-gray-300">
                My academic journey and continuous learning path
              </p>
            </div>
            <EducationTimeline />
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Experience</h2>
              <p className="text-gray-600 dark:text-gray-300">
                My professional journey and the projects I've worked on
              </p>
            </div>
            <ExperienceTimeline />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-white/90 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
