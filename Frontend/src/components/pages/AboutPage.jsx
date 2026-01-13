import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCode,
  FaRocket,
  FaHeart,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Skills from "../ui/Skills";
import EducationTimeline from "../ui/EducationTimeline";
import ExperienceTimeline from "../ui/ExperienceTimeline";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 px-6 border-b">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-6"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600 text-lg">
            My journey, skills, and passion for building modern web applications.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl shadow-md p-8 mb-14"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <FaHeart className="text-pink-500 w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">My Story</h2>
            </div>

            <p className="text-gray-600 mb-5">
              Hello! I'm <strong>Ashish Patel</strong>, a passionate Full Stack
              Developer with a strong interest in building scalable and
              user-friendly applications.
            </p>
            <p className="text-gray-600 mb-5">
              I specialize in the <strong>MERN Stack</strong> and enjoy working
              on real-world problems, writing clean code, and learning new
              technologies continuously.
            </p>
            <p className="text-gray-600">
              Apart from coding, I love exploring new tools, improving my
              problem-solving skills, and growing as a developer every day.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaCode />,
                title: "Clean Code",
                text: "Readable, scalable, and maintainable code practices.",
                color: "blue",
              },
              {
                icon: <FaRocket />,
                title: "Innovation",
                text: "Finding simple solutions to complex problems.",
                color: "purple",
              },
              {
                icon: <FaGraduationCap />,
                title: "Learning",
                text: "Always improving skills and adapting to new tech.",
                color: "green",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white shadow-md rounded-xl p-6 text-center"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
            <p className="text-center text-gray-600 mb-8">
              Technologies I use to build applications
            </p>
            <Skills />
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
            <p className="text-center text-gray-600 mb-8">
              My academic background
            </p>
            <EducationTimeline />
          </section>

          {/* Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Experience</h2>
            <p className="text-center text-gray-600 mb-8">
              Internship and project experience
            </p>
            <ExperienceTimeline />
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-blue-600 text-white rounded-xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="mb-6 text-white/90">
              Looking for a fresher Full Stack Developer? Let's connect.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Contact Me
              </Link>
              <Link
                to="/projects"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
              >
                View Projects
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
