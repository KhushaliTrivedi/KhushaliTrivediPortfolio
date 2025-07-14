import { useEffect, useState } from 'react';

const DesktopSetup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Profile-related code to display on monitor
  const profileCode = [
    "// Khushali Trivedi - Developer with a purpose",
    "const khushali = {",
    "  name: 'Khushali Trivedi',",
    "  stack: ['Node.js', 'TypeScript'],",
    "  motto: 'Build clean, build smart',",
    "  email: 'work.khushali@yahoo.com'",
    "};"
  ];

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < profileCode.length) {
        if (currentChar < profileCode[currentLine].length) {
          setCurrentChar(prev => prev + 1);
        } else {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }, 500);
        }
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentLine(0);
          setCurrentChar(0);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [currentLine, currentChar, profileCode.length]);

  const programmingIcons = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', position: { top: '10%', left: '5%' } },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', position: { top: '20%', right: '5%' } },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', position: { top: '70%', left: '8%' } },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', position: { top: '60%', right: '10%' } },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', position: { top: '40%', left: '2%' } },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', position: { top: '80%', right: '5%' } },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', position: { top: '30%', right: '2%' } },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', position: { top: '50%', left: '0%' } },
  ];

  const renderCodeOnMonitor = () => {
    const lines = [];

    for (let i = 0; i <= currentLine && i < profileCode.length; i++) {
      const line = i === currentLine ? profileCode[i].substring(0, currentChar) : profileCode[i];
      lines.push(
        <div key={i} className="text-green-400 text-xs font-mono mb-1">
          {line}
          {i === currentLine && currentChar === profileCode[i].length && (
            <span className="animate-pulse text-white">|</span>
          )}
        </div>
      );
    }

    return lines;
  };

  return (
    <div className={`relative h-96 lg:h-[500px] overflow-visible transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>

      {/* Floating Programming Icons - positioned around the setup */}
      {programmingIcons.map((icon, index) => (
        <div
          key={icon.name}
          className={`absolute z-10 animate-float ${index > 3 ? 'hidden sm:block' : ''}`}
          style={{
            ...icon.position,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
            style={{
              backgroundColor: '#fff',
              boxShadow: `0 0 15px 40`,
            }}
            title={icon.name}
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="w-6 h-6"
              style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.2))' }}
            />
          </div>
        </div>
      ))}

      {/* Main Desktop Setup Container */}
      <div className="flex items-center justify-center h-full">
        <div className="relative">

          {/* Desk Surface */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-4 bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg shadow-2xl"></div>

          {/* Monitor Stand */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gray-700 rounded-b-lg"></div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-full"></div>

          {/* Monitor Frame */}
          <div className="relative w-80 h-52 bg-gray-900 rounded-lg shadow-2xl border-4 border-gray-800">

            {/* Monitor Screen */}
            <div className="w-full h-full bg-black rounded-md overflow-hidden p-3">

              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-xs ml-2">portfolio.js</span>
              </div>

              {/* Code Display */}
              <div className="overflow-y-auto h-40">
                {renderCodeOnMonitor()}
              </div>
            </div>

            {/* Monitor Brand Logo */}
            <div className="absolute bottom-4 right-3 text-gray-600 text-xs font-bold">KHUSHALI</div>
          </div>

          {/* CPU Tower */}
          <div className="absolute bottom-4 -right-20 w-16 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl">

            {/* Power Button */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* USB Ports */}
            <div className="absolute top-10 left-2 space-y-1">
              <div className="w-6 h-2 bg-gray-700 rounded-sm"></div>
              <div className="w-6 h-2 bg-gray-700 rounded-sm"></div>
            </div>

            {/* Ventilation Grilles */}
            <div className="absolute bottom-4 left-1 right-1 space-y-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-0.5 bg-gray-700 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Keyboard */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-lg">

            {/* Keyboard Keys */}
            <div className="grid grid-cols-12 gap-1 p-2">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-gray-600 rounded-sm hover:bg-gray-500 transition-colors"></div>
              ))}
            </div>

            {/* Space Bar */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-600 hover:bg-gray-500 rounded-sm"></div>
          </div>

          {/* Mouse */}
          <div className="absolute -bottom-6 -right-8 w-8 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full shadow-lg">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gray-600 rounded-full"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
          </div>

          {/* Speakers */}
          <div className="absolute top-8 -left-16 w-8 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full hover:bg-gray-500"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full hover:bg-gray-500"></div>
          </div>

          <div className="absolute top-8 -right-32 w-8 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full hover:bg-gray-500"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full hover:bg-gray-500"></div>
          </div>

          {/* Ambient Lighting Effects */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-purple-500/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Connecting Lines Between Icons (subtle) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {programmingIcons.slice(0, 4).map((_, index) => (
          <line
            key={index}
            x1="20%"
            y1="20%"
            x2="80%"
            y2="80%"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${index * 0.8}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default DesktopSetup;
