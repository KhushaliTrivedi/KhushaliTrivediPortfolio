import { Book, Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EducationCertifications = () => {
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

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const education = [
        {
            degree: "Bachelor of Engineering in Information Technology (Diploma to Degree)",
            institution: "Lukhdhirji Engineering College, Morbi [GTU]",
            period: "2022 - 2025",
            grade: "8.44 / 10 CGPA",
        },
        {
            degree: "Diploma in Information Technology",
            institution: "Lukhdhirji Engineering College, Morbi [GTU]",
            period: "2019 - 2022",
            grade: "9.17 / 10 CGPA",
        },
        {
            degree: "SSC - GSEB Board",
            institution: "Kalyan High School, Rajkot",
            period: "2018 - 2019",
            grade: "81.67%",
        },
    ];

    const certifications = [
        {
            title: "The Web Developer Bootcamp 2022",
            platform: "Udemy",
            date: "19 Oct. 2022",
            link: "https://drive.google.com/file/d/1dMz_iwVsFNbgXV5i2vLLaZSV5EhGVlTe/view?usp=drive_link",
        },
        {
            title: "Build A Custom Dynamic Blog with PHP, MySQL & jQuery",
            platform: "Udemy",
            date: "29 Nov. 2021",
            link: "https://drive.google.com/file/d/1vIbzOxbz7cwiLGkcHdLMq25JR9DBb_nl/view?usp=drive_link",
        },
    ];

    return (
        <section id="education" ref={ref} className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
                    <div className="text-center mb-16">
                        <span className="text-blue-400 font-fira text-lg">&lt;education&gt;</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                            Education & <span className="text-gradient">Certifications</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Education */}
                        <div className="bg-glass-card rounded-lg p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
                                <Book className="text-blue-400" />
                                Education
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-blue-500 pl-4">
                                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                                        <p className="text-gray-400">{edu.institution}</p>
                                        <p className="text-blue-400 font-semibold">{edu.period} | {edu.grade}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-glass-card rounded-lg p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-purple-500 flex items-center gap-2">
                                <Code className="text-purple-500" />
                                Certifications
                            </h3>
                            <div className="space-y-6">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="border-l-2 border-purple-500 pl-4">
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                            <h4 className="text-lg font-semibold text-white hover:underline">{cert.title}</h4>
                                        </a>
                                        <p className="text-gray-400">{cert.platform}</p>
                                        <p className="text-purple-400 font-semibold">{cert.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <span className="text-blue-400 font-fira text-lg">&lt;/education&gt;</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationCertifications;
