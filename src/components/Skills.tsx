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
      skills: ["AWS EC2", "CI/CD", "GitHub Actions", "Ubuntu Server", "GCP"]
    },
    {
      title: "Additional Technologies",
      color: "from-indigo-400 to-purple-500",
      skills: ["Three.js", "Socket.io", "Motoko", "Internet Computer Protocol", "DFINITY", "WEB3 Applications", "Google Dialogflow", "jQuery", "AJAX", "WordPress"]
    }
  ];

  // Mapping of skill names to icon URLs (devicon or similar)
  const skillIcons: Record<string, string> = {
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'RESTful APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg',
    'Microservices': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Mongoose ODM': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Sequelize ORM': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'EJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Responsive Design': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'AWS EC2': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Ubuntu Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
    'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'Three.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'Motoko': 'https://images.squarespace-cdn.com/content/v1/54437e21e4b048c830a0cff1/1618125502565-MJIQ7JNAOWSH1ADHPUM8/Motoko+logo+mark.png',
    'Internet Computer Protocol': 'https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1696514180',
    'DFINITY': 'https://cdn3d.iconscout.com/3d/premium/thumb/icp-coin-6400056-5272805.png',
    'WEB3 Applications': 'https://static.vecteezy.com/system/resources/previews/009/636/671/original/web-3-0-3d-illustration-icon-png.png',
    'Google Dialogflow': 'https://www.svgrepo.com/download/353648/dialogflow.svg',
    'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    'AJAX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  };

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
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:border-muted-foreground transition-colors duration-300 flex items-center gap-2"
                    >
                      {skillIcons[skill] && (
                        <img
                          src={skillIcons[skill]}
                          alt={skill + ' icon'}
                          className="w-5 h-5 inline-block align-middle"
                          loading="lazy"
                        />
                      )}
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
