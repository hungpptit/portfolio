import { Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Phạm Tuấn Hưng",
  role: "Software Engineering Student",
  university: "Posts and Telecommunications Institute of Technology (PTIT)",
  gpa: "3.19/4.0",
  graduation: "Expected 2027",
  email: "phamtuanhung242004@gmail.com",
  phone: "0785535224",
  github: "https://github.com/hungpptit",
  location: "Vietnam",
  bio: "Final-year IT student at PTIT with a focus on scalable system design and full-stack development (NextJS, NestJS, Java Android). Specialized in implementing AI solutions, including recommender systems and NLP chatbots."
};

export const PROJECTS: Project[] = [
  {
    title: "Grabtify",
    description: "A sleek music streaming platform designed for a seamless auditory experience. Built with performance and user-centered design in mind.",
    tech: ["TypeScript", "React", "CSS", "Dockerfile"],
    link: "https://github.com/Hung-pth/Grabtify_CV",
    github: "https://github.com/Hung-pth/Grabtify_CV",
    type: "Web"
  },
  {
    title: "Tech Store Ecosystem",
    description: "A comprehensive e-commerce solution featuring a native Android user application and a web-based administrative dashboard for order and product management.",
    tech: ["Java (Android)", "TypeScript", "React", "Node.js", "SQL"],
    link: "https://github.com/hungpptit/tech-store-mobile",
    github: "https://github.com/hungpptit/tech-store-mobile",
    type: "Mobile"
  },
  {
    title: "Chatbot TOEIC + AI",
    description: "An AI-powered preparation tool for TOEIC exams, featuring interactive chatbots to enhance language learning through conversation.",
    tech: ["Python", "NLP", "AI SDK", "TypeScript"],
    link: "https://github.com/hungpptit/chatbot-toeic",
    github: "https://github.com/hungpptit/chatbot-toeic",
    type: "AI"
  },
  {
    title: "Astro Party Clone",
    description: "A fast-paced local multiplayer game inspired by Astro Party, developed with Python and Pygame.",
    tech: ["Python", "Pygame"],
    link: "https://github.com/hungpptit/astro-party-",
    github: "https://github.com/hungpptit/astro-party-",
    type: "Game"
  },
  {
    title: "Library Management System",
    description: "A robust Java-based application for managing library resources, tracking book loans, and maintaining member records with an intuitive interface.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    link: "https://github.com/hungpptit/library-management-system",
    github: "https://github.com/hungpptit/library-management-system",
    type: "System"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript (ES6+)", "Java", "Python", "SQL"]
  },
  {
    name: "Frontend",
    skills: ["ReactJS", "NextJS", "TypeScript", "HTML/CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Sequelize", "Prisma", "RESTful API"]
  },
  {
    name: "DevOps",
    skills: ["Git", "Docker", "Postman", "CI/CD"]
  },
  {
    name: "Soft Skills",
    skills: ["Teamwork", "Problem-solving", "Time Management", "Adaptability"]
  }
];
