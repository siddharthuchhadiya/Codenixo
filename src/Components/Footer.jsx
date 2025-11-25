import React from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const AdvancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps', 
    'UI/UX Design',
    'Cloud Solutions',
    'SEO Optimization',
    'Consulting'
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'GitHub', icon: '⚡', href: '#' },
    { name: 'Dribbble', icon: '🎨', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 backdrop-blur-xl border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                          radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float-reverse"></div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
  <div className="flex items-center space-x-3 mb-6">
    <img
      src="/public/assets/Group 4.png"
      alt="CODONIXO Logo"
      className="w-12 h-12 rounded-lg"
    />
  </div>
  <p className="text-gray-300 mb-6 leading-relaxed">
    Transforming ideas into exceptional digital experiences. We create innovative solutions 
    that drive business growth and deliver outstanding user experiences.
  </p>
  
  {/* Social Links */}
  <div className="flex space-x-4">
    {socialLinks.map((social, index) => (
      <a
        key={social.name}
        href={social.href}
        className="group p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-500 transform hover:scale-110 hover:rotate-12"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <span className="text-xl group-hover:scale-110 transition-transform duration-300 block">
          {social.icon}
        </span>
      </a>
    ))}
  </div>
</div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              Navigation
              <div className="ml-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {link.name}
                    <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              Services
              <div className="ml-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-purple-400/30 hover:bg-purple-500/10 transition-all duration-500 cursor-pointer"
                >
                  <span className="text-sm text-gray-300 group-hover:text-white group-hover:font-medium transition-all duration-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              Get In Touch
              <div className="ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  hello@codonixo.com
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300">
                  <Phone size={16} className="text-green-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <MapPin size={16} className="text-orange-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  123 Tech Street, City
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-sm text-gray-300 mb-3">Stay updated with our latest news</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>by CODONIXO</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">
                Cookie Policy
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-gray-300 group-hover:text-white text-sm">Back to Top</span>
              <ArrowUp size={16} className="text-gray-300 group-hover:text-white group-hover:animate-bounce" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} CODONIXO. All rights reserved. 
              <span className="text-blue-400 ml-2">Transforming Digital Experiences</span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default AdvancedFooter;