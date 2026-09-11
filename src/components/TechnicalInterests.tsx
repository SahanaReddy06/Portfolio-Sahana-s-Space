import React from 'react';
import { BrainCircuit, Layers, Eye, Cpu, Database, Server, BarChart3, Cloud } from 'lucide-react';

const TechnicalInterests = () => {
  const interests = [
    {
      id: "1",
      title: "Generative AI & Agentic AI",
      description: "Developing autonomous AI agents, LLM applications with Amazon Bedrock, and advanced prompt engineering frameworks.",
      icon: "BrainCircuit",
      color: "from-blue-600 to-indigo-600",
      topics: ["Agentic AI", "Amazon Bedrock", "Strands Agents", "Prompt Engineering"]
    },
    {
      id: "2",
      title: "RAG & Vector Search",
      description: "Architecting end-to-end Retrieval-Augmented Generation pipelines with document chunking, semantic embeddings, and vector databases.",
      icon: "Layers",
      color: "from-purple-600 to-pink-600",
      topics: ["RAG Pipelines", "Semantic Search", "Document Chunking", "Embeddings"]
    },
    {
      id: "3",
      title: "OCR & Document AI",
      description: "Extracting structured data from unstructured enterprise documents with page-level intelligence and multi-modal models.",
      icon: "Eye",
      color: "from-emerald-500 to-teal-600",
      topics: ["OCR Extraction", "Document Processing", "Structured Data", "Information Retrieval"]
    },
    {
      id: "4",
      title: "Deep Learning & GANs",
      description: "Training neural architectures, generative adversarial networks (CycleGAN), and image-to-image translation models with PyTorch.",
      icon: "Cpu",
      color: "from-amber-500 to-orange-600",
      topics: ["CycleGAN", "PyTorch", "Image Translation", "Model Inference"]
    },
    {
      id: "5",
      title: "REST APIs & Backend",
      description: "Building scalable backend services and high-throughput RESTful APIs using FastAPI, Swagger UI, and MongoDB.",
      icon: "Server",
      color: "from-cyan-500 to-blue-600",
      topics: ["FastAPI", "MongoDB", "Swagger UI", "REST APIs"]
    },
    {
      id: "6",
      title: "Data Analytics & BI",
      description: "Transforming raw data into actionable intelligence with SQL, Pandas, NumPy, and executive PowerBI dashboards.",
      icon: "BarChart3",
      color: "from-violet-500 to-purple-700",
      topics: ["PowerBI", "SQL Queries", "Pandas / NumPy", "Data Cleaning"]
    }
  ];

  const iconMap = {
    BrainCircuit,
    Layers,
    Eye,
    Cpu,
    Database,
    Server,
    BarChart3,
    Cloud
  };

  return (
    <section id="technical-interests" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Interests & Specializations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key focus areas driving my continuous exploration in Artificial Intelligence, Software Engineering, and Data Science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap] || BrainCircuit;
            
            return (
              <div
                key={interest.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className={`w-14 h-14 mb-5 bg-gradient-to-br ${interest.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={26} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {interest.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Key Topics
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {interest.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium rounded-lg"
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
      </div>
    </section>
  );
};

export default TechnicalInterests;