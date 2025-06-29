import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: "1",
      degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
      institution: "BNM Institute of Technology",
      location: "Bangalore, India",
      duration: "2022 - 2026",
      grade: "CGPA: 9.04/10",
      description: "Currently pursuing an undergraduate degree in AIML",
      highlights: [
        "Specializing in AI/ML technologies",
        "Strong academic performance",
        "Active in technical projects, hackathons and workshops"
      ]
    },
    {
      id: "2",
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Nagarjuna College of Management Studies",
      location: "Karnataka, India",
      duration: "2020 - 2022",
      grade: "Percentage: 94%",
      description: "Completed with Science stream focusing on Physics, Chemistry, Mathematics, and Biology.",
      highlights: [
        "Science Stream: PCM with Biology",
        "Strong foundation in Mathematics",
        "Active in science exhibitions, Quiz and competitions"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey in Artificial Intelligence and Machine Learning
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-1">
                        {edu.institution}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award size={16} />
                          <span className="font-medium text-green-600">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {edu.description}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Highlights</h5>
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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