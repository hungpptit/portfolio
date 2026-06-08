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
  bio: "Final-year IT student at PTIT with a focus on scalable system design and full-stack development (NextJS, NestJS, Java Android). Specialized in implementing AI solutions including recommender systems, NLP chatbots, and Edge AI deployment. Experienced in model quantization, complex embedded environments, and ROS/ROS2 middleware for robotics."
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
    description: "Mobile: native Android app with secure Stripe checkout and Firebase real-time chat (FCM + Firestore).\nWeb: Next.js admin dashboard for inventory control, order tracking, and synchronized customer support messaging.",
    tech: ["Java (Android Studio)", "Next.js", "Firebase", "Stripe API", "Tailwind CSS"],
    link: "https://github.com/hungpptit/tech-store-mobile",
    github: "https://github.com/hungpptit/tech-store-mobile",
    type: "Mobile"
  },
  {
    title: "Chatbot TOEIC + AI",
    description: "Multi-layered TOEIC tutor built with Gemini AI for advanced guidance, BERT for intent recognition, and Naïve Bayes + kNN analytics for adaptive study recommendations.",
    tech: ["ReactJS", "Node.js", "Gemini API", "BERT", "Naïve Bayes", "kNN"],
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
    title: "Online Movie Ticket Booking System",
    description: "Built a microservices-based movie booking platform with an API Gateway and separated services for users, movies, bookings, payments, and notifications, with movie/showtime handling in the movie service.\nImplemented the full booking flow: browse movies, select showtimes, temporarily lock seats, pay via ZaloPay Dynamic QR, confirm tickets, and send notifications through RabbitMQ.\nImproved concurrency handling with Redis distributed locking + TTL and a database lock fallback in the booking service to prevent double-booking under high traffic.",
    tech: ["React", "Express.js", "Sequelize", "SQL Server", "Redis", "RabbitMQ", "JWT", "Axios", "React Router", "CSS Modules", "Nodemailer", "QR Code"],
    link: "https://github.com/hungpptit/XEMPHIM/tree/kientruc",
    github: "https://github.com/hungpptit/XEMPHIM/tree/kientruc",
    type: "System"
  },
  {
    title: "Smart Garden with On-Device Edge AI",
    description: "Deployed Edge AI Machine Learning models in a complex embedded system environment (ESP32). Handled the end-to-end ML pipeline including training, model quantization, and deploying optimized TFLite models directly on resource-constrained embedded hardware for real-time inference. Architected a multi-tasking FreeRTOS system, demonstrating strong capability in Edge AI deployment and sensor-driven automation.",
    tech: ["C++", "FreeRTOS", "TensorFlow Lite", "Model Quantization", "ESP32", "Edge AI", "ROS/ROS2"],
    link: "https://github.com/hungpptit/VuonThongMinh",
    github: "https://github.com/hungpptit/VuonThongMinh",
    type: "IoT"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming & Databases",
    skills: ["JavaScript (ES6+)", "TypeScript", "Java (OOP, Android Studio)", "Python", "SQL Server (T-SQL, CTEs, Window Functions)"]
  },
  {
    name: "Embedded, Robotics & Edge AI",
    skills: ["ROS/ROS2", "Model Quantization", "Edge AI (TFLite)", "FreeRTOS", "ESP32 / Embedded Hardware"]
  },
  {
    name: "AI & Machine Learning",
    skills: ["BERT (Deep Learning)", "Gemini API (LLM Integration)", "Naive Bayes", "kNN", "SVD", "Content-Based Filtering"]
  },
  {
    name: "Libraries & Modeling",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Modeling"]
  },
  {
    name: "Frontend Development",
    skills: ["ReactJS", "Next.js", "Tailwind CSS", "HTML/CSS"]
  },
  {
    name: "Backend & Cloud",
    skills: ["NestJS", "Node.js (Express, Sequelize, Prisma)", "RESTful API Design", "Firebase (Firestore, Authentication, Hosting)", "JWT", "Stripe API"]
  },
  {
    name: "Architecture & DevOps",
    skills: ["Monorepo Architecture", "Git", "Docker", "Postman", "CI/CD (GitHub Actions)"]
  },
  {
    name: "Methodologies",
    skills: ["Agile/Scrum", "SDLC", "Data-Driven Decision Making", "ETL Concepts", "Data Cleaning", "Star Schema Modeling"]
  }
];
