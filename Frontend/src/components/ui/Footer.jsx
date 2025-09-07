import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Code, Heart } from "lucide-react";

const ringVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 0.25, scale: 1, transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } },
};

export default function Footer() {
  return (
    <footer className="relative mt-20 text-white overflow-hidden">
      {/* Decorative top wave separator (SVG) */}
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block w-full h-[90px] text-gray-900">
        <path d="M0,96L60,80C120,64,240,32,360,42.7C480,53,600,107,720,117.3C840,128,960,96,1080,69.3C1200,43,1320,21,1380,10.7L1440,0L1440,140L1380,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z" fill="currentColor"/>
      </svg>

      {/* Background gradient + subtle grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Soft animated rings */}
      <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-400/5 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-6 pb-8 pt-2">
        <div className="grid gap-10 md:gap-12 grid-cols-1 md:grid-cols-4">
          {/* Brand / About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative inline-block">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white ring-2 ring-cyan-400/20">
                  AP
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-cyan-400/10 blur-md -z-10" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ashish Patel
                </h3>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Full Stack Developer
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Aspiring Full Stack Developer with hands-on internship experience at W3Villa and Arundan Technologies. 
              Passionate about creating scalable web applications using MERN Stack and Core Java.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:ashishshen20@gmail.com" className="hover:text-cyan-400 transition-colors">
                  ashishshen20@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+917525847163" className="hover:text-cyan-400 transition-colors">
                  +91 7525847163
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Prayagraj (Mau Aima), Uttar Pradesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/ashish84k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/10"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </a>
              <a 
                href="https://www.linkedin.com/in/ashish-patel-2b2b702a9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:bg-white/10"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </a>
              <a 
                href="mailto:ashishshen20@gmail.com"
                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {[
                { label: "About Me", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group" 
                    href={link.href}
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies & Skills */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js", "Node.js", "MongoDB", "Express.js", 
                "JavaScript", "Java", "MySQL", "HTML/CSS"
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-semibold text-gray-400 mb-4">Recent Projects</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Task Management System
                  </a>
                  <p className="text-xs text-gray-500">Full Stack MERN Application</p>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Real-time Chat App
                  </a>
                  <p className="text-xs text-gray-500">WebSocket Implementation</p>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    Portfolio Website
                  </a>
                  <p className="text-xs text-gray-500">React + Tailwind CSS</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10">
          {[
            { number: "2+", label: "Years Learning", icon: "📚" },
            { number: "2", label: "Internships", icon: "💼" },
            { number: "5+", label: "Projects Built", icon: "🚀" },
            { number: "8+", label: "Technologies", icon: "⚡" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-cyan-400 group-hover:text-blue-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Ashish Patel. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>& lots of ☕</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full flex items-center gap-2 border border-green-400/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Open for opportunities
            </span>
          </div>
        </div>

        {/* Floating "Back to Top" Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}