import React from "react";
// Using Lucide React icons which are supported
import { Code, Layers, Coffee, Database, Zap, BarChart3 } from "lucide-react";
// (optional) framer-motion for card entrance – if you already installed it, uncomment below
// import { motion } from "framer-motion";

const skills = [
  { 
    number: 1, 
    title: "C Language (Core)",    
    description: "Strong foundation in C programming with core concepts.", 
    icon: <Code className="text-white w-8 h-8" />,  
    gradient: "from-blue-600 to-blue-400" 
  },
  { 
    number: 2, 
    title: "MERN Full Stack",     
    description: "MongoDB, Express.js, React.js, Node.js development.", 
    icon: <Layers className="text-white w-8 h-8" />, 
    gradient: "from-green-500 to-cyan-400" 
  },
  { 
    number: 3, 
    title: "Core Java",
    description: "Object-oriented programming with Java fundamentals.",    
    icon: <Coffee className="text-white w-8 h-8" />, 
    gradient: "from-orange-500 to-red-400" 
  },
  { 
    number: 4, 
    title: "Database (SQL, MongoDB)", 
    description: "Relational and NoSQL database management systems.",      
    icon: <Database className="text-white w-8 h-8" />,   
    gradient: "from-purple-500 to-pink-400" 
  },
  { 
    number: 5, 
    title: "React Js, JavaScript",  
    description: "Modern frontend development with React and ES6+.",       
    icon: <Zap className="text-white w-8 h-8" />,  
    gradient: "from-yellow-500 to-orange-400" 
  },
  { 
    number: 6, 
    title: "Data Structures & Algorithms",
    description: "Intermediate level DSA problem solving skills.",          
    icon: <BarChart3 className="text-white w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500" 
  },
];

export default function AshishSkills() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Inline keyframes for SVG animations */}
      <style>{`
        @keyframes dashMove { to { stroke-dashoffset: -1000; } }
        @keyframes floatUpDown { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-14px) } }
        @keyframes glowPulse { 0%,100% { opacity: .55 } 50% { opacity: .9 } }
        @keyframes rotate { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
      `}</style>

      {/* Decorative Advanced SVG Background */}
      <AdvancedBackdropSVG />

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 px-6">
        <p className="text-sm tracking-widest text-cyan-300/80 font-medium">TECHNICAL EXPERTISE</p>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
            My Skills
          </span>
          <span className="text-cyan-400">.</span>
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-lg">
          Full Stack Developer with expertise in modern technologies and strong programming fundamentals.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const CardWrapper = ({ children }) => (
              // If using framer-motion, replace div with <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}}>
              <div>{children}</div>
            );
            return (
              <CardWrapper key={skill.number}>
                <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:border-cyan-400/30">
                  {/* Animated top border glow */}
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon with gradient pill + soft glow */}
                  <div className="relative mx-auto w-20 h-20 rounded-3xl grid place-items-center
                                  bg-gradient-to-tr shadow-2xl
                                  ring-1 ring-white/20 group-hover:ring-cyan-300/50 
                                  transition-all duration-500 group-hover:scale-110"
                       style={{ animation: "floatUpDown 6s ease-in-out infinite" }}
                  >
                    {/* Rotating ring on hover */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-cyan-400/30 group-hover:animate-spin transition-all duration-1000" />
                    
                    <div className={`absolute -inset-6 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-all duration-500 ${`bg-gradient-to-tr ${skill.gradient}`}`}
                         style={{ animation: "glowPulse 4s ease-in-out infinite" }} />
                    <div className={`relative z-10 w-20 h-20 rounded-3xl grid place-items-center bg-gradient-to-tr ${skill.gradient} shadow-inner`} >
                      {skill.icon}
                    </div>
                  </div>

                  {/* Big ghost number */}
                  <div className="pointer-events-none select-none absolute -top-4 -right-3 text-8xl font-black text-white/3 group-hover:text-white/5 transition-colors duration-300">
                    {skill.number}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{skill.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Enhanced Progress bar */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400 font-medium">Proficiency</span>
                      <span className="text-xs text-cyan-300 font-bold">{60 + (skill.number * 8)}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${60 + (skill.number * 8)}%` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-full animate-pulse" />
                    </div>
                  </div>

                  {/* Enhanced bottom accent line */}
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400/60 transition-all duration-300" />
                  
                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors duration-300" />
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">Currently learning new technologies</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-300 font-medium">Experience(Intern):</span>
              <span className="text-sm text-cyan-300 font-bold">2+ Month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function AdvancedBackdropSVG() {
  return (
    <div className="absolute inset-0 -z-0">
      <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" className="absolute inset-0">
        <defs>
          {/* Enhanced gradients */}
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#818cf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
          </radialGradient>

          {/* Enhanced dotted pattern */}
          <pattern id="enhancedDots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="rgba(34,211,238,0.15)" />
            <circle cx="20" cy="20" r="1" fill="rgba(96,165,250,0.1)" />
          </pattern>

          {/* Advanced blur filter */}
          <filter id="advancedBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" result="blur" />
            <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0"/>
          </filter>

          {/* Multi-stop mask */}
          <linearGradient id="complexMask" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
            <stop offset="20%" stopColor="white" stopOpacity="0.8" />
            <stop offset="60%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <mask id="complexMaskId">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#complexMask)" />
          </mask>
        </defs>

        {/* Enhanced background elements */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#radialGlow)" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#enhancedDots)" mask="url(#complexMaskId)" />

        {/* Multiple floating geometric shapes */}
        <g filter="url(#advancedBlur)" opacity="0.3">
          <circle cx="200" cy="150" r="120" fill="#22d3ee">
            <animateTransform attributeName="transform" type="translate" values="0,0; 20,30; 0,0" dur="20s" repeatCount="indefinite"/>
          </circle>
          <ellipse cx="1200" cy="200" rx="140" ry="100" fill="#60a5fa">
            <animateTransform attributeName="transform" type="translate" values="0,0; -30,20; 0,0" dur="25s" repeatCount="indefinite"/>
          </ellipse>
          <circle cx="800" cy="700" r="180" fill="#818cf8">
            <animateTransform attributeName="transform" type="translate" values="0,0; 40,-20; 0,0" dur="30s" repeatCount="indefinite"/>
          </circle>
          <polygon points="600,100 650,200 550,200" fill="#c084fc" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" values="0 600 150; 360 600 150" dur="40s" repeatCount="indefinite"/>
          </polygon>
        </g>

        {/* Multiple animated wave paths */}
        <g opacity="0.7">
          <path
            d="M0,400 C360,300 720,500 1080,400 C1260,350 1350,450 1440,400"
            fill="none"
            stroke="url(#primaryGrad)"
            strokeWidth="3"
            strokeDasharray="20 15"
            style={{ animation: "dashMove 25s linear infinite" }}
          />
          <path
            d="M0,600 C240,500 480,700 720,600 C960,520 1200,680 1440,600"
            fill="none"
            stroke="url(#primaryGrad)"
            strokeWidth="2"
            strokeDasharray="15 10"
            opacity="0.6"
            style={{ animation: "dashMove 35s linear infinite reverse" }}
          />
        </g>

        {/* Ambient glow waves */}
        <g opacity="0.1">
          <path
            d="M0,400 C360,300 720,500 1080,400 C1260,350 1350,450 1440,400"
            fill="none"
            stroke="url(#primaryGrad)"
            strokeWidth="20"
          />
          <path
            d="M0,600 C240,500 480,700 720,600 C960,520 1200,680 1440,600"
            fill="none"
            stroke="url(#primaryGrad)"
            strokeWidth="25"
          />
        </g>
      </svg>
    </div>
  );
}