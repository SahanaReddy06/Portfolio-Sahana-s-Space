import React from 'react';
import { MapPin, Mail, Phone, Globe2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
              <Sparkles size={16} className="text-blue-600" />
              <span>AI/ML & GenAI Enthusiast</span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Languages */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-gray-900 font-semibold mb-3">
                <Globe2 size={18} className="text-purple-600" />
                <span>Languages Known</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 text-sm font-medium rounded-full"
                  >
                    {lang.name} <span className="text-purple-400 text-xs">({lang.proficiency})</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={20} className="text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={20} className="text-blue-600" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={20} className="text-blue-600" />
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-52 h-52 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-100 bg-gray-100 flex items-center justify-center">
                  <img
                    src="/WhatsApp Image 2025-05-07 at 16.30.25_a035a9b4.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image path differs
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-blue-600 font-semibold text-base mb-2">
                  {personalInfo.title}
                </p>
                <p className="text-gray-500 text-sm">
                  {personalInfo.location}
                </p>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;