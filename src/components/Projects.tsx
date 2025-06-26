
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Management System",
      description: "A comprehensive full-stack application built with React Native and Node.js to help users manage budgets, track transactions, and achieve financial goals with real-time data updates and secure authentication.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express", "JWT Authentication"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Invoice Management Backend",
      description: "An intelligent Next.js-based backend system that automates invoice processing using AI for data extraction, featuring robust API design and seamless integration capabilities.",
      technologies: ["Next.js", "FastAPI", "AI/ML", "PostgreSQL", "REST APIs"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "A modern web-based chat platform using FastAPI and React with WebSocket integration for instant messaging, private conversations, and AI-powered sentiment analysis.",
      technologies: ["FastAPI", "React", "WebSocket", "Python", "Sentiment Analysis"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcasing innovative solutions built with modern technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-slate-300 hover:bg-slate-50"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 font-semibold"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
