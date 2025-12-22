import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      icon: "🎨",
      title: "Frontend Development",
      color: "purple",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      color: "green",
      skills: ["Node.js", "Express.js", "Node Router", "RESTful APIs"]
    },
    {
      icon: "🛠️",
      title: "Database & Tools",
      color: "blue",
      skills: ["PostgreSQL", "SQL", "pgAdmin 4", "Postman", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-4 text-gray-900">Technical Skills</h2>
        <div className="text-center mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className={`skill-badge bg-${category.color}-100 text-${category.color}-700 px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-title {
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .skill-badge {
          transition: all 0.2s ease;
        }
        
        .skill-badge:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Skills;