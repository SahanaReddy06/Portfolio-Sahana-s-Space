import React from 'react';
import { Brain, Eye, MessageSquare, BarChart3, Cpu, Database, Globe, Zap, Layers, Users, Trophy } from 'lucide-react';

const TechnicalInterests = () => {
  const interests = [
    {
      id: "1",
      title: "Artificial Intelligence",
      description: "Exploring advanced AI algorithms, neural networks, and their applications in solving real-world problems.",
      icon: "Brain",
      color: "from-purple-500 to-pink-500",
      topics: ["Neural Networks", "Reinforcement Learning", "AI Ethics", "AGI Research"]
    },
    {
      id: "2",
      title: "Machine Learning",
      description: "Building predictive models and algorithms that learn from data to make intelligent decisions and predictions.",
      icon: "BarChart3",
      color: "from-green-500 to-emerald-500",
      topics: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Optimization"]
    },
    {
      id: "3",
      title: "Computer Vision",
      description: "Developing systems that can interpret and understand visual information from the world around us.",
      icon: "Eye",
      color: "from-blue-500 to-cyan-500",
      topics: ["Image Processing", "Object Detection", "Face Recognition", "Medical Imaging"]
    },
    {
      id: "4",
      title: "Natural Language Processing",
      description: "Building systems that can understand, interpret, and generate human language in a valuable way.",
      icon: "MessageSquare",
      color: "from-green-500 to-teal-500",
      topics: ["Text Analysis", "Sentiment Analysis", "Language Models", "Chatbots"]
    },
    {
      id: "5",
      title: "Data Science & Analytics",
      description: "Extracting insights from complex datasets using statistical methods and machine learning.",
      icon: "BarChart3",
      color: "from-orange-500 to-red-500",
      topics: ["Statistical Analysis", "Data Visualization", "Predictive Modeling", "Big Data"]
    },
    {
      id: "6",
      title: "Deep Learning",
      description: "Implementing and optimizing deep neural networks for complex pattern recognition tasks.",
      icon: "Layers",
      color: "from-indigo-500 to-purple-500",
      topics: ["CNNs", "RNNs", "GANs", "Transformers"]
    },
    {
      id: "7",
      title: "Web Technologies",
      description: "Building modern, responsive web applications using cutting-edge frameworks and tools.",
      icon: "Globe",
      color: "from-cyan-500 to-blue-500",
      topics: ["React", "FastAPI", "MongoDB", "Full-Stack Development"]
    },
    {
      id: "8",
      title: "Workshops & Hackathons",
      description: "Participating in collaborative coding events and technical workshops to enhance skills and network.",
      icon: "Users",
      color: "from-pink-500 to-rose-500",
      topics: ["Team Collaboration", "Problem Solving", "Innovation", "Networking"]
    }
  ];

  const iconMap = {
    Brain,
    Eye,
    MessageSquare,
    BarChart3,
    Cpu,
    Database,
    Globe,
    Zap,
    Layers,
    Users,
    Trophy
  };

  return (
    <section id="technical-interests" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Areas of technology that fascinate me and drive my continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
            
            return (
              <div
                key={interest.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${interest.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {interest.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Key Areas
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {interest.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
            <h3 className="text-lg font-bold">Always Learning, Always Growing</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalInterests;