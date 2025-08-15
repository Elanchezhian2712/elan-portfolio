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
  purpose: string;
  challenges: { challenge: string; solution: string }[];
  architecture: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Secure AI-Powered Bookmark Manager",
    slug: "bookmark-manager",
    desc: "A secure, serverless bookmark manager with voice & NLP commands, Google Drive integration, and multi-file support.",
    tech: ["Next.js", "Gemini AI", "CryptoJS",  "Google Drive API", "Framer Motion", "Google Cloud Console"],
    image: "/Images/Secure AI-Powered Bookmark Manager.png",
    link: "https://drivegenie.vercel.app/",
    github: "https://github.com/Elanchezhian2712/Drive_Genie",
    overview: "Developed a secure, serverless bookmarking application that leverages Google Drive for encrypted storage and Gemini AI for natural language processing, enabling users to manage bookmarks and folders using voice commands or text prompts.",
    features: [
      "Zero-Knowledge Encryption with client-side AES on Google Drive.",
      "AI-Powered Management via Gemini 1.5 (voice & text commands).",
      "Optimized Frontend Performance using React memoization and Next.js image optimization.",
      "Secure Google OAuth 2.0 Login with privacy-focused scoped permissions.",
      "Automatic Vault Locking for enhanced session security."
    ],
    gallery: ["/Images/bookmark-gallery-1.png", "/Images/bookmark-gallery-2.png"],
    purpose: "I wanted to solve the problem of securely managing bookmarks across devices without trusting a third-party service with my data. This project was born out of a need for a zero-knowledge bookmarking tool that was both powerful and intuitive, using AI to make organization effortless.",
    challenges: [
      {
        challenge: "Implementing a 'zero-knowledge' security model where even I, the developer, couldn't access user data.",
        solution: "I implemented client-side AES encryption using CryptoJS before any data was sent to the Google Drive API. This ensured that all stored files are unreadable without the user's client-side key, achieving true data privacy."
      },
      {
        challenge: "Making the AI interaction feel natural and responsive for managing bookmarks via voice commands.",
        solution: "I engineered specific prompts for the Gemini AI API and created a parsing layer to convert its JSON output into executable application commands. This decoupled the AI logic from the application's core functions, making it more reliable and scalable."
      }
    ],
    architecture: "I chose Next.js for its powerful hybrid of Server and Client components, allowing for fast initial loads and rich interactivity. To create a cost-effective and truly serverless backend, I leveraged the Google Drive API as an encrypted file store, which offloaded the complexity of managing a dedicated database.",
    // videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
  },

  // --- PROJECT 2: VIRTUAL ASSISTANT ---
  {
    title: "Virtual Assistant for Individuals with Disabilities",
    slug: "virtual-assistant",
    desc: "AI-powered desktop assistant for blind, deaf, and non-verbal users with speech-to-text, image recognition, and hands-free control.",
    tech: ["Flask", "Python", "Bootstrap", "REST APIs"],
    image: "/Images/virtual-assistant.png",
    link: "/projects/virtual-assistant",
    github: "https://github.com/Elanchezhian2712/VSIPC",
    overview: "This desktop application enhances accessibility for users with visual, hearing, or speech impairments. It integrates AI services to provide tools that can be controlled via voice, gestures, or text.",
    features: [
      "AI-powered desktop assistant for users with disabilities.",
      "Real-time speech-to-text and voice interaction.",
      "Image and speech processing for responsive task control.",
      "Modular Flask backend with REST APIs for automation.",
      "User testing showed a 50% improvement in task completion efficiency for target users."
    ],
    gallery: ["/Images/va-gallery-1.png", "/Images/va-gallery-2.png"],
    purpose: "Traditional computer interfaces can be a significant barrier for individuals with disabilities. My goal was to build a tool that levels the playing field, using AI to provide a more natural and accessible way for users to interact with their digital environment.",
    challenges: [
        {
            challenge: "Achieving low-latency, real-time speech recognition was critical for a fluid user experience. Any delay would render the hands-free control ineffective.",
            solution: "I engineered a multi-threaded architecture in Python. Audio input was captured and processed on a separate thread, which prevented the main UI from freezing and ensured commands were executed with minimal perceptible delay."
        },
        {
            challenge: "The system needed to be highly accurate for diverse accents and in environments with background noise.",
            solution: "I implemented audio pre-processing techniques, including noise reduction and normalization, before sending data to the speech recognition API. This improved recognition accuracy by over 25% in test environments."
        }
    ],
    architecture: "Flask was chosen for its lightweight nature, making it ideal for creating a modular REST API backend. This design decoupled the complex AI processing logic from the front-end interface, allowing for independent testing and maintenance of each component.",
    // videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
  },

  // --- PROJECT 3: EMPLOYEE MANAGEMENT SYSTEM ---
  {
    title: "Employee Management System",
    slug: "employee-management-system",
    desc: "The Employee Management System (EMS) is a MERN-stack web app for efficiently managing employees, teams, leaders, and company targets.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/Images/Employee_Management_System.png",
    link: "/projects/employee-management-system",
    github: "https://github.com/Elanchezhian2712/Emp-Frontend",
    overview: "A full-stack MERN application designed to help companies manage employees, teams, and targets efficiently. Includes dashboards, CRUD operations, and reporting features.",
    features: [
      "Full CRUD functionality for managing employee, team, and leader records.",
      "Role-based access control to ensure data security and appropriate user permissions.",
      "Interactive dashboards for visualizing team structures and performance targets.",
      "Built with a responsive UI using Tailwind CSS for a seamless experience on any device."
    ],
    gallery: ["/Images/ems-gallery-1.png", "/Images/ems-gallery-2.png"],
    purpose: "Many small businesses rely on error-prone spreadsheets for employee management. The purpose of this system was to provide a centralized, scalable, and secure single source of truth for managing all aspects of a company's workforce and performance goals.",
    challenges: [
        {
            challenge: "Maintaining a consistent and responsive state across multiple, interconnected components like employee lists, team dashboards, and reporting widgets.",
            solution: "I implemented React's Context API combined with the useReducer hook to create a predictable, centralized state management system. This approach minimized prop-drilling and ensured UI consistency across the application."
        },
        {
            challenge: "Designing secure API endpoints to handle sensitive employee data and enforce role-based access.",
            solution: "I implemented a JWT (JSON Web Token) authentication strategy on the Express backend. Custom middleware was created to protect routes by verifying the user's role and permissions before allowing access to any CRUD operations."
        }
    ],
    architecture: "The MERN stack was selected to build a full-stack JavaScript application, enabling a unified development experience. MongoDB's flexible schema was ideal for handling diverse employee data, while Node.js/Express provided a robust, event-driven backend for the REST API.",
    // videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
  },

  // --- PROJECT 4: DUOLINGO CLONE ---
  {
    title: "Build a Duolingo Clone",
    slug: "duolingo-clone",
    desc: "Interactive platform for language learning. Features include user registration, course management, quizzes, and progress tracking.",
    tech: ["Next.js", "Shadcn UI", "PostgreSQL", "AI", "Clerk", "Stripe" ],
    image: "/Images/Build a Duolingo Clone.png",
    link: "https://leo-clone.vercel.app/",
    github: "https://github.com/Elanchezhian2712/leo-clone",
    overview: "A clone of Duolingo that allows users to register, learn languages through courses, take quizzes, and track their learning progress. Integrated with payment and authentication features.",
    features: [
      "Secure user registration and authentication with Clerk.",
      "Dynamic language course and lesson management.",
      "Interactive quizzes with real-time progress tracking.",
      "Full payment and subscription lifecycle integration with Stripe.",
      "Modern, responsive UI built with Shadcn UI and Tailwind CSS."
    ],
    gallery: ["/Images/duolingo-gallery-1.png", "/Images/duolingo-gallery-2.png"],
    purpose: "This project's goal was to deconstruct and rebuild a feature-rich, modern web application to demonstrate proficiency in building a complete Software-as-a-Service (SaaS) product, including user authentication, complex database schemas, and payment processing.",
    challenges: [
        {
            challenge: "Designing a scalable PostgreSQL schema to efficiently track user progress across multiple courses, lessons, and quizzes.",
            solution: "I designed a normalized relational database schema with clear foreign key constraints. This ensured data integrity and allowed for efficient querying of user progress, such as fetching a user's entire course status in a single, optimized query."
        },
        {
            challenge: "Securely integrating disparate third-party services like Clerk for authentication and Stripe for payments, while ensuring a consistent user session.",
            solution: "I used Stripe Webhooks to listen for successful payment events asynchronously. This triggered a server action to update the user's subscription status in the PostgreSQL database, creating a robust, event-driven system that decoupled the payment process from the core application."
        }
    ],
    architecture: "The tech stack mirrors modern SaaS development practices. Next.js provided the server-side rendering and API routes, Clerk handled the complexity of user management, and Stripe managed the entire payment lifecycle. PostgreSQL was selected for its data integrity and robustness as a relational database.",
    // videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
  },
];