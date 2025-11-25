import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Auto hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@codonixo.com",
      description: "Send us an email anytime",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "hover:from-purple-600 hover:to-indigo-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon to Fri from 9am to 6pm",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Tech Street, City",
      description: "Visit our office location",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-600 hover:to-emerald-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      details: "Start Chat",
      description: "24/7 customer support",
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-600 hover:to-red-600"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects range from 4-12 weeks depending on complexity and requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages for all our clients."
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern technologies including React, Node.js, Python, and cloud platforms."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We seamlessly integrate with existing teams and workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">Message sent successfully!</span>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="ml-4 hover:bg-green-600 rounded-full p-1 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to accelerate your business growth? Let's discuss how our technology solutions can transform your vision into reality.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer`}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {method.title}
                  </h3>
                  <p className={`text-lg font-bold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-1`}>
                    {method.details}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{schedule.day}</span>
                    <span className="text-gray-800 dark:text-gray-200 font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}