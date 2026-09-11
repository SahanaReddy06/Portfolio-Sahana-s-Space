import { Project, Experience, Skill, SkillCategory, EducationItem, HackathonItem, CertificationItem, SocialLink } from '../types';

export const personalInfo = {
  name: "Sahana",
  title: "AI/ML & Generative AI Engineer",
  subtitle: "Artificial Intelligence & Machine Learning Graduate | GenAI, RAG, & LLM Specialist",
  bio: "Artificial Intelligence & Machine Learning graduate with hands-on experience in Python, AI/ML, GenAI, RAG, backend development, REST APIs, SQL, Docker, and data analytics. Experienced in LLM applications, OCR, embeddings, retrieval, and structured information extraction. Looking for opportunities to apply AI, data, and software engineering skills in real-world projects.",
  email: "reddysahana748@gmail.com",
  phone: "+91 8867037662",
  location: "Bangalore, India",
  resumeUrl: "https://drive.google.com/file/d/1Nsunm56lwjt1VjpT_BNI6Cj-6FswyZ3a/view?usp=drivesdk",
  languages: [
    { name: "English", proficiency: "Professional" },
    { name: "Telugu", proficiency: "Native / Fluent" },
    { name: "Kannada", proficiency: "Fluent" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI/ML & GenAI",
    skills: [
      { name: "Generative AI", icon: "BrainCircuit" },
      { name: "RAG Pipelines", icon: "Layers" },
      { name: "LLM Applications", icon: "Brain" },
      { name: "Machine Learning", icon: "BarChart3" },
      { name: "Deep Learning", icon: "Cpu" },
      { name: "OCR & Document AI", icon: "Eye" },
      { name: "PyTorch", icon: "Zap" },
      { name: "Embeddings & Retrieval", icon: "Database" }
    ]
  },
  {
    category: "Programming & Databases",
    skills: [
      { name: "Python", icon: "Terminal" },
      { name: "SQL", icon: "Database" },
      { name: "MongoDB", icon: "Server" },
      { name: "REST APIs & FastAPI", icon: "Globe" },
      { name: "HTML & CSS", icon: "Code2" },
      { name: "OOPs & Data Structures", icon: "FileCode" }
    ]
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS (Amazon Bedrock)", icon: "Cloud" },
      { name: "Docker", icon: "Container" },
      { name: "Jenkins & CI/CD", icon: "Activity" },
      { name: "Linux", icon: "Terminal" },
      { name: "Git & GitHub", icon: "GitBranch" },
      { name: "PowerBI", icon: "BarChart3" },
      { name: "Jupyter Notebook", icon: "BookOpen" }
    ]
  }
];

export const skills: Skill[] = [
  { name: "Python", level: 95, icon: "Terminal", category: "Programming" },
  { name: "Generative AI", level: 92, icon: "BrainCircuit", category: "AI/ML" },
  { name: "RAG & LLMs", level: 90, icon: "Layers", category: "AI/ML" },
  { name: "Machine Learning", level: 88, icon: "BarChart3", category: "AI/ML" },
  { name: "FastAPI & REST APIs", level: 85, icon: "Globe", category: "Backend" },
  { name: "SQL & MongoDB", level: 85, icon: "Database", category: "Databases" },
  { name: "AWS & Bedrock", level: 82, icon: "Cloud", category: "Cloud" },
  { name: "Docker", level: 80, icon: "Container", category: "DevOps" },
  { name: "OCR & Extraction", level: 85, icon: "Eye", category: "AI/ML" },
  { name: "PowerBI", level: 80, icon: "BarChart3", category: "Analytics" },
  { name: "Git & GitHub", level: 85, icon: "GitBranch", category: "Tools" },
  { name: "HTML & CSS", level: 80, icon: "Code2", category: "Frontend" }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Shellkode",
    position: "AIML Trainee",
    duration: "July 2026 - Present",
    location: "Bangalore, India",
    description: "Developing Agentic AI systems, enterprise LLM workflows, and intelligent document processing pipelines.",
    highlights: [
      "Worked on Agentic AI and LLM applications using Amazon Bedrock, Strands Agents, prompt engineering, and Generative AI practices.",
      "Developed and explored RAG pipelines involving document processing, chunking, embeddings, retrieval, and search.",
      "Worked on OCR, page-level document processing, information extraction, and structured data generation from unstructured documents."
    ],
    technologies: ["Amazon Bedrock", "Strands Agents", "Agentic AI", "Generative AI", "RAG", "LLMs", "OCR", "Prompt Engineering"]
  },
  {
    id: "2",
    company: "Dyashin Technsoft Pvt Ltd.",
    position: "Python & Data Analytics Intern",
    duration: "July 2025 - Nov 2025",
    location: "Bangalore, India",
    description: "Engineered machine learning-driven analytics solutions and recommendation systems with end-to-end containerized deployments.",
    highlights: [
      "Built a Skill Gap Analysis system that compares employee skills with job requirements using machine learning and gives personalized course recommendations based on missing skills.",
      "Deployed the app using Docker, and created PowerBI dashboards to show skill gaps and department-level analysis.",
      "Worked on data cleaning, SQL queries, and analysis tasks using Python, Pandas, and NumPy as part of day-to-day work."
    ],
    technologies: ["Python", "Machine Learning", "Data Analytics", "Docker", "PowerBI", "SQL", "Pandas", "NumPy"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "1",
    degree: "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
    institution: "BNM Institute of Technology",
    location: "Bangalore, India",
    duration: "Dec 2022 - May 2026",
    grade: "CGPA: 9.15",
    description: "Undergraduate degree focusing on Artificial Intelligence, Machine Learning, Generative AI, and Data Science.",
    highlights: [
      "Specializing in AI/ML, GenAI, and Deep Learning architectures",
      "Academic Excellence with a CGPA of 9.15",
      "Active in technical projects, Agentic AI research, and competitive hackathons"
    ]
  },
  {
    id: "2",
    degree: "Pre-University Education (PCMB)",
    institution: "Nagarjuna Pre-University College",
    location: "Karnataka, India",
    duration: "Aug 2020 - June 2022",
    grade: "Percentage: 94.44%",
    description: "Completed pre-university education in the Science stream with Physics, Chemistry, Mathematics, and Biology.",
    highlights: [
      "Science Stream: Physics, Chemistry, Mathematics, and Biology (PCMB)",
      "Graduated with High Academic Distinction: 94.44%",
      "Active participant in science exhibitions, quiz competitions, and academic events"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered IMDb Movie Data API",
    description: "A robust FastAPI RESTful API integrating MongoDB and Gemini AI for intelligent movie catalog management, automated summary generation, and advanced search.",
    highlights: [
      "Built a FastAPI-based RESTful API to manage, search, update, and delete IMDb movie data efficiently.",
      "Scraped 1,000 movie records from IMDb using BeautifulSoup and stored in MongoDB for real-time access.",
      "Integrated Gemini AI to auto-generate short summaries, enhancing user experience with Generative AI."
    ],
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["FastAPI", "MongoDB", "Swagger UI", "Python", "Gemini AI", "BeautifulSoup"],
    githubUrl: "https://github.com/SahanaReddy06/AI-Powered-IMDb-Movie-Data-API-using-FastAPI-and-MongoDB",
    featured: true
  },
  {
    id: "2",
    title: "Face Aging and De-Aging using CycleGAN",
    description: "An unpaired image-to-image translation deep learning system using CycleGAN to perform realistic facial aging and de-aging transformations.",
    highlights: [
      "Used CycleGAN for unpaired image-to-image translation to perform face aging and de-aging.",
      "Applied image preprocessing techniques on the UTKFace dataset for effective model training.",
      "Built a Flask-based inference pipeline to deploy the model with image upload and transformation."
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["OpenCV", "Python", "CycleGAN", "PyTorch", "Flask", "UTKFace"],
    githubUrl: "https://github.com/SahanaReddy06/FaceAging-and-DeAging-Using-CycleGAN",
    featured: true
  },
  {
    id: "3",
    title: "AI-Based Fake News Detection System",
    description: "Machine learning NLP classification system developed at the TechXcelerate hackathon (BITS Hyderabad) to detect disinformation and fake news articles in real-time.",
    highlights: [
      "Implemented NLP text processing and TF-IDF feature extraction on extensive news corpora.",
      "Trained classification models achieving high accuracy in distinguishing misleading articles.",
      "Presented and demonstrated at TechXcelerate Hackathon, BITS Hyderabad."
    ],
    image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Scikit-Learn", "NLP", "Pandas", "TF-IDF"],
    githubUrl: "https://github.com/SahanaReddy06/AI_Fake_News_detection",
    featured: true
  },
  {
    id: "4",
    title: "3D Teeth Reconstruction Model",
    description: "3D anatomical teeth reconstruction model developed using Blender and Python during the Virtuoation hackathon at BNMIT for dental and medical visualization.",
    highlights: [
      "Constructed accurate 3D dental models using Blender for orthodontic and clinical diagnostics.",
      "Created customized Python scripts for mesh optimization and spatial rendering.",
      "Showcased at Virtuoation Hackathon, BNMIT."
    ],
    image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Blender", "Python", "3D Modeling", "Medical AI"],
    githubUrl: "https://github.com/SahanaReddy06",
    featured: true
  },
  {
    id: "5",
    title: "Skill Gap Analysis & Course Recommendation",
    description: "Machine learning recommendation system comparing employee competencies with job requirements, containerized with Docker and PowerBI dashboards.",
    highlights: [
      "Built ML models comparing employee profiles with job specifications for targeted gap detection.",
      "Delivered personalized learning pathway recommendations based on detected skill gaps.",
      "Deployed with Docker and developed interactive PowerBI executive dashboards."
    ],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Machine Learning", "Docker", "PowerBI", "SQL", "Pandas"],
    githubUrl: "https://github.com/SahanaReddy06",
    featured: false
  },
  {
    id: "6",
    title: "Causal AI on COVID-19 Data",
    description: "Utilized causal inference techniques on healthcare datasets to identify key factors influencing recovery and mortality using DoWhy and EconML.",
    highlights: [
      "Applied causal graphs and observational study estimation to determine causal treatment effects.",
      "Evaluated model robustness using refutation tests and sensitivity analysis."
    ],
    image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Pandas", "DoWhy", "EconML", "Causal AI"],
    githubUrl: "https://github.com/SahanaReddy06/Causal-AI-on-COVID-19-Data",
    featured: false
  }
];

export const hackathons: HackathonItem[] = [
  {
    title: "TechXcelerate",
    event: "BITS Hyderabad",
    location: "Hyderabad, India",
    description: "Built an AI-based fake news detection system using machine learning and NLP feature extraction.",
    technologies: ["Python", "NLP", "Scikit-Learn", "Machine Learning"],
    icon: "Trophy"
  },
  {
    title: "Virtuoation",
    event: "BNMIT",
    location: "Bangalore, India",
    description: "Built a 3D teeth reconstruction model using Blender and Python for dental and medical use.",
    technologies: ["Blender", "Python", "3D Modeling"],
    icon: "Award"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Programming in Python",
    issuer: "Pantech Solutions",
    status: "Completed",
    icon: "Award"
  },
  {
    title: "Claude Certified Associate - Foundations",
    issuer: "Anthropic / Cognitive AI",
    status: "Upcoming",
    icon: "BrainCircuit"
  },
  {
    title: "Data Science & Big Data Essentials",
    issuer: "Infosys Springboard",
    status: "Completed",
    icon: "Award"
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/SahanaReddy06", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sahana-sahana", icon: "Linkedin" },
  { name: "Email", url: "mailto:reddysahana748@gmail.com", icon: "Mail" }
];