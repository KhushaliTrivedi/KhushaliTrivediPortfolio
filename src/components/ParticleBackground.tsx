
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const particleCount = 50;
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
