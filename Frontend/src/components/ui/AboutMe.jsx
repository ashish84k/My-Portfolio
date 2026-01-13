import React from "react";
import { MapPin, Calendar, GraduationCap, Briefcase, Code, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-32 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-bounce delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest  font-medium mb-4">GET TO KNOW ME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
              About Me
            </span>
            <span className="text-cyan-400">.</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Learn more about my journey, skills, and passion for development
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Learn More About Me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            {/* Main Description */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-cyan-400" />
                Full Stack Developer
              </h3>
              <p className=" text-lg leading-relaxed mb-6">
                Aspiring Full Stack Developer with hands-on internship experience at{" "}
                <span className="text-cyan-400 font-semibold">W3Villa (Noida)</span> and{" "}
                <span className="text-purple-400 font-semibold">Arundan Technologies (Prayagraj)</span>. 
                Skilled in MERN Stack and Core Java, with a strong foundation in building 
                scalable web applications, REST APIs, and responsive UIs.
              </p>
              <p className=" text-lg leading-relaxed">
                Passionate about writing clean, user-friendly code and continuously learning new technologies. 
                Recently completed BCA from Prof Rajendra Singh University and actively seeking opportunities 
                to contribute to innovative projects.
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <h4 className=" font-semibold">Location</h4>
                </div>
                <p >Prayagraj (Mau Aima)</p>
                <p className=" text-sm">Uttar Pradesh, India</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <h4 className=" font-semibold">Education</h4>
                </div>
                <p>BCA (Completed)</p>
                <p className="text-gray-400 text-sm">Prof Rajendra Singh University</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-6 border border-green-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-green-400" />
                  <h4 className=" font-semibold">Experience</h4>
                </div>
                <p>2+ Internships</p>
                <p className=" text-sm">MERN Stack Development</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-xl rounded-2xl p-6 border border-orange-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-orange-400" />
                  <h4 className=" font-semibold">Certification</h4>
                </div>
                <p>CCC (NIELIT)</p>
                <p className=" text-sm">Computer Concepts</p>
              </div>
            </div>

            {/* Technical Skills Progress */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold  mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                Technical Proficiency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { skill: "MERN Stack", level: 85, color: "from-green-400 to-cyan-400" },
                  { skill: "Core Java", level: 80, color: "from-orange-400 to-red-400" },
                  { skill: "React.js", level: 90, color: "from-blue-400 to-cyan-400" },
                  { skill: "Node.js/Express", level: 85, color: "from-green-400 to-emerald-400" },
                  { skill: "Database (SQL/MongoDB)", level: 80, color: "from-purple-400 to-pink-400" },
                  // { skill: "DSA", level: 75, color: "from-indigo-400 to-purple-400" },
                ].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className=" font-medium">{item.skill}</span>
                      <span className="text-cyan-400 font-bold text-sm">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 relative overflow-hidden`}
                        style={{ width: `${item.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className="flex-1 flex flex-col items-center lg:items-end">
            <div className="relative">
              {/* Profile Image with Advanced Styling */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden">
                {/* Rotating border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-spin opacity-75 blur-sm"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
                <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                
                {/* Placeholder for profile image */}
                <div className="absolute inset-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-gray-400">👨‍💻</div>
                </div>
                
                {/* Optional: Uncomment if you have profile image */}
                {/* <img
                  src="/path-to-your-image.jpg"
                  alt="Ashish Patel"
                  className="absolute inset-2 object-cover w-full h-full rounded-full"
                /> */}
                
                {/* Floating status indicator */}
                <div className="absolute bottom-4 right-4 bg-green-400 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Name and Title Card */}
              <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <h3 className="text-2xl font-bold mb-2">Ashish Patel</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-full">
                    Full Stack Developer
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm font-medium rounded-full">
                    MERN Stack
                  </span>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <span>📧</span>
                    <span className="text-sm">ashishshen20@gmail.com</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>📱</span>
                    <span className="text-sm">+91 7525847163</span>
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-6 grid grid-cols-3 gap-4 w-full">
                <div className="text-center p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">2+</div>
                  <div className="text-xs text-gray-400">Internships</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-green-400">3</div>
                  <div className="text-xs text-gray-400">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}