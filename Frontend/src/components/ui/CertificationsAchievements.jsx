import { motion } from "framer-motion";
import { Award, Star, Medal } from "lucide-react";

const Certifications = () => {
  const items = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "CCC (Course on Computer Concepts)",
      issuer: "NIELIT | 2022",
      description:
        "Government-recognized certification covering computer fundamentals, MS Office and internet usage.",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: "MERN Stack & Core Java Training",
      issuer: "Prayagraj | 2024",
      description:
        "Hands-on training in MERN stack and Core Java with real project exposure.",
    },
    {
      icon: <Medal className="w-8 h-8 text-green-500" />,
      title: "Web Development Internships",
      issuer: "W3villa (Noida) & Arundan Technology | 2024–25",
      description:
        "2-month internships focused on real-world projects, teamwork and industry practices.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Certifications & <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Recognized certifications and internship experiences that shaped my
            technical foundation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6
                         shadow-md hover:shadow-xl transition-all duration-300
                         hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center
                              bg-gray-100">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {item.issuer}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Accent line */}
              <div className="mt-5 h-1 w-12 rounded-full bg-blue-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
