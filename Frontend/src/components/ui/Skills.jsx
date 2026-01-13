import React from "react";
import { Code, Layers, Coffee, Database, Zap, BarChart3 } from "lucide-react";
import { skills } from "../DataBase/DataX";



export default function AshishSkills() {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <p className="tracking-widest text-sm text-cyan-600 font-medium">
          SKILLS
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900">
          Technical Expertise
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Full Stack Developer with strong programming fundamentals and hands-on
          project experience.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-white border border-gray-200
                       p-7 shadow-md
                       hover:shadow-xl hover:-translate-y-2
                       transition-all duration-300"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-xl grid place-items-center
              bg-gradient-to-r ${skill.gradient}
              shadow-lg mb-5`}
            >
              {React.cloneElement(skill.icon, {
                className: "w-8 h-8 text-white",
              })}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              {skill.desc}
            </p>

            {/* Progress */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-500">Proficiency</span>
                <span className="text-cyan-600 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col sm:flex-row gap-4 px-8 py-4 rounded-xl
                        bg-gray-50 border border-gray-200">
          <span className="text-gray-700">
            🚀 Currently learning advanced backend & system design
          </span>
          <span className="hidden sm:block w-px bg-gray-300" />
          <span className="text-cyan-600 font-semibold">
            Internship Experience: 2+ Months
          </span>
        </div>
      </div>
    </section>
  );
}
    