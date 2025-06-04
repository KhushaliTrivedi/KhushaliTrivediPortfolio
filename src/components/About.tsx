
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-fira text-lg">&lt;about&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="flex gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                I'm a passionate full-stack developer who successfully completed my Diploma to Degree (BE) program in Information Technology, proudly graduating with an impressive
                <span className="text-blue-400 font-semibold"> 8.44 CGPA</span>. My journey began with
                a diploma where I achieved a remarkable <span className="text-blue-400 font-semibold">9.17 CGPA</span>.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                With hands-on experience in leading development teams and working on cutting-edge technologies,
                I've contributed to WEB3 blockchain applications on the Internet Computer Protocol (ICP) and
                large-scale e-commerce platforms with multiple integrated sub-systems.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                I'm passionate about creating efficient, scalable solutions and staying at the forefront of
                technological innovation.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <span className="text-blue-400 font-fira text-lg">&lt;/about&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
