
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  category: string;
  gradient: string;
  coverImage: string;
  images: string[];
  liveDemo: string;
  repoLink: string;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme } = useTheme();

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-4xl max-h-[90vh] overflow-y-auto border ${theme === 'dark'
        ? 'bg-gray-900 text-white border-gray-700'
        : 'bg-white text-gray-900 border-gray-200'
        }`}>
        <style>{`
          .dialog-close-button {
            color: ${theme === 'dark' ? 'white' : 'black'} !important;
          }
        `}</style>

        <DialogHeader>
          <DialogTitle className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Slider */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {project.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentImageIndex
                      ? 'border-blue-400 scale-105'
                      : theme === 'dark'
                        ? 'border-gray-600 hover:border-gray-400'
                        : 'border-gray-300 hover:border-gray-500'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 text-sm rounded-full border ${theme === 'dark'
                ? 'bg-gray-800 text-gray-300 border-gray-700'
                : 'bg-gray-100 text-gray-700 border-gray-300'
                }`}>
                {project.category}
              </span>
              <div className={`h-1 w-16 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>Project Overview</h3>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {project.fullDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors ${theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-500'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-500'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>Key Features</h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {getProjectFeatures(project.title).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 w-full">
              <a href={project.repoLink} className='w-full' target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className={`flex-1 w-full ${theme === 'dark'
                    ? 'border-gray-600 hover:bg-gray-800'
                    : 'border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </a>
              <a
                href={project.liveDemo || undefined}
                className={`w-full ${!project.liveDemo ? 'pointer-events-none' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  disabled={!project.liveDemo}
                  className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 flex-1 w-full ${!project.liveDemo ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Helper function to get project-specific features
const getProjectFeatures = (title: string): string[] => {
  const features: Record<string, string[]> = {
    "Augmented Reality 3D Product Viewer": [
      "View 3D models directly in your physical space using AR",
      "Seamless AR activation via Scene Viewer, WebXR, and Quick Look",
      "No additional app install required—entirely browser-based",
      "Live rotation, zoom, and pan controls on 3D models",
      "Real-time lighting and shadow simulation for realistic rendering"
    ],
    "Sequelize ORM CRUD API": [
      "User and Post models with UUIDs",
      "CRUD endpoints with Sequelize transactions",
      "Model associations and eager loading",
      "RESTful API structure"
    ],
    "FPDI Image Alignment Utility": [
      "Proportional image scaling to fit PDF pages",
      "Maintains aspect ratio for accurate rendering",
      "Supports 9 alignment positions (e.g. top-left, center, bottom-right)",
      "Customizable margin with default value",
      "Seamless integration with FPDF and FPDI workflows",
      "Simplifies image placement within dynamic PDFs"
    ],
    "360° Panorama Viewer": [
      "View immersive 360° panoramic images with smooth interaction",
      "Supports multiple predefined panoramic images with thumbnails",
      "Instant upload and preview of custom panoramic images",
      "Responsive design with dynamic resizing for all screen sizes",
      "Auto-rotation and user-controlled navigation for enhanced experience",
      "Lightweight and easy integration using React and Pannellum.js"
    ],
    "Google Calendar Appointment Scheduler": [
      "Seamless appointment scheduling using Google Calendar API",
      "Integrated with Dialogflow for natural language interactions",
      "Converts and handles both 12-hour and 24-hour time formats",
      "Real-time availability check within defined business hours (10 AM – 4 PM IST)",
      "Event creation with summary, description, and timezone-specific scheduling",
      "Modular and maintainable Node.js backend using Express",
      "Secure integration using Google Service Account JSON credentials"
    ],
    "ONDC Testing API": [
      "Full CRUD APIs for store management in the ONDC network",
      "Syncs local PostgreSQL database with Storehippo (mystore) third-party APIs",
      "Seamless integration enabling real-time data consistency between local and third-party stores",
      "Built with Node.js and Express for scalable backend services",
      "Database management and migrations handled with Sequelize ORM",
      "Robust error handling and API validation for reliable operations",
      "Designed to serve as a bridge between local data and ONDC ecosystem"
    ],
    "Node Auth API": [
      "User signup and login with secure password hashing",
      "Token-based authentication using JSON Web Tokens (JWT)",
      "User data stored and managed in PostgreSQL database",
      "Database interactions handled with Sequelize ORM",
      "Simple and modular Express.js backend architecture",
      "Basic validation and error handling for authentication endpoints",
      "Foundation for building secure and scalable authentication systems"
    ]
  };

  return features[title] || [
    "Modern technology stack",
    "Scalable architecture",
    "User-friendly interface",
    "Performance optimized",
    "Security best practices"
  ];
};

export default ProjectModal;
