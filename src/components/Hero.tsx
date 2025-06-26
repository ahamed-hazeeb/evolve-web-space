
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">[YN]</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">[Your Name]</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in delay-200">
            Software Engineering Student & AI/ML Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto animate-fade-in delay-300">
            Building innovative solutions with Python, React Native, FastAPI, Node.js, and Machine Learning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
