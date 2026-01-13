import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { projects } from "../DataBase/Data";



const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Header */}
      <section className="relative flex flex-col items-center px-6 md:px-16 py-20 overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-700">
            A collection of my work showcasing full-stack development skills, modern technologies, and creative problem-solving.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Learnings */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-1">Challenges:</h4>
                      <p className="text-gray-700 text-sm">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Learnings:</h4>
                      <p className="text-gray-700 text-sm">{project.learnings}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      <FaGithub /> View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
