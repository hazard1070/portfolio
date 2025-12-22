import React from 'react';

const Footer = () => {
  return (
    <footer className="gradient-bg text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2025 Fiston Dushimimana. All rights reserved.</p>
        <p className="text-purple-200">Built with passion using React, Node.js, and Tailwind CSS</p>
      </div>

      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>
    </footer>
  );
};

export default Footer;