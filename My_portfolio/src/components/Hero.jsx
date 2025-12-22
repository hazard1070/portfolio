import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 text-center text-white fade-in">
        <div className="mb-6">
          <img 
            src="/fiston_image.jpg" 
            alt="Fiston Dushimimana" 
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
          Hello, I'm Fiston Dushimimana
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100">
          Software Engineer | Full-Stack Developer
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          I am a passionate software engineer with a strong foundation in full-stack development. 
          I specialize in building modern, scalable web applications using cutting-edge technologies. 
          With experience in both frontend and backend development, I create seamless digital experiences 
          that solve real-world problems.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #ffd700, #ff69b4, #9370db);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
