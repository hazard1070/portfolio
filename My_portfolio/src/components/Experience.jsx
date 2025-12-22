import React from 'react';

const Experience = () => {
  const experiences = [
    {
      icon: "fas fa-dumbbell",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Software Development Training",
      organization: "GYM Gap Year Program",
      period: "2025",
      description: "Participated in an intensive software development training program focusing on full-stack development, modern web technologies, and real-world project implementation. Gained hands-on experience in building scalable applications and working with industry-standard tools and frameworks."
    },
    {
      icon: "fas fa-university",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Bachelor's in Information Technology",
      organization: "University of Rwanda",
      period: "Current",
      description: "Pursuing a comprehensive degree in Information Technology with coursework in software engineering, database systems, web development, data structures, algorithms, and computer networks. Actively engaged in academic projects and building practical solutions using modern technologies."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-4 text-gray-900">Experience & Education</h2>
        <div className="text-center mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg card-hover ${index !== experiences.length - 1 ? 'mb-6' : ''}`}>
              <div className="flex items-start">
                <div className={`${exp.iconBg} p-4 rounded-full mr-6`}>
                  <i className={`${exp.icon} ${exp.iconColor} text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <p className={`${exp.iconColor} font-semibold mb-2`}>
                    {exp.organization}
                  </p>
                  <p className="text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
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
      `}</style>
    </section>
  );
};

export default Experience;