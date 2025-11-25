import React from 'react';
import { Code, Palette, Smartphone, Cloud, Search, Zap, Shield, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and scalability.",
      features: ["Responsive Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and Flutter for seamless iOS and Android experiences.",
      features: ["Cross-Platform", "Native Performance", "Offline Capability", "App Store Deployment"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality for exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.",
      features: ["Cloud Migration", "Serverless Architecture", "DevOps", "Cost Optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility and drive organic traffic growth.",
      features: ["Technical SEO", "Content Strategy", "Keyword Research", "Analytics"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed optimization services to enhance user experience and improve conversion rates.",
      features: ["Speed Analysis", "Code Optimization", "Caching Strategies", "CDN Implementation"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your applications and data from modern threats.",
      features: ["Security Audit", "Penetration Testing", "Data Encryption", "Compliance"],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting",
      description: "Strategic technology consulting to help you make informed decisions and achieve your business goals.",
      features: ["Tech Strategy", "Architecture Review", "Team Training", "Project Planning"],
      color: "from-gray-500 to-slate-600"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions to transform your ideas into exceptional digital experiences
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can bring your vision to life with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}