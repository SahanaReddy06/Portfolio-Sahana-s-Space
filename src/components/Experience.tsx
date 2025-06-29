import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Internships
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {experience.position}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-2">
                    {experience.company}
                  </h4>
                  
                  {experience.duration && (
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;