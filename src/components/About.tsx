
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a final-year B.Tech student in Software Technology based in Sri Lanka, 
                currently working as an AI/ML Engineer intern at Discovery Partners LLC. 
                My passion lies in building innovative solutions that bridge the gap between 
                cutting-edge technology and real-world problems.
              </p>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With expertise in full-stack development and machine learning, I enjoy 
                creating applications that not only function seamlessly but also provide 
                meaningful value to users. My experience spans from developing mobile 
                applications with React Native to implementing AI solutions with Python and TensorFlow.
              </p>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I'm actively seeking opportunities as a Software Engineer or AI/ML Engineer 
                where I can contribute to impactful projects and continue growing as a developer.
              </p>
              
              <Button 
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('#', '_blank')}
              >
                Download Resume
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=320&fit=crop&crop=faces" 
                  alt="Professional headshot placeholder"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
