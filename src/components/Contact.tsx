
import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "khushali Trivedi",
      href: "https://github.com/KhushaliTrivedi",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "work.khushali@yahoo.com",
      href: "mailto:work.khushali@yahoo.com",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: Linkedin,
      label: "Linkedin",
      value: "khushali Trivedi",
      href: "https://www.linkedin.com/in/khushali-trivedi-a09776229/",
      color: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-fira text-lg">&lt;contact&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              As a recent graduate, I'd love to contribute and help bring your ideas to life. Let’s connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, innovative projects,
                  or simply having a conversation about technology, feel free to reach out!
                </p>
              </div>

              <div className="bg-glass-card rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Current Status</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for opportunities</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Actively seeking full-time positions and exciting freelance projects
                </p>
              </div>
            </div>

            <div className="space-y-6 flex flex-col justify-end">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-glass-card rounded-lg hover:bg-opacity-10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <span className="text-blue-400 font-fira text-lg">&lt;/contact&gt;</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 pt-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Khushali Trivedi. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
