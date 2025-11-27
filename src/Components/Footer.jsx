import React from 'react';
import { Heart, ArrowUp, Mail, Phone, } from 'lucide-react';
import "../App.css";

const AdvancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps', 
    'UI/UX Design',
    'Cloud Solutions'
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
      {/* Background Elements */}
      <div className="absolute top-0 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float-reverse"></div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/public/assets/Group 4.png"
                alt="CODONIXO Logo"
                className="w-full h-15 rounded-xl"
              />
            </div>
            <p className="text-gray-300 text-sm text-center md:text-left leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-center md:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-center md:text-left">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 text-lg">Connect</h4>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail size={14} className="text-blue-400" />
                <span className="text-gray-300 text-sm">codonixotechnologies@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={14} className="text-green-400" />
                <span className="text-gray-300 text-sm">+91 63510 71730</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={14} className="text-green-400" />
                <span className="text-gray-300 text-sm">+91 84601 21624</span>
                
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; {currentYear}</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>All rights reserved</span>
            </div>
            
            {/* Policies */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group"
            >
              <span className="text-gray-300 group-hover:text-white text-sm">Top</span>
              <ArrowUp size={14} className="text-gray-300 group-hover:text-white group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdvancedFooter;