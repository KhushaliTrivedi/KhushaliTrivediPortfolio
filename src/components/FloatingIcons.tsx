
import { useEffect, useState } from 'react';

const FloatingIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programmingIcons = [
    { name: 'JavaScript', symbol: 'JS', color: '#F7DF1E', delay: '0s' },
    { name: 'TypeScript', symbol: 'TS', color: '#3178C6', delay: '0.5s' },
    { name: 'React', symbol: '⚛️', color: '#61DAFB', delay: '1s' },
    { name: 'Node.js', symbol: 'N', color: '#339933', delay: '1.5s' },
    { name: 'HTML', symbol: 'HTML', color: '#E34F26', delay: '2s' },
    { name: 'CSS', symbol: '#', color: '#1572B6', delay: '2.5s' },
    { name: 'Python', symbol: 'Py', color: '#3776AB', delay: '3s' },
    { name: 'Git', symbol: 'Git', color: '#F05032', delay: '3.5s' },
  ];

  return (
    <div className={`relative h-96 lg:h-[500px] overflow-hidden transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Main coding animation container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Central coding workspace */}
          <div className="w-80 h-60 bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="h-8 bg-gray-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-xs ml-2">code.js</span>
            </div>
            
            {/* Code content with typing effect */}
            <div className="p-4 font-mono text-sm">
              <div className="text-green-400 mb-2">
                <span className="animate-pulse">$ </span>
                <span className="animate-typing">Building amazing projects...</span>
              </div>
              <div className="text-blue-400 mb-1">const developer = {'{'};</div>
              <div className="text-yellow-300 ml-4">name: "Khushali",</div>
              <div className="text-yellow-300 ml-4">passion: "Full-Stack",</div>
              <div className="text-blue-400">{'};'}</div>
              <div className="mt-2">
                <span className="w-2 h-4 bg-white animate-pulse inline-block"></span>
              </div>
            </div>
          </div>

          {/* Floating programming language icons */}
          {programmingIcons.map((icon, index) => (
            <div
              key={icon.name}
              className="absolute animate-float"
              style={{
                animationDelay: icon.delay,
                animationDuration: `${4 + (index % 3)}s`,
                left: `${20 + (index % 4) * 80}px`,
                top: `${20 + (index % 3) * 60}px`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{
                  backgroundColor: icon.color,
                  boxShadow: `0 0 20px ${icon.color}30`,
                }}
                title={icon.name}
              >
                {icon.symbol}
              </div>
            </div>
          ))}

          {/* Animated connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {programmingIcons.map((_, index) => (
              <line
                key={index}
                x1={`${20 + (index % 4) * 80 + 32}`}
                y1={`${20 + (index % 3) * 60 + 32}`}
                x2={`${20 + ((index + 1) % 4) * 80 + 32}`}
                y2={`${20 + ((index + 1) % 3) * 60 + 32}`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: `${index * 0.5}s` }}
              />
            ))}
          </svg>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
    </div>
  );
};

export default FloatingIcons;
