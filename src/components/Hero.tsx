
import { useEffect, useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, Link, Linkedin } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import LaptopModel from './LaptopModel';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ['Full-Stack Developer', 'React.js Developer', 'Node.js Developer'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="text-lg text-blue-400 font-fira">&lt;hello&gt;</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              I'm <span className="text-gradient">Khushali Trivedi</span>
            </h1>

            <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center">
              <span className="text-muted-foreground">
                <TypingAnimation texts={roles} speed={100} deleteSpeed={50} pauseTime={2000} />
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Enthusiastic and driven engineering student with a strong foundation in Information Technology. Gained practical skills through academics, freelancing, and self-learning. Passionate about creating
              innovative solutions and gaining real-world experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 animate-glow"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-accent px-8 py-3 rounded-full transition-all duration-300"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/KhushaliTrivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-glass hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-foreground" />
              </a>
              <a
                href="mailto:work.khushali@yahoo.com"
                className="p-3 rounded-full bg-glass hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/khushali-trivedi-a09776229/"
                target='_blank'
                className="p-3 rounded-full bg-glass hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-foreground" />
              </a>
            </div>

            <div className="mt-8">
              <span className="text-lg text-blue-400 font-fira">&lt;/hello&gt;</span>
            </div>
          </div>

          {/* Right side - 3D Laptop */}
          <div className={`h-96 lg:h-[500px] transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />
              <Suspense fallback={null}>
                <LaptopModel />
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
