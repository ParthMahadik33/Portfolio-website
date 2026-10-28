export interface TechnologyItem {
  name: string;
  tag: string;
}

export interface FeaturedWorkData {
  title: string;
  role: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
  alsoUsedIn: string[];
}

export interface ToolkitCategory {
  id: string;
  number: string;
  name: string;
  navSubtitle: string;
  subheading: string;
  description: string;
  technologies: TechnologyItem[];
  featuredWork: FeaturedWorkData;
}

export interface SkillBadge {
  title: string;
  credlyUrl: string;
}

export const CREDLY_PROFILE_URL =
  "https://www.credly.com/users/parth-mahadik.2a5b3390/badges/credly";

export const GOOGLE_CLOUD_BADGES: SkillBadge[] = [
  {
    title: "Deploy & Secure Serverless APIs with API Gateway",
    credlyUrl: CREDLY_PROFILE_URL,
  },
  {
    title: "Build Serverless Applications with Cloud Run Functions",
    credlyUrl: CREDLY_PROFILE_URL,
  },
  {
    title: "Deploy & Manage Applications on Google App Engine",
    credlyUrl: CREDLY_PROFILE_URL,
  },
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    credlyUrl: CREDLY_PROFILE_URL,
  },
];

export const TOOLKIT_CATEGORIES: ToolkitCategory[] = [
  {
    id: "web-development",
    number: "01",
    name: "Web Development",
    navSubtitle: "BUILDING EXPERIENCES",
    subheading: "BUILDING USER-FACING EXPERIENCES",
    description:
      "I design and develop responsive, user-focused web applications and landing pages. From idea to deployment, I work across modern web technologies to create clean, interactive and scalable experiences.",
    technologies: [
      { name: "Next.js", tag: "USED IN PORTFOLIO" },
      { name: "TypeScript", tag: "USED IN PORTFOLIO" },
      { name: "JavaScript", tag: "USED IN PROJECTS" },
      { name: "HTML", tag: "USED IN PROJECTS" },
      { name: "CSS", tag: "USED IN PROJECTS" },
      { name: "SCSS", tag: "USED IN PORTFOLIO" },
      { name: "WordPress", tag: "USED IN WEB PROJECTS" },
    ],
    featuredWork: {
      title: "AgroRent",
      role: "Equipment Rental Platform",
      description:
        "Responsive web application with smart search, chatbot and modern UI for farm machinery rentals.",
      imageSrc: "/assets/projects/agrorent-landing-real.webp",
      projectUrl: "https://agrorent-v3.onrender.com/",
      alsoUsedIn: [
        "ARRA – Railway Response System",
        "AetherSense AI – FinTech Platform",
        "Vini Cakes – Business Landing Page",
        "Mukbang Cafe – Website Concept",
        "Personal Portfolio",
      ],
    },
  },
  {
    id: "backend-engineering",
    number: "02",
    name: "Backend & API Engineering",
    navSubtitle: "POWERING APPLICATIONS",
    subheading: "POWERING APPLICATIONS",
    description:
      "Architecting reliable backend services, structured REST APIs, and database interactions that keep applications responsive, secure, and ready to scale under real-world usage.",
    technologies: [
      { name: "Python", tag: "CORE BACKEND LOGIC" },
      { name: "Flask", tag: "REST API FRAMEWORK" },
      { name: "Django", tag: "APPLICATION ARCHITECTURE" },
      { name: "REST APIs", tag: "SERVICE INTEGRATION" },
      { name: "WebSockets", tag: "REAL-TIME CHANNELS" },
      { name: "SQLite", tag: "DATA PERSISTENCE" },
    ],
    featuredWork: {
      title: "AgroRent Backend API",
      role: "Modular API & Payment Pipeline",
      description:
        "Flask REST API integrating Razorpay payments, Twilio SMS alerts, and SQLite data models for farm rentals.",
      imageSrc: "/assets/projects/agrorent-landing-real.webp",
      projectUrl: "https://github.com/ParthMahadik33/AgroRent-v3",
      alsoUsedIn: [
        "ARRA – Telemetry & Incident Dispatch",
        "AetherSense AI – Scoring Pipeline",
        "AquaTrace – Sensor Reading API",
      ],
    },
  },
  {
    id: "ai-integration",
    number: "03",
    name: "AI Integration",
    navSubtitle: "MAKING SYSTEMS INTELLIGENT",
    subheading: "MAKING SYSTEMS INTELLIGENT",
    description:
      "Practical integration of large language models, multimodal APIs, and applied machine learning to solve domain-specific problems without unnecessary complexity or architectural overhead.",
    technologies: [
      { name: "Gemini API", tag: "MULTIMODAL AI & CHAT" },
      { name: "Streamlit", tag: "RAPID AI PROTOTYPING" },
      { name: "AI/ML Experimentation", tag: "MODEL EXPLORATION" },
      { name: "Computer Vision", tag: "VISUAL INSPECTION" },
      { name: "NLP", tag: "MULTILINGUAL PROCESSING" },
    ],
    featuredWork: {
      title: "AgroRent AI Advisory",
      role: "Conversational Multilingual Assistant",
      description:
        "Gemini-powered advisory bot assisting farmers with equipment matching, vernacular queries, and practical recommendations.",
      imageSrc: "/assets/projects/agrorent-landing-real.webp",
      projectUrl: "https://agrorent-v3.onrender.com/",
      alsoUsedIn: [
        "Develop GenAI Apps with Gemini (GCP Badge)",
        "Automated Multilingual Query Resolution",
      ],
    },
  },
  {
    id: "cloud-deployment",
    number: "04",
    name: "Cloud & Deployment",
    navSubtitle: "TAKING IDEAS TO USERS",
    subheading: "TAKING IDEAS TO USERS",
    description:
      "Deploying, monitoring, and scaling web apps across serverless platforms, container hosting, and cloud infrastructure with automated CI/CD and secure API gateway practices.",
    technologies: [
      { name: "Google Cloud", tag: "COMPLETED SKILL BADGES" },
      { name: "Cloud Run Functions", tag: "SERVERLESS LOGIC" },
      { name: "App Engine", tag: "MANAGED HOSTING" },
      { name: "API Gateway", tag: "API SECURITY & ROUTING" },
      { name: "Vercel", tag: "NEXT.JS CI/CD" },
      { name: "Render", tag: "CONTAINERIZED BACKEND" },
    ],
    featuredWork: {
      title: "Vercel & Render Pipelines",
      role: "Continuous Deployment & Hosting",
      description:
        "Next.js frontend deployed continuously on Vercel; Python container services hosted on Render with automated build hooks.",
      imageSrc: "/assets/projects/agrorent-landing-real.webp",
      projectUrl: CREDLY_PROFILE_URL,
      alsoUsedIn: [
        "Deploy & Secure Serverless APIs (Credly)",
        "Build Serverless Apps with Cloud Run (Credly)",
        "Manage Applications on App Engine (Credly)",
      ],
    },
  },
  {
    id: "data-developer-tools",
    number: "05",
    name: "Data & Developer Tools",
    navSubtitle: "WORKING WITH DATA",
    subheading: "WORKING WITH DATA",
    description:
      "Managing structured data, analytical transformations, distributed Git workflows, and local workstation environments to keep projects maintainable and reproducible.",
    technologies: [
      { name: "SQLite", tag: "LOCAL PERSISTENCE" },
      { name: "Pandas", tag: "DATA PROCESSING" },
      { name: "NumPy", tag: "NUMERICAL COMPUTATION" },
      { name: "Git", tag: "VERSION CONTROL" },
      { name: "GitHub", tag: "COLLABORATION & CI" },
      { name: "VS Code", tag: "PRIMARY IDE" },
    ],
    featuredWork: {
      title: "Developer Toolchains",
      role: "Version Control & Data Hygiene",
      description:
        "Structured Git branch workflows, reproducible project configurations, and data cleaning scripts supporting analytical applications.",
      imageSrc: "/assets/projects/agrorent-landing-real.webp",
      projectUrl: "https://github.com/ParthMahadik33",
      alsoUsedIn: [
        "AgroRent Equipment Inventory Analysis",
        "Sensor Calibration Pipelines",
        "Portfolio Monorepo Architecture",
      ],
    },
  },
];
