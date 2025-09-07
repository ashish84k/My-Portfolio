import { motion } from "framer-motion";
import { Award, Star, Medal } from "lucide-react";

const Certifications = () => {
 const items = [
  {
    icon: <Award className="w-10 h-10 text-yellow-400 drop-shadow-glow" />,
    title: "CCC (Course on Computer Concepts)",
    issuer: "NIELIT | 2022",
    description: "Completed government-recognized certification covering computer fundamentals, MS Office, and internet usage.",
  },
  {
    icon: <Star className="w-10 h-10 text-blue-400 drop-shadow-glow" />,
    title: "MERN Stack & Core Java Training",
    issuer: "Prayagraj | 2024",
    description: "Hands-on training in full-stack web development (React, Node.js, Express, MongoDB) and Core Java concepts.",
  },
  {
    icon: <Medal className="w-10 h-10 text-green-400 drop-shadow-glow" />,
    title: "Web Development Internships",
    issuer: "W3villa (Noida) & Arundan Technology (Prayagraj) | 2024–2025",
    description: "2-month internships focused on real-world projects, teamwork, and learning industry practices in MERN stack.",
  },
];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Animated SVG Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-20 -left-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -bottom-20 -right-20"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>

        {/* Horizontal Showcase */}
        <div className="custom-scrollbar flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 hide-scrollbar">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[350px] bg-gradient-to-tr from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl border border-gray-700 snap-center p-6 flex flex-col items-center text-center relative"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              {/* Icon Glow Circle */}
              <div className="mb-4 p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
                {item.icon}
              </div>

              {/* Title & Issuer */}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.issuer}</p>

              {/* Description */}
              <p className="mt-3 text-gray-300 text-sm">{item.description}</p>

              {/* Animated underline */}
              <motion.div
                className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
