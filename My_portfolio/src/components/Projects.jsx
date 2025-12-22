import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "StudentSync - Student Management System",
      subtitle: "Full-Stack Web Application",
      description: "A comprehensive student management system with CRUD operations, real-time search, profile management, and pagination. Built with modern web technologies and deployed on cloud platforms.",
      icon: "👨‍🎓",
      color: "from-green-600 to-emerald-600",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "RESTful API"],
      liveUrl: "https://my-stude-system-app.netlify.app",
      githubFrontend: "https://github.com/hazard1070/student-management-frontend",
      githubBackend: "https://github.com/hazard1070/student-management-backend",
      features: [
        "Complete CRUD operations for student records",
        "Real-time search and filtering",
        "Profile picture upload support",
        "Responsive design for all devices",
        "Pagination for large datasets"
      ]
    },
    {
      title: "EduMove - Intelligent Transport System",
      subtitle: "Intelligent Transport System",
      description: "EduMove is an Intelligent Transport System (ITS) designed specifically for boarding students in Rwanda. This innovative solution streamlines transportation management for educational institutions, providing real-time tracking, route optimization, and safety features for student transportation.",
      icon: "🚌",
      color: "from-purple-600 to-blue-600",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "RESTful API"],
      liveUrl: "https://edu-move.vercel.app/",
      githubUrl: "https://github.com/hazard1070"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-4 text-gray-900">Featured Projects</h2>
        <div className="text-center mb-12"></div>
        
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl card-hover">
              <div className="md:flex">
                <div className={`md:w-2/5 bg-gradient-to-br ${project.color} p-12 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">{project.icon}</div>
                    <h3 className="text-3xl font-bold">{project.title.split(' - ')[0]}</h3>
                    <p className="text-purple-100 mt-2">{project.subtitle}</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 text-sm">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                    
                    {project.githubFrontend ? (
                      <>
                        <a 
                          href={project.githubFrontend} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition flex items-center gap-2"
                        >
                          <i className="fab fa-github"></i>
                          Frontend Code
                        </a>
                        <a 
                          href={project.githubBackend} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition flex items-center gap-2"
                        >
                          <i className="fab fa-github"></i>
                          Backend Code
                        </a>
                      </>
                    ) : (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition flex items-center gap-2"
                      >
                        <i className="fab fa-github"></i>
                        View Code
                      </a>
                    )}
                  </div>
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
        
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

export default Projects;