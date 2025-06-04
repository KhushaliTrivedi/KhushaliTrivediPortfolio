
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Slang Media",
      type: "Hybrid - Morbi (Gujarat)",
      period: "July 2024 - April 2025",
      color: "from-blue-500 to-cyan-500",
      responsibilities: [
        "Developed responsive user interfaces using React, Tailwind CSS, and JavaScript",
        "Built RESTful APIs and microservices with Node.js and Express.js",
        "Integrated with MongoDB and PostgreSQL for efficient data handling",
        "Managed deployments on GreenGeeks, Hostinger, and VPS environments",
        "Implemented CI/CD pipelines using GitHub Actions",
        "Configured Ubuntu servers on AWS EC2 instances"
      ]
    },
    {
      title: "Development Team Lead",
      company: "QuadB Technologies",
      type: "Remote",
      period: "Jan 2024 - June 2024",
      color: "from-purple-500 to-pink-500",
      responsibilities: [
        "Managed six integrated sub-platforms: Buyer, Seller, Affiliate, Support Admin, Seller Hub, Ticketing System",
        "Led development of multiple projects including WEB3 blockchain applications",
        "Built applications on Internet Computer Protocol (ICP) by DFINITY",
        "Developed large-scale WEB2 E-commerce platform",
      ]
    },
    {
      title: "Junior Node.js Developer",
      company: "QuadB Technologies",
      type: "Remote",
      period: "May 2023 - Dec 2023",
      color: "from-green-500 to-teal-500",
      responsibilities: [
        "Worked on backend of large-scale Web2 e-commerce platform",
        "Developed new features and optimized performance",
        "Built RESTful APIs and server-side applications",
        "Integrated databases using Sequelize ORM with PostgreSQL",
        "Implemented efficient routing following MVC pattern"
      ]
    },
    {
      title: "Freelancer",
      company: "",
      type: "",
      period: "2020 - 2022",
      color: "from-orange-500 to-red-500",
      responsibilities: [
        "Assisted with a range of industry-based projects, including content writing, data organization and uploads, as well as dynamic web applications for brands such as Catloga, Exocera Porcelanato, Kara Ceramic, Himsun Ceramic, Eleone, and Uni-Min India (offline)",
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-fira text-lg">&lt;experience&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              Professional <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-glass-card rounded-lg p-6 hover:bg-opacity-10 transition-all duration-300 hover:scale-105">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </div>
                        <div className="text-gray-400 text-sm">{exp.type}</div>
                        <div className="text-blue-400 font-fira text-sm">{exp.period}</div>
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-300 text-left text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900`}></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <span className="text-blue-400 font-fira text-lg">&lt;/experience&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
