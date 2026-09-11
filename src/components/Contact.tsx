import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, MessageCircle, Briefcase, Phone, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const iconMap = {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Looking for opportunities to apply AI, GenAI, and software engineering skills to solve impactful real-world challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Direct Message</h3>
            
            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center text-green-800 font-medium">
                Thank you! Your message has been sent. I'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="e.g. John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Discuss an opportunity, project, or collaboration..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Direct Contact Channels
              </h3>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-blue-50 text-gray-800 hover:text-blue-700 rounded-xl transition-all border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Email Address</div>
                    <div className="text-sm font-semibold">{personalInfo.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-blue-50 text-gray-800 hover:text-blue-700 rounded-xl transition-all border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Phone Number</div>
                    <div className="text-sm font-semibold">{personalInfo.phone}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/918867037662`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-green-50 text-gray-800 hover:text-green-700 rounded-xl transition-all border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">WhatsApp</div>
                    <div className="text-sm font-semibold">+91 8867037662</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
                Connect on Professional Networks
              </h4>
              
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Github;
                  
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white rounded-xl flex items-center gap-2 text-xs font-semibold transition-all shadow-xs"
                    >
                      <IconComponent size={16} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Open to Work - Highlighted Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 md:p-10 text-white shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} className="text-yellow-300" />
                <span>Actively Seeking Roles</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                Open for Opportunities
              </h3>
              <p className="text-base text-blue-100 leading-relaxed mb-6">
                Open for full-time and trainee opportunities in <strong>AI/ML Engineering, Generative AI & RAG Development, Backend Engineering (Python/FastAPI)</strong>, and <strong>Data Analytics</strong>.
              </p>
              <a
                href={`mailto:${personalInfo.email}?subject=Opportunity%20Discussion`}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
              >
                <Briefcase size={18} />
                <span>Discuss Opportunities</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;