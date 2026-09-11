import React from 'react';
import { Calendar, Briefcase, CheckCircle2, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical industry experience across Agentic AI, GenAI pipelines, Machine Learning, and Data Analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Briefcase size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600">
                        {experience.company}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6 pb-4 border-b border-gray-100">
                  {experience.duration && (
                    <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium text-xs">
                      <Calendar size={14} />
                      <span>{experience.duration}</span>
                    </div>
                  )}
                  {experience.location && (
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <MapPin size={14} className="text-gray-400" />
                      <span>{experience.location}</span>
                    </div>
                  )}
                </div>

                {experience.highlights && experience.highlights.length > 0 ? (
                  <ul className="space-y-3 mb-6">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                )}
              </div>

              <div>
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                  Core Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-medium rounded-lg border border-slate-200/70 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;