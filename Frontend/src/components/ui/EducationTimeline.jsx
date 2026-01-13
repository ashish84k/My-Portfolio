import React from "react";
import { motion } from "framer-motion";
import { education } from "../DataBase/Data";

export default function EducationTimeline() {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-pink-400 to-purple-500 h-full rounded-full"></div>

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Card */}
              <div className="hover:border-2 transition-all border-amber-300 shadow-lg rounded-xl p-6 w-full md:w-5/12 relative z-10 bg-white">
                <span className="text-sm text-gray-500">{edu.year}</span>
                <h3 className="text-lg font-semibold text-black">{edu.title}</h3>
                <p className="text-sm text-gray-600">{edu.place}</p>
                <p className="text-gray-500 mt-2">{edu.desc}</p>
              </div>

              {/* Dot */}
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full border-4 border-white shadow absolute left-1/2 transform -translate-x-1/2 z-20"></div>

              {/* Empty space */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
