# 🚀 Sahana's Space - Professional Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**A modern, responsive, and high-performance portfolio website built with React, TypeScript, Tailwind CSS, and Vite showcasing projects, experience, skills, and research in Artificial Intelligence, Generative AI, RAG, and Machine Learning.**

[Live Demo](https://sahana-space.vercel.app/) • [Report Bug](https://github.com/SahanaReddy06/Portfolio-Sahana-s-Space/issues) • [Request Feature](https://github.com/SahanaReddy06/Portfolio-Sahana-s-Space/issues)

</div>

---

## 📌 Table of Contents
- [About Me](#-about-me)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Featured Projects](#-featured-projects)
- [Professional Experience](#-professional-experience)
- [Contact & Connect](#-contact--connect)

---

## 👤 About Me

**Sahana** is an **Artificial Intelligence & Machine Learning Graduate** specializing in:
- 🧠 **Generative AI & Agentic AI** (Amazon Bedrock, Strands Agents, Prompt Engineering)
- ⚡ **Retrieval-Augmented Generation (RAG)** & Vector Search (Chunking, Embeddings, Document Retrieval)
- 📄 **OCR & Intelligent Document AI** (Page-level processing, text extraction, structured data generation)
- 🛠️ **Backend Engineering & APIs** (Python, FastAPI, Swagger UI, MongoDB, SQL)
- 📊 **Data Analytics & Machine Learning** (PowerBI, Docker, Pandas, NumPy, Scikit-Learn, PyTorch)

---

## ✨ Key Features

- 🎯 **Hero Section**: High-impact introduction with dynamic badges, quick skill tags, and call-to-action buttons.
- 📖 **About & Languages**: Comprehensive professional summary, profile visualization, and language proficiencies (*English, Telugu, Kannada*).
- 💼 **Professional Experience**: Detailed breakdown of industry trainee and intern experience with structured bullet points and tech tags.
- 🎓 **Education**: Academic history highlighting degree specializations and academic standing (**CGPA: 9.15** at BNMIT, **94.44%** at Nagarjuna PU).
- 💡 **Technical Interests & Specializations**: Interactive cards for GenAI & Agentic AI, RAG, Document AI, Deep Learning, REST APIs, and Analytics.
- 💻 **Featured Projects**: Rich project showcases with key implementation highlights, tech stacks, and direct GitHub links.
- 🏆 **Skills, Hackathons & Certifications**: Categorized technical skills (*Programming & Databases*, *AI/ML & GenAI*, *Cloud & Tools*), alongside hackathon achievements and industry certifications.
- 📬 **Interactive Contact Form**: Direct messaging interface, WhatsApp quick-connect, and *Open to Work* badge.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Core Skills & Domain Technologies
- **AI / ML & GenAI**: Generative AI, RAG Pipelines, Amazon Bedrock, Strands Agents, LLMs, OCR, PyTorch, CycleGAN, Scikit-Learn
- **Backend & Databases**: Python, FastAPI, Swagger UI, MongoDB, SQL, REST APIs, BeautifulSoup
- **DevOps & Cloud**: AWS, Docker, Jenkins, Linux, Git, GitHub
- **Analytics & BI**: PowerBI, Pandas, NumPy, Jupyter Notebook

---

## 📁 Project Structure

```bash
Portfolio-Sahana-s-Space/
├── public/                 # Static assets and images
│   └── ...
├── src/
│   ├── components/         # Modular React components
│   │   ├── Navigation.tsx  # Navbar with smooth-scroll and mobile drawer
│   │   ├── Hero.tsx        # Hero banner with skill pills and CTA
│   │   ├── About.tsx       # About Me section with languages
│   │   ├── Education.tsx   # Academic journey cards
│   │   ├── TechnicalInterests.tsx # Specializations & focus areas
│   │   ├── Projects.tsx    # Featured projects with bullet highlights
│   │   ├── Skills.tsx      # Categorized skills, hackathons & certifications
│   │   ├── Experience.tsx  # Work experience with detailed bullets
│   │   ├── Contact.tsx     # Direct message form and social channels
│   │   └── Footer.tsx      # Footer with social links and copyright
│   ├── data/
│   │   └── portfolio.ts    # Centralized portfolio data repository
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces and data models
│   ├── App.tsx             # Root application component
│   ├── main.tsx            # React DOM entrypoint
│   └── index.css           # Global Tailwind CSS configurations
├── index.html              # HTML5 entry with SEO tags & Google Fonts
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind theme configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or higher) and npm installed:
```bash
node -v
npm -v
```

### 1. Clone the repository
```bash
git clone https://github.com/SahanaReddy06/Portfolio-Sahana-s-Space.git
cd Portfolio-Sahana-s-Space
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 🌟 Featured Projects

1. **AI-Powered IMDb Movie Data API**
   - Built a FastAPI-based RESTful API managing, searching, and updating IMDb movie data.
   - Scraped 1,000+ movie records using BeautifulSoup into MongoDB.
   - Integrated Google Gemini AI to auto-generate real-time movie summaries.
   - *Tech*: FastAPI, MongoDB, Gemini AI, Swagger UI, BeautifulSoup, Python.

2. **Face Aging and De-Aging using CycleGAN**
   - Unpaired image-to-image translation deep learning framework using CycleGAN.
   - Preprocessed UTKFace dataset for high-fidelity generative training.
   - Flask-based inference pipeline for user upload and age translation.
   - *Tech*: PyTorch, CycleGAN, OpenCV, Python, Flask.

3. **AI-Based Fake News Detection System**
   - NLP classification model developed during TechXcelerate Hackathon at BITS Hyderabad.
   - TF-IDF feature extraction and machine learning classifiers for disinformation detection.
   - *Tech*: Python, Scikit-Learn, NLP, Pandas.

4. **3D Teeth Reconstruction Model**
   - Anatomical 3D dental reconstruction built during Virtuoation Hackathon at BNMIT.
   - Automated Blender scripts in Python for dental modeling and medical diagnostics.
   - *Tech*: Blender, Python, 3D Modeling, Medical AI.

---

## 💼 Professional Experience

- **Shellkode** | *AIML Trainee (July 2026 - Present)*
  - Worked on Agentic AI and LLM applications using Amazon Bedrock, Strands Agents, prompt engineering, and GenAI best practices.
  - Developed and optimized RAG pipelines (chunking, embeddings, retrieval, search).
  - Implemented OCR, page-level document processing, and structured information extraction.

- **Dyashin Technsoft Pvt Ltd.** | *Python & Data Analytics Intern (July 2025 - Nov 2025)*
  - Built a Skill Gap Analysis system with personalized course recommendations using ML.
  - Deployed containerized applications with Docker and developed executive PowerBI dashboards.
  - Handled data cleaning, SQL queries, and analytics with Pandas & NumPy.

---

## 📬 Contact & Connect

- 📧 **Email**: [reddysahana748@gmail.com](mailto:reddysahana748@gmail.com)
- 📱 **Phone**: [+91 8867037662](tel:8867037662)
- 💬 **WhatsApp**: [Connect on WhatsApp](https://wa.me/918867037662)
- 💼 **LinkedIn**: [linkedin.com/in/sahana-sahana](https://www.linkedin.com/in/sahana-sahana)
- 🐙 **GitHub**: [github.com/SahanaReddy06](https://github.com/SahanaReddy06)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/SahanaReddy06">Sahana</a></sub>
</div>
