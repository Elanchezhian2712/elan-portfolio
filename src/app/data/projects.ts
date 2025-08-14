// app/data/projects.ts

export type Project = {
  title: string;
  slug: string;
  desc: string;
  tech: string[];
  image: string;
  link: string; 
  github?: string; 
  overview: string; 
  features: string[]; 
  gallery: string[]; 
};

export const projects: Project[] = [
  {
  title: "Secure AI-Powered Bookmark Manager",
  slug: "bookmark-manager",
  desc: "A secure, serverless bookmark manager with voice & NLP commands, Google Drive integration, and multi-file support.",
  tech: ["Next.js", "React", "Google Drive API", "Gemini AI", "CryptoJS", "Framer Motion", "Google Cloud Console"],
  image: "/images/Secure AI-Powered Bookmark Manager.png",
  link: "https://drivegenie.vercel.app/",
  github: "https://github.com/Elanchezhian2712/Drive_Genie",
  overview: "Developed a secure, serverless bookmarking application that leverages Google Drive for encrypted storage and Gemini AI for natural language processing, enabling users to manage bookmarks and folders using voice commands or text prompts.",
  features: [
    "Encrypted serverless storage using Google Drive and client-side AES (Zero-Knowledge model).",
    "Voice and NLP-based bookmark/folder management with Gemini 2.5 Pro.",
    "Custom responsive UI with grid/list views, animated transitions, and multi-file support (PDFs, images, videos, CSV, Excel).",
    "OAuth 2.0 login with Google Identity for scoped, permission-based access.",
    "Designed for enhanced security and seamless user experience."
  ],
  gallery: [
    "/images/bookmark-gallery-1.png",
    "/images/bookmark-gallery-2.png"
  ],
},
  {
    title: "Virtual Assistant for Individuals with Disabilities",
    slug: "virtual-assistant",
    desc: "AI-powered desktop assistant for blind, deaf, and non-verbal users with speech-to-text, image recognition, and hands-free control.",
    tech: ["Flask", "Python", "Bootstrap", "REST APIs"],
    image: "/images/virtual-assistant.png",
    link: "/projects/virtual-assistant",
    github: "https://github.com/Elanchezhian2712/VSIPC",
    overview: "This desktop application enhances accessibility for users with visual, hearing, or speech impairments. It integrates AI services to provide tools that can be controlled via voice, gestures, or text.",
    features: [
      "AI-powered desktop assistant for users with disabilities.",
      "Real-time speech-to-text and voice interaction.",
      "Image and speech processing for responsive task control.",
      "Modular Flask backend with REST APIs for automation.",
      "Tested with real users, improving efficiency by 50%."
    ],
    gallery: [
      "/images/va-gallery-1.png",
      "/images/va-gallery-2.png"
    ],
  },
  {
    title: "Employee Management System",
    slug: "employee-management-system",
    desc: "The Employee Management System (EMS) is a MERN-stack web app for efficiently managing employees, teams, leaders, and company targets.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/images/Employee_Management_System.png",
    link: "/projects/employee-management-system",
    github: "https://github.com/Elanchezhian2712/Emp-Frontend", 
    overview: "A full-stack MERN application designed to help companies manage employees, teams, and targets efficiently. Includes dashboards, CRUD operations, and reporting features.",
    features: [
      "Manage employees, teams, and leaders efficiently.",
      "CRUD operations for employee records.",
      "Team and target management dashboards.",
      "Real-time updates and reporting.",
      "Responsive UI with Tailwind CSS."
    ],
    gallery: [
      "/images/ems-gallery-1.png",
      "/images/ems-gallery-2.png"
    ],
  },
  {
    title: "Build a Duolingo Clone",
    slug: "duolingo-clone",
    desc: "Interactive platform for language learning. Features include user registration, course management, quizzes, and progress tracking.",
    tech: ["Next.js", "AI", "Clerk", "Shadcn UI", "Stripe", "PostgreSQL"],
    image: "/images/Build a Duolingo Clone.png",
    link: "https://leo-clone.vercel.app/",
    github: "https://github.com/Elanchezhian2712/leo-clone", // add if available
    overview: "A clone of Duolingo that allows users to register, learn languages through courses, take quizzes, and track their learning progress. Integrated with payment and authentication features.",
    features: [
      "User registration and authentication with Clerk.",
      "Language course management and quizzes.",
      "Track learning progress and scores.",
      "Payment integration with Stripe.",
      "Responsive and modern UI with Shadcn UI."
    ],
    gallery: [
      "/images/duolingo-gallery-1.png",
      "/images/duolingo-gallery-2.png"
    ],
  },
];
