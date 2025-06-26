
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-slate-600">
              Building expertise through hands-on experience
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>
            
            <div className="relative">
              {/* Timeline item */}
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                <div className="ml-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        AI/ML Engineer Intern
                      </h3>
                      <h4 className="text-xl font-semibold text-teal-600 mb-2">
                        Discovery Partners LLC
                      </h4>
                    </div>
                    <div className="text-slate-500 font-medium">
                      June 2024 - Present
                    </div>
                  </div>
                  
                  <div className="text-slate-600 mb-6">
                    <p className="mb-4">
                      Developing cutting-edge AI/ML features and contributing to full-stack applications 
                      that automate business processes and improve operational efficiency.
                    </p>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Implemented RAG (Retrieval-Augmented Generation) systems for intelligent document processing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Developed full-stack applications using Python, FastAPI, and modern frontend frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Contributed to invoice automation systems, improving process efficiency by 40%</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Deployed and managed applications on AWS cloud infrastructure</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {["Python", "AWS", "RAG", "FastAPI", "Machine Learning", "Full-Stack Development"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
