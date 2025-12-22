import React from 'react';

const About = () => {
  const quickFacts = [
    {
      icon: "fas fa-graduation-cap",
      title: "Education",
      details: ["Bachelor's in Information Technology", "University of Rwanda"]
    },
    {
      icon: "fas fa-code",
      title: "Specialization",
      details: ["Full-Stack Web Development"]
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      details: ["Kigali, Rwanda"]
    },
    {
      icon: "fas fa-laptop-code",
      title: "Training",
      details: ["GYM Gap Year Program 2025"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
         <h2 className="text-4xl font-bold text-left mb-4 text-gray-900">About Me</h2>
        <div className="text-center mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a dedicated software engineer currently pursuing my Bachelor's degree in Information Technology 
              at the University of Rwanda. My journey in technology has been driven by curiosity and a passion for 
              creating innovative solutions that make a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through my academic projects and hands-on training, I've developed strong expertise in full-stack 
              development, working with modern frameworks and tools. I'm particularly interested in building 
              intelligent systems that leverage technology to solve complex challenges in education, transportation, 
              and beyond.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in continuous learning and staying updated with the latest industry trends. When I'm not 
              coding, I enjoy contributing to open-source projects and exploring new technologies that push the 
              boundaries of what's possible.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Facts</h3>
            <div className="space-y-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-start">
                  <i className={`${fact.icon} text-purple-600 text-2xl mr-4 mt-1`}></i>
                  <div>
                    <p className="font-semibold text-gray-800">{fact.title}</p>
                    {fact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      `}</style>
    </section>
  );
};

export default About;