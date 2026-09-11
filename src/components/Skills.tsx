import React from 'react';
import { 
  Code2, FileCode, Server, Terminal, Cloud, Container, Database, Globe, 
  Activity, BarChart3, BrainCircuit, GitBranch, Award, BookOpen, 
  Zap, Trophy, Eye, Layers, Brain, CheckCircle, Sparkles
} from 'lucide-react';
import { skillCategories, hackathons, certifications } from '../data/portfolio';

const iconMap = {
  Code2,
  FileCode,
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
  Zap,
  Trophy,
  Eye,
  Layers,
  Brain,
  CheckCircle,
  Sparkles
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning Generative AI, machine learning pipelines, backend services, cloud deployment, and data analytics.
          </p>
        </div>

        {/* Categorized Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((categoryGroup, index) => (
            <div
              key={categoryGroup.category}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-sm">
                  {index === 0 && <BrainCircuit size={20} />}
                  {index === 1 && <Code2 size={20} />}
                  {index === 2 && <Cloud size={20} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {categoryGroup.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-grow">
                {categoryGroup.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Terminal;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 bg-slate-50 hover:bg-blue-50/70 rounded-xl border border-slate-100 transition-all duration-200 flex items-center gap-2.5 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center shadow-xs transition-colors">
                        <IconComponent size={16} />
                      </div>
                      <span className="text-xs font-semibold text-gray-800 group-hover:text-blue-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Hackathons & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hackathons */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-sm">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Hackathons</h3>
                <p className="text-xs text-gray-500">Competitive innovation and rapid prototyping</p>
              </div>
            </div>

            <div className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <div
                  key={index}
                  className="p-4 bg-amber-50/40 border border-amber-200/60 rounded-xl hover:shadow-sm transition-all"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-bold text-gray-900">{hackathon.title}</h4>
                    <span className="text-xs font-medium text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                      {hackathon.event}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                    {hackathon.description}
                  </p>
                  {hackathon.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {hackathon.technologies.map((t) => (
                        <span key={t} className="text-[11px] bg-white border border-amber-200 text-amber-900 px-2 py-0.5 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-sm">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                <p className="text-xs text-gray-500">Verified technical and cloud skills</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-emerald-50/40 border border-emerald-200/60 rounded-xl hover:shadow-sm transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{cert.title}</h4>
                      <p className="text-xs text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    cert.status === 'Upcoming' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {cert.status || 'Verified'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;