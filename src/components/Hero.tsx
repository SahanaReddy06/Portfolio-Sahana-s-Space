import React from 'react';
import { ChevronDown, Eye, Sparkles, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 pt-20 pb-12 relative overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-blue-100 mb-6 transform hover:scale-105 transition-all">
            <Sparkles size={16} className="text-blue-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              AI/ML & Generative AI Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-semibold text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.subtitle}
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in Agentic AI, RAG Pipelines, Large Language Models, Backend REST APIs, and Intelligent Document Processing.
          </p>

          {/* Quick Skill Tags */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-10">
            {["Agentic AI", "GenAI", "RAG", "Amazon Bedrock", "Python", "FastAPI", "Docker", "MongoDB", "SQL"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/90 shadow-sm border border-gray-200 text-gray-700 text-xs font-medium rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-sm"
            >
              <Eye size={18} />
              <span>View Resume</span>
            </a>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/SahanaReddy06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-gray-700 hover:text-blue-600 rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sahana-sahana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-gray-700 hover:text-blue-600 rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white text-gray-700 hover:text-blue-600 rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
            aria-label="Scroll down to About"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;