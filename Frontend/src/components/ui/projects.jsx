import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../DataBase/Data";  

const Projects = () => {
  return (
    <section className="relative py-20">
      {/* SVG Background Decoration */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 800"
      >
        <circle cx="400" cy="400" r="400" fill="url(#grad1)" />
        <defs>
          <radialGradient id="grad1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-700 text-lg mb-6">
            Here are some of my recent projects. Click on any project to learn more!
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Projects
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  text-white" style={{ perspective:"800px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-700 hover:border-purple-500 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1}}
              whileHover={{ y: -10, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.6)"}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => window.location.href = '/projects'}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-purple-700/30 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-400 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
