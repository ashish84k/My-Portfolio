import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden">
      
      {/* Background Animated SVG Circles */}
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-[500px] opacity-20"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" stroke="#ec4899" strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="#8b5cf6" strokeWidth="2" fill="none" />
      </motion.svg>

      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-lg"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Ashish Patel
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg "
        >
          Aspiring Full Stack Developer with hands-on internship experience at W3villa (Noida) and Arundan Technologies (Prayagraj). Skilled in MERN Stack and Core Java, with a strong foundation in building scalable web applications, REST APIs, and responsive UIs. Passionate about writing clean, user-friendly code and continuously learning new technologies
        </motion.p>

        {/* Buttons */}
        <motion.div>
            <SocialIcon></SocialIcon>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 flex gap-4"
          >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Hire Me <FaArrowRight />
          </a>
          <a
            href="/ASHEESH_RESUME.pdf"
            download
            className="flex items-center gap-2 border border-pink-500 text-pink-500 px-6 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors"
          >
            Download CV <FaDownload />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mt-10 md:mt-0"
      >
        <motion.img
          src='./images/2.jpeg'
          alt="Profile"
          className="w-72 md:w-[400px] rounded-full border-4 border-pink-500 shadow-lg brightness-130"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
