import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    // Initialize EmailJS
    if (window.emailjs) {
      window.emailjs.init("cq30ggYdvSF9UZaOI");
    }
  }, []);

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "fistondushimi@gmail.com",
      link: "mailto:fistondushimi@gmail.com"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "@hazard1070",
      link: "https://github.com/hazard1070"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/fiston-dushimimana"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded');
      }

      await window.emailjs.send('service_53i7bxf', 'template_fd3bcie', formData);
      
      setMessage({
        text: '✓ Message sent successfully! I will get back to you soon.',
        type: 'success'
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setMessage({
        text: '✗ Failed to send message. Please email me directly at fistondushimi@gmail.com',
        type: 'error'
      });
      
      setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 8000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-4 text-gray-900">Let's Connect</h2>
        <div className="text-center mb-12"></div>
        
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto text-center">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you want to collaborate or just say hi, feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link} 
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl card-hover"
            >
              <i className={`${method.icon} text-4xl text-purple-600 mb-4`}></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
              <p className="text-gray-600 break-all">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-12 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition inline-flex items-center gap-2 disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
            
            {message.text && (
              <div className={`text-center p-4 rounded-lg font-semibold ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {message.text}
              </div>
            )}
          </form>
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

export default Contact;