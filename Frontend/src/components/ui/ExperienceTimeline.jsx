import React from "react";
import { Briefcase, Code, Users, Award } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern (Full-time)",
    company: "W3Villa",
    location: "Noida Sector 59 B 49",
    duration: "July 2025 - Sep 2025",
    description: "Completed a 2-month full-time internship focused on MERN Stack development. Gained hands-on experience in HTML, CSS, Bootstrap, Tailwind CSS, React.js, Node.js, Express.js, MongoDB, and MySQL.",
    highlights: [
      "Built Task Management System (Full Stack) with authentication, task tracking, and deadline reminders",
      "Developed Chat Application using WebSockets for real-time messaging",
      "Created multiple project templates and added to personal portfolio",
      "Developed responsive UIs and integrated them with backend APIs",
      "Collaborated with mentors and senior developers to improve coding practices"
    ],
    icon: <Code className="w-5 h-5 bg-transparent" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    role: "Software Development Intern",
    company: "Arundan Technologies",
    location: "Prayagraj",
    duration: "2024 - 2025",
    description: "Gained valuable internship experience working with modern web technologies and contributing to real-world projects.",
    highlights: [
      "Worked on MERN stack projects",
      "Enhanced problem-solving skills",
      "Collaborated with development team",
      "Learned industry best practices"
    ],
    icon: <Users className="w-5 h-5" />,
    gradient: "from-purple-500 to-pink-500"
  }
];

const education = [
  {
    role: "Bachelor of Computer Applications (BCA)",
    company: "Prof Rajendra Singh University",
    location: "Prayagraj",
    duration: "2022 – 2025 (COMPLETED)",
    description: "Completed Bachelor's degree in Computer Applications with strong foundation in programming and software development.",
    highlights: [
      "Strong academic performance",
      "Gained comprehensive knowledge in computer science fundamentals",
      "Developed programming skills in multiple languages"
    ],
    icon: <Award className="w-5 h-5" />,
    gradient: "from-green-500 to-emerald-500"
  }
];

const allTimeline = [...experiences, ...education];

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-6 md:px-20 relative  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-cyan-300/80 font-medium mb-4">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
              Experience
            </span>
            <span className="text-cyan-400"> & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
              Education
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Full Stack Developer with hands-on internship experience and strong educational foundation
          </p>
        </div>

        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full">
            {/* Animated dot moving along the line */}
            <div className="absolute w-3 h-3 bg-white rounded-full shadow-lg animate-bounce" style={{
              animation: "moveAlongLine 8s ease-in-out infinite"
            }}></div>
          </div>

          <style>{`
            @keyframes moveAlongLine {
              0%, 100% { top: 0; }
              50% { top: 80%; }
            }
            @keyframes glow {
              0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
              50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.3); }
            }
          `}</style>

          <div className="space-y-16 relative">
            {allTimeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot with Icon */}
                <div 
                  className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-20 rounded-full"
                  style={{ animation: "glow 3s ease-in-out infinite" }}
                >
                  <div className={`bg-gradient-to-r ${item.gradient} text-white p-4 rounded-full shadow-2xl border-4 border-white/20 hover:scale-110 transition-all duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Experience/Education Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} ml-16 md:ml-0`}>
                  <div className="group bg-gradient-to-r from-gray-800/90 to-gray-900/90 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                          {item.role}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-white font-semibold text-lg">{item.company}</p>
                          {item.location && (
                            <p className="text-gray-300 text-sm">{item.location}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-4">
                      <span className="text-cyan-300 text-sm font-medium">{item.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Border Glow */}
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:via-cyan-400/80 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Internship Experience", value: "2+", unit: "Companies" },
            { label: "Projects Completed", value: "5+", unit: "Projects" },
            { label: "Technologies Mastered", value: "10+", unit: "Skills" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">{stat.unit}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}