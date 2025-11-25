import { Icon } from "@iconify/react";
import Galaxy from "../Components/Galaxy.jsx";

const skillIcons = [
  { name: "HTML", icon: "logos:html-5" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Angular", icon: "logos:angular-icon" },
  { name: "Flutter", icon: "logos:flutter" },
  { name: "WordPress", icon: "logos:wordpress-icon" },
  { name: "Shopify", icon: "logos:shopify" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
];

// Coding specific icons for the central core
const codingIcons = [
  "vscode-icons:file-type-typescript",
  "vscode-icons:file-type-python",
  "vscode-icons:file-type-java",
  "vscode-icons:file-type-cpp",
  "vscode-icons:file-type-git",
  "vscode-icons:file-type-vscode",
  "vscode-icons:file-type-node",
  "vscode-icons:file-type-reactjs",
];

export default function HeroGlobe() {
  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center py-8 lg:py-0">
        {/* Background Galaxy */}
        <div className="absolute inset-0 z-0">
          <Galaxy
            mouseInteraction
            mouseRepulsion={false}
            density={1.2}
            glowIntensity={0.1}
            hueShift={0}
            twinkleIntensity={0.1}
            rotationSpeed={0.05}
            repulsionStrength={1}
            autoCenterRepulsion={0}
            starSpeed={0.1}
            animationspeed={0.4}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight 
                           bg-gradient-to-r from-purple-500 via-purple-300 to-indigo-400 
                           bg-clip-text text-transparent mb-4 lg:mb-6">
              Technology That <span className="block">Accelerates Your</span> Business Growth
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Powerful, efficient, and future-focused IT solutions built for the digital era.
            </p>
          </div>

          {/* Orbital System Container - Increased Height */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
            <div className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[550px] md:w-[550px] lg:h-[600px] lg:w-[600px]">
              
              {/* Central Coding Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main Coding Sphere */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 border border-gray-700 animate-pulse-slow">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-800 rounded-full overflow-hidden">
                      {/* Animated Code Editor */}
                      <div className="absolute inset-2 bg-gray-900 rounded-lg overflow-hidden">
                        {/* Editor Header */}
                        <div className="flex items-center space-x-1 px-2 py-1 bg-gray-800 border-b border-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="text-[6px] text-gray-400 ml-2">app.js</div>
                        </div>
                        
                        {/* Code Content */}
                        <div className="p-1 font-mono text-[4px] sm:text-[5px] leading-tight text-green-400">
                          <div className="flex">
                            <span className="text-gray-500 mr-1">1</span>
                            <span className="text-blue-400">function</span> <span className="text-yellow-300">main</span>()
                          </div>
                          <div className="flex">
                            <span className="text-gray-500 mr-1">2</span>
                            <span className="text-gray-400 ml-2">{'{'}</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-500 mr-1">3</span>
                            <span className="text-gray-400 ml-4">console.</span>
                            <span className="text-yellow-300">log</span>
                            <span className="text-white">(</span>
                            <span className="text-green-300">"Hello"</span>
                            <span className="text-white">)</span>
                          </div>
                          <div className="flex">
                            <span className="text-gray-500 mr-1">4</span>
                            <span className="text-gray-400 ml-2">{'}'}</span>
                          </div>
                        </div>
                        
                        {/* Blinking Cursor */}
                        <div className="absolute bottom-2 right-2 w-1 h-3 bg-green-400 animate-blink"></div>
                      </div>
                      
                      {/* Floating Coding Icons */}
                      <div className="absolute -top-1 -right-1">
                        <Icon icon="vscode-icons:file-type-typescript" className="w-3 h-3 text-blue-400 animate-float" />
                      </div>
                      <div className="absolute -bottom-1 -left-1">
                        <Icon icon="vscode-icons:file-type-python" className="w-3 h-3 text-yellow-400 animate-float-reverse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Coding Icon Ring */}
                  <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full animate-spin-slow">
                    {codingIcons.slice(0, 6).map((icon, index) => {
                      const angle = (360 / 6) * index;
                      const rad = (angle * Math.PI) / 180;
                      const radius = 12;
                      const left = 50 + radius * Math.sin(rad);
                      const top = 50 - radius * Math.cos(rad);
                      
                      return (
                        <div
                          key={index}
                          className="absolute group"
                          style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <Icon 
                            icon={icon} 
                            className="w-3 h-3 sm:w-3 sm:h-3 text-white/60 group-hover:text-green-400 transition-colors duration-300" 
                          />
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border border-green-500/30 animate-ping-slow"></div>
                </div>
              </div>

              {/* Orbital Rings - Larger with Proper Spacing */}
              <div className="absolute inset-0">
                
                {/* Inner Ring - 4 icons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 border border-purple-400/30 rounded-full animate-spin-slow">
                  {skillIcons.slice(0, 4).map((item, index) => {
                    const angle = (360 / 4) * index;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 48;
                    const left = 50 + radius * Math.sin(rad);
                    const top = 50 - radius * Math.cos(rad);

                    return (
                      <div
                        key={item.name}
                        className="absolute flex flex-col items-center group"
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="bg-black/60 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-purple-400/50 group-hover:border-purple-300/80 shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
                          <Icon
                            icon={item.icon}
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                          />
                        </div>
                        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-white font-medium whitespace-nowrap bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Middle Ring - 3 icons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border border-blue-400/30 rounded-full animate-spin-slow-reverse">
                  {skillIcons.slice(4, 7).map((item, index) => {
                    const angle = (360 / 3) * index;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 64;
                    const left = 50 + radius * Math.sin(rad);
                    const top = 50 - radius * Math.cos(rad);

                    return (
                      <div
                        key={item.name}
                        className="absolute flex flex-col items-center group"
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="bg-black/60 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-blue-400/50 group-hover:border-blue-300/80 shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                          <Icon
                            icon={item.icon}
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                          />
                        </div>
                        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-white font-medium whitespace-nowrap bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] border border-cyan-400/30 rounded-full animate-spin-slower">
                  {skillIcons.slice(7, 10).map((item, index) => {
                    const angle = (360 / 3) * index;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 80;
                    const left = 50 + radius * Math.sin(rad);
                    const top = 50 - radius * Math.cos(rad);

                    return (
                      <div
                        key={item.name}
                        className="absolute flex flex-col items-center group"
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="bg-black/60 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-cyan-400/50 group-hover:border-cyan-300/80 shadow-lg group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                          <Icon
                            icon={item.icon}
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                          />
                        </div>
                        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-white font-medium whitespace-nowrap bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

              <div className="absolute inset-0 pointer-events-none">
                {skillIcons.map((_, index) => {
                  const totalInRing = index < 4 ? 4 : index < 7 ? 3 : 3;
                  const ringIndex = index < 4 ? 0 : index < 7 ? 1 : 2;
                  const ringRadius = [48, 64, 80][ringIndex];
                  const angle = (360 / totalInRing) * (index % totalInRing);
                  const rad = (angle * Math.PI) / 180;
                  const left = 50 + ringRadius * Math.sin(rad);
                  const top = 50 - ringRadius * Math.cos(rad);

                  return (
                    <div
                      key={index}
                      className="absolute w-px h-10 bg-gradient-to-b from-white/0 via-green-400/30 to-white/0 opacity-30"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        transformOrigin: 'center bottom',
                      }}
                    ></div>
                  );
                })}
              </div>

              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-[8px] font-mono text-green-400/30 animate-float-slow"
                    style={{
                      left: `${10 + (i * 8)}%`,
                      top: `${20 + (i * 6)}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    {i % 2 === 0 ? '{ }' : '< />'}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </section>

      <div className="bg-amber-100 h-[300px] text-black flex items-center justify-center">
        <h2 className="text-3xl font-bold">Section 1</h2>
      </div>
      <div className="bg-amber-300 h-[300px] text-black flex items-center justify-center">
        <h2 className="text-3xl font-bold">Section 2</h2>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.9; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(8px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          33% { transform: translateY(-12px) translateX(4px) rotate(120deg); opacity: 0.5; }
          66% { transform: translateY(10px) translateX(-4px) rotate(240deg); opacity: 0.7; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 35s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-blink {
          animation: blink 1.2s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}