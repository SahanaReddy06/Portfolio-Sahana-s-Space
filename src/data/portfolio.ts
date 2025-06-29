import { Project, Experience, Skill, SocialLink } from '../types';

export const personalInfo = {
  name: "Sahana",
  title: "Tech Enthusiast",
  subtitle: "Passionate about creating innovative solutions through technology and continuous learning",
  bio: "I'm a final-year Artificial Intelligence and Machine Learning student at BNMIT with hands-on experience in developing AI-powered applications, web development, and data science projects. I'm passionate about leveraging technology to build smart, scalable, and user-centric solutions.",
  email: "reddysahana748@gmail.com",
  phone: "+91 (886) 703-7662",
  location: "Banglore, India",
  resumeUrl: "https://drive.google.com/file/d/1Nsunm56lwjt1VjpT_BNI6Cj-6FswyZ3a/view?usp=drivesdk"
};

export const skills: Skill[] = [
  { name: "Python", level: 95, icon: "Terminal" },
  { name: "C Programming", level: 80, icon: "Code2" },
  { name: "SQL", level: 75, icon: "Atom" },
  { name: "MongoDB", level: 70, icon: "Server" },
  { name: "Web Development", level: 70, icon: "Globe" },
  { name: "Artificial Intelligence", level: 70, icon: "Activity" },
  { name: "Machine Learning", level: 85, icon: "BarChart3" },
  { name: "Deep Learning", level: 80, icon: "BrainCircuit" },
  { name: "Git/GitHub", level: 80, icon: "GitBranch" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Face Aging and DeAging using CycleGAN",
    description: "Developed a CycleGAN-based deep learning system that transforms facial images between different age groups. The project includes data preprocessing, model training, and a Flask-based web app for user interaction.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "CycleGAN", "PyTorch", "Flask"],
    githubUrl: "https://github.com/SahanaReddy06/FaceAging and DeAging Using CycleGAN",
    featured: true
  },
  {
    id: "2",
    title: "AI-Powered IMDb Movie Data API Using FastAPI and MongoDB",
    description: "Built a FastAPI and MongoDB-based movie data platform with Gemini AI integration to auto-generate summaries. Supports full CRUD and search operations.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["FastAPI", "MongoDB", "React", "Gemini API"],
    githubUrl: "https://github.com/SahanaReddy06/AI-Powered-IMDb-Movie-Data-API-using-FastAPI-and-MongoDB",
    featured: true
  },
  {
    id: "3",
    title: "AI Fake News Detection",
    description: "Implemented machine learning models to detect fake news based on textual features. The project includes data preprocessing, TF-IDF vectorization, and logistic regression.",
    image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Scikit-learn", "Pandas", "NLP"],
    githubUrl: "https://github.com/SahanaReddy06/AI_Fake_News_detection",
    featured: true
  },
  {
    id: "4",
    title: "Expense Tracker App",
    description: "A simple yet effective personal Expense tracker developed using JavaScript. Allows users to log expenses and visualize spending habits.",
    image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/SahanaReddy06/Expense-Tracker",
    featured: false
  },
  {
    id: "5",
    title: "Causal AI on COVID-19 Data",
    description: "Utilized causal inference techniques on COVID-19 datasets to identify key factors influencing recovery and mortality. Focused on interpretability using DoWhy and EconML.",
    image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Pandas", "DoWhy"],
    githubUrl: "https://github.com/SahanaReddy06/Causal-AI-on-COVID-19-Data",
    featured: false
  },
  {
    id: "6",
    title: "Diabetes Prediction System",
    description: "A machine learning model trained on healthcare data to predict diabetes likelihood. Focused on accuracy and ease of use for non-technical users.",
    image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    githubUrl: "",
    featured: false
  },
  {
    id: "7",
    title: "Stock Price Prediction",
    description: "Built a time series forecasting model using historical stock data to predict future trends. Focused on LSTM-based deep learning architecture.",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Reinforcement Learning", "Pandas", "Matplotlib"],
    githubUrl: "",
    featured: false
  }
  
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "BNMIT",
    position: "Web Development",
    description: "I completed a Web Development Internship where I built responsive and dynamic web applications using HTML, CSS, JavaScript. I also worked on backend development. This experience enhanced my skills in web development and real-world project handling.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    id: "2",
    company: "Pantech.AI",
    position: "Intern",
    duration: "Dec 2023 - Mar 2024",
    description: "I gained hands-on experience in AI and Machine Learning technologies. I participated in project-based learning involving model building, data preprocessing, and algorithm implementation using Python.It helped me strengthen my practical understanding of core AI/ML concepts and tools.",
    technologies: ["Python", "Pandas", "Machine Learning", "NumPy"]
  },
  {
    id: "3",
    company: "Capabl India",
    position: "Cyber Security Intern",
    duration: "Sep 2024- Sep 2024",
    description: "Successfully completed a hands-on workshop on Cybersecurity Foundations, covering key areas like threat landscape, network protocols, and web application security. Gained practical exposure to social engineering tools, basic testing techniques, and career pathways in the cybersecurity domain.",
    technologies: ["Burp Suite", "Kali Linux", "TCP/IP Protocols", "HTTPS/HTTP", "Web Testing"]
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/SahanaReddy06", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sahana-sahana", icon: "Linkedin" },
  { name: "Email", url: "mailto:reddysahana748@gmail.com", icon: "Mail" }
];