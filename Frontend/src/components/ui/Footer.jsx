import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Code, Heart } from "lucide-react";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                AP
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Ashish Patel
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Code className="w-4 h-4" />
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-6">
              Aspiring Full Stack Developer with internship experience at
              W3Villa and Arundan Technologies. Passionate about building
              scalable web applications using MERN Stack & Core Java.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-500" />
                <a href="mailto:ashishshen20@gmail.com">ashishshen20@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pink-500" />
                <a href="tel:+917525847163">+91 7525847163</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>Prayagraj (Mau Aima), Uttar Pradesh</span>
              </div>
            </div>

            {/* Social */}
            {/* <div className="flex gap-4 mt-6">
              <a href="https://github.com/ashish84k" target="_blank" className="p-2 border rounded-lg hover:bg-gray-100">
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/ashish-patel-2b2b702a9/" target="_blank" className="p-2 border rounded-lg hover:bg-gray-100">
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
              <a href="mailto:ashishshen20@gmail.com" className="p-2 border rounded-lg hover:bg-gray-100">
                <Mail className="w-5 h-5 text-gray-700" />
              </a>
            </div> */}
            <SocialIcon></SocialIcon>
          </div>

          

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-pink-600">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-5">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node",
                "MongoDB",
                "Express",
                "Java",
                "MySQL",
                "HTML",
                "CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs border rounded-full text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            © {new Date().getFullYear()} Ashish Patel · Made with
            <Heart className="w-4 h-4 text-red-500" />
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-green-400 px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
