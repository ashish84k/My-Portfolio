import { Code, Users, Award } from "lucide-react";
import { timeline } from "../DataBase/DataX";



export default function ExperienceTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Experience & <span className="text-blue-600">Education</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Fresher with internship experience and a strong academic background
            in computer applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 ml-4 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-10">
              {/* Dot */}
              <div className="absolute -left-[11px] top-1 w-6 h-6 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-semibold text-blue-600 uppercase">
                  {item.type}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {item.role}
                </h3>

                <p className="text-gray-700 font-medium">
                  {item.company}
                </p>

                <p className="text-sm text-gray-500">
                  {item.location} • {item.duration}
                </p>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Fresher Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Internships", value: "2" },
            { label: "Projects", value: "5+" },
            { label: "Tech Skills", value: "10+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
            >
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
