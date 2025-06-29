import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
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
            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-4">
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
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                  <img
                    src="/WhatsApp Image 2025-06-27 at 20.47.43_c92508c9.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  {personalInfo.title}
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