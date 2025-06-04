
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  const projects = [
    {
      title: "Augmented Reality 3D Product Viewer",
      description: "This project is a React-based AR-enabled 3D model viewer built using the @google/model-viewer web component. It provides an immersive and interactive way for users to explore 3D models and visualize them in their real-world environment using Augmented Reality (AR) directly from the browser—no app download required.",
      fullDescription: "This interactive 3D product viewer leverages modern web technologies to deliver a high-impact, AR-enabled experience for end users. Built with React and TypeScript, and powered by Google's @model-viewer, the application allows users to interact with 3D models in real time and place them in their physical space using Augmented Reality. A dynamic color variant system updates the model's appearance on the fly using WebGL-based material controls, providing a photorealistic and intuitive product browsing experience. The app intelligently detects device capabilities to enable AR via Scene Viewer (Android), Quick Look (iOS), or WebXR. Ideal for e-commerce and digital product demos, this tool elevates product visualization and supports informed purchasing decisions through immersive interaction.",
      techStack: ["React.js", "TypeScript", "Three.js", "@google/model-viewer", "WebXR"],
      category: "Augmented Reality",
      gradient: "from-purple-500 to-blue-500",
      featured: true,
      coverImage: "src/assets/Human GLB screenshot.png",
      images: [
        "src/assets/Human GLB screenshot.png",
        "src/assets/ARView.jpg",
      ],
      liveDemo: "https://react-ar-model-viewer.vercel.app/",
      repoLink: "https://github.com/KhushaliTrivedi/react-ar-model-viewer"
    },
    {
      title: "360° Panorama Viewer",
      description: "A React-based lightweight 360° panorama viewer that allows viewing predefined panoramic images and uploading custom panoramic images for instant preview using Pannellum.js. It features a responsive thumbnail drawer for easy navigation and supports smooth auto-rotation and user interaction for an immersive experience.",
      fullDescription: "This 360° Panorama Viewer is a user-friendly React component built with Pannellum.js to render immersive equirectangular panoramic images. It features a toggleable thumbnail drawer for quick image selection and supports uploading your own panoramic images, which are rendered immediately using a temporary base64 URL. The viewer handles dynamic resizing and auto-rotation for a smooth user experience. Ideal for projects requiring interactive panoramic content with easy integration and minimal dependencies.",
      techStack: ["React.js", "Pannellum.js", "JavaScript", "CSS", "Tailwind", "Typescript"],
      category: "React JS",
      gradient: "from-green-500 to-teal-500",
      featured: true,
      repoLink: "https://github.com/KhushaliTrivedi/react-360-panorama",
      liveDemo: "https://react-360-panorama.vercel.app/",
      coverImage: "src/assets/360View.png",
      images: [
        "src/assets/360View.png",
      ]
    },
    {
      title: "Sequelize ORM CRUD API",
      description: "A simple backend API using Sequelize ORM and Express.js for managing Users and Posts with transactional integrity. A simple backend API using Sequelize ORM and Express.js for managing Users and Posts with transactional integrity.",
      fullDescription: "This backend project demonstrates a clean and effective way to implement RESTful APIs using Sequelize ORM with Express.js. It features complete CRUD functionality for Users and Posts, ensuring data consistency by leveraging Sequelize transactions to maintain atomic operations. The API supports relational data handling with associations (Users and their Posts), making it a solid example for learning database interactions in Node.js environments. Compatible with PostgreSQL and MySQL, this project serves as a foundational backend service for scalable applications, focusing on best practices for error handling, transaction management, and API design.",
      techStack: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "MySQL"],
      category: "SQL Database",
      gradient: "from-blue-500 to-cyan-500",
      featured: false,
      repoLink: "https://github.com/KhushaliTrivedi/Sequelize-ORM",
      liveDemo: null,
      coverImage: "src/assets/NodeSequelize.jpg",
      images: [
        'src/assets/NodeSequelize.jpg'
      ]
    },
    {
      title: "FPDI Image Alignment Utility Function",
      description: "A PHP utility for scaling and aligning images proportionally within PDF pages using FPDF/FPDI. Supports multiple alignment positions and maintains aspect ratio for accurate rendering.",
      fullDescription: "fpdi-image-align is a handy PHP utility designed to simplify the process of scaling images proportionally to fit within PDF pages, using the popular FPDF and FPDI libraries. It supports nine common alignment options such as top-left, center, bottom-right, and more, ensuring precise placement of images within PDFs. The tool maintains the image's aspect ratio to avoid distortion and includes customizable margins (defaulting to 10 units). Ideal for developers working with dynamic PDFs who need flexible and accurate image positioning within documents, this utility integrates seamlessly with existing FPDI workflows, making PDF generation more robust and visually consistent.",
      techStack: ["PHP", "FPDF", "FPDI"],
      category: "Core PHP",
      gradient: "from-orange-500 to-red-500",
      featured: false,
      repoLink: "https://github.com/KhushaliTrivedi/fpdi-image-align",
      liveDemo: null,
      coverImage: "src/assets/FPDF.jpg",
      images: [
        "src/assets/FPDF.jpg"
      ]
    },
    {
      title: "Google Calendar Appointment Scheduler",
      description: "An intelligent Node.js webhook service for scheduling appointments using Google Calendar. Integrated with Dialogflow to enable natural language appointment booking and availability checking.",
      fullDescription: "This Appointment Scheduler is a Node.js-based application integrated with Google Calendar and Dialogflow. It allows users to book appointments through conversational interfaces. The system checks existing events, ensures bookings fall within operating hours (10 AM to 4 PM IST), and handles overlapping appointments by offering alternative time slots. Using a Google service account and Calendar API, it inserts and retrieves events seamlessly. It also includes intelligent context management for user sessions, time conversions between 12 and 24-hour formats, and robust fallback logic for unavailable slots. Ideal for businesses looking to automate appointment handling with real-time calendar integration.",
      techStack: ["Node.js", "Express", "Google Calendar API", "Dialogflow"],
      category: "Backend",
      gradient: "from-pink-500 to-rose-500",
      featured: false,
      repoLink: "https://github.com/KhushaliTrivedi/appointmentScheduler",
      liveDemo: null,
      coverImage: "src/assets/AppointmentScheduler.png",
      images: [
        "src/assets/AppointmentScheduler.png"
      ]
    },
    {
      title: "ONDC Testing API",
      description: "Basic CRUD APIs for Store management on the ONDC network, integrating mystore (Storehippo) third-party APIs and syncing with a local PostgreSQL database using Sequelize.",
      fullDescription: "This project provides a Node.js and Express backend API for managing stores within the ONDC network. It features full CRUD functionality for store data, syncing changes with Storehippo's mystore API to ensure data consistency across platforms. The local PostgreSQL database is managed via Sequelize ORM, providing robust data handling and migrations. This API serves as a bridge between local store data and the ONDC ecosystem, facilitating seamless third-party integration and real-time synchronization.",
      techStack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Storehippo API"],
      category: "Backend",
      gradient: "from-yellow-500 to-orange-500",
      featured: false,
      repoLink: "https://github.com/KhushaliTrivedi/ondc_testing_api",
      liveDemo: null,
      coverImage: "src/assets/StoreHippo.avif",
      images: [
        "src/assets/StoreHippo.avif"
      ]
    },
    {
      "title": "Node Auth API",
      "description": "Basic user authentication API with signup and login functionality using JWT, built with Node.js, Express, PostgreSQL, and Sequelize.",
      "fullDescription": "This project implements a simple authentication backend using Node.js and Express. It provides APIs for user signup and login, storing user credentials securely in a PostgreSQL database managed by Sequelize ORM. Authentication is handled via JSON Web Tokens (JWT), enabling token-based secure access to protected routes. The project serves as a foundational template for implementing user authentication in Node.js applications with a clean and modular structure.",
      "techStack": ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"],
      "category": "Backend",
      "gradient": "from-blue-500 to-indigo-600",
      "featured": false,
      "repoLink": "https://github.com/KhushaliTrivedi/node_auth",
      "liveDemo": null,
      "coverImage": "src/assets/AuthFlow.jpeg",
      "images": [
        "src/assets/NodeAuth.jpg",
        "src/assets/AuthFlow.jpeg",
      ]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-fira text-lg">&lt;projects&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A showcase of my technical expertise through various projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-glass-card rounded-lg overflow-hidden hover:bg-opacity-10 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="relative">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <span className="text-sm text-gray-400 mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={project.repoLink} className='w-full' target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 w-full hover:bg-gray-800 flex-1 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={undefined}
                      className={`w-full ${!project.liveDemo ? 'pointer-events-none' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r w-full ${project.gradient} hover:opacity-90 flex-1 text-xs`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                      >
                        <Link className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-glass-card rounded-lg overflow-hidden hover:bg-opacity-10 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="relative">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-400 mb-2 block">{project.category}</span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-gray-400 text-xs">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a href={project.repoLink} className='w-full' target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 w-full hover:bg-gray-800 flex-1 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={undefined}
                      className={`w-full ${!project.liveDemo ? 'pointer-events-none' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r w-full ${project.gradient} hover:opacity-90 flex-1 text-xs`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                      >
                        <Link className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3"
            >
              <a
                href="https://github.com/KhushaliTrivedi?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Explore More
                <Link className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="text-center mt-16">
            <span className="text-blue-400 font-fira text-lg">&lt;/projects&gt;</span>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;
