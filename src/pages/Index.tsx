
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import EducationCertifications from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <EducationCertifications />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
