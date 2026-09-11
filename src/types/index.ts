export interface Project {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon: string }[];
}

export interface Skill {
  name: string;
  level?: number;
  icon: string;
  category?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  description: string;
  highlights: string[];
}

export interface HackathonItem {
  title: string;
  event: string;
  location: string;
  description: string;
  technologies?: string[];
  icon: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status?: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}