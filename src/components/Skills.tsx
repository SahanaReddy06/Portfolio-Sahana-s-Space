import React from 'react';
import { Code2, FileCode, Atom, Server, Terminal, Cloud, Container, Database, Globe, Activity, BarChart3, BrainCircuit, GitBranch, Award, BookOpen, Users, Zap, Crown, Target, GraduationCap, Trophy } from 'lucide-react';
import { skills } from '../data/portfolio';

const iconMap = {
  Code2,
  FileCode,
  Atom,
  Server,
  Terminal,
  Cloud,
  Container,
  Database,
  Globe,
  Activity,
  BarChart3,
  BrainCircuit,
  GitBranch,
  Award,
  BookOpen,
  Users,
  Zap,
  Crown,
  Target,
  GraduationCap,
  Trophy
};

const Skills = () => {
  const achievements = [
    {
      title: "Karnataka State 10th Grade",
      description: "3rd Place",
      icon: "Award"
    },
    {
      title: "School Captain",
      description: "Leadership Role",
      icon: "Crown"
    }
  ];

  const hackathons = [
    {
      title: "Texaccelerate",
      location: "BITS Pilani, Hyderabad",
      icon: "Users"
    },
    {
      title: "Virtuvation",
      location: "BNMIT, Bangalore",
      icon: "Users"
    },
    {
      title: "UiPath",
      location: "BNMIT, Bangalore",
      icon: "Users"
    }
  ];

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Pantech.AI",
      icon: "Award"
    },
    {
      title: "Data Science",
      issuer: "Infosys SpringBoard",
      icon: "Award"
    },
    {
      title: "Big Data Essentials",
      issuer: "Infosys SpringBoard",
      icon: "Award"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={skill.name}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    
                    <h3 className="text-sm font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements, Hackathons, and Certifications */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => {
                const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                        <IconComponent size={24} className="text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-yellow-600 font-medium">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Hackathons</h3>
            <div className="space-y-3">
              {hackathons.map((hackathon, index) => {
                const IconComponent = iconMap[hackathon.icon as keyof typeof iconMap];
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                        <IconComponent size={24} className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{hackathon.title}</h4>
                        <p className="text-purple-600 font-medium">{hackathon.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => {
                const IconComponent = iconMap[cert.icon as keyof typeof iconMap];
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                        <IconComponent size={24} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                        <p className="text-green-600 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;