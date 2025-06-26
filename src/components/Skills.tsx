
const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Python", "scikit-learn", "TensorFlow", "RAG (Retrieval-Augmented Generation)"],
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "Frontend Development", 
      skills: ["React Native", "React", "Tailwind CSS", "JavaScript", "TypeScript"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      skills: ["FastAPI", "Node.js", "Express", "REST APIs", "WebSocket"],
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "SQLite", "Supabase", "AWS", "Git", "GitHub"],
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
