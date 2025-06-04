
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Backend Development",
      color: "from-green-400 to-blue-500",
      skills: ["Node.js", "Express.js", "PHP", "RESTful APIs", "Microservices"]
    },
    {
      title: "Frontend Development",
      color: "from-blue-400 to-purple-500",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Database",
      color: "from-purple-400 to-pink-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose ODM", "Sequelize ORM"]
    },
    {
      title: "Styling & UI",
      color: "from-pink-400 to-red-500",
      skills: ["Tailwind CSS", "Bootstrap", "EJS", "Responsive Design"]
    },
    {
      title: "Cloud & DevOps",
      color: "from-cyan-400 to-blue-500",
      skills: ["AWS EC2", "CI/CD", "GitHub Actions", "Ubuntu Server"]
    },
    {
      title: "Additional Technologies",
      color: "from-indigo-400 to-purple-500",
      skills: ["Three.js", "Socket.io", "Motoko", "Internet Computer Protocol", "DFINITY", "WEB3 Applications", "Google Dialogflow", "jQuery", "AJAX", "WordPress"]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-fira text-lg">&lt;skills&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build scalable,
              efficient applications across the full development stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-glass-card rounded-lg p-6 hover:bg-opacity-10 transition-all duration-300 hover:scale-105 hover:rotate-1"
              >
                <div className="mb-6">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-3`}>
                    {category.title}
                  </h3>
                  <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:border-muted-foreground transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <span className="text-blue-400 font-fira text-lg">&lt;/skills&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
