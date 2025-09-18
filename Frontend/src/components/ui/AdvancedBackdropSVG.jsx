
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

export default AdvancedBackdropSVG;