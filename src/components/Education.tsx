import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic foundation and qualifications in Artificial Intelligence & Machine Learning
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-gradient-to-br from-blue-50/70 to-indigo-50/70 border border-blue-100/80 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {edu.institution}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <MapPin size={15} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Calendar size={15} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 px-3 py-0.5 rounded-full text-xs font-semibold">
                          <Award size={14} />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h5 className="font-semibold text-gray-900 mb-3 text-sm">Key Highlights</h5>
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-2.5">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;