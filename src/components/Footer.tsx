
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">[Your Name]</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Software Engineering Student & AI/ML Enthusiast building innovative solutions 
              with modern technologies.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
            >
              <span className="text-sm font-bold">@</span>
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              © 2025 [Your Name]. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
