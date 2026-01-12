// app/data/projects.ts

export interface GalleryItem {
  type: "image" | "video";
  src: string;
}

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
  gallery: GalleryItem[]; 
  purpose: string;
  challenges: { challenge: string; solution: string }[];
  architecture: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    "title": "Secure, AI-Powered Document & Bookmark Vault",
    "slug": "secure-ai-vault",
    "desc": "A zero-knowledge, AI-powered vault using Google Drive for encrypted storage, featuring OCR for documents and natural language commands.",
    "tech": ["Next.js", "Gemini AI", "Tesseract.js", "CryptoJS", "Google Drive API", "Framer Motion", "OTPAuth","Google Cloud Console"],
    "image": "/Images/Secure AI-Powered Bookmark Manager.png",
    "link": "https://drivegenie.vercel.app/",
    "github": "https://github.com/Elanchezhian2712/Drive_Genie",
    "overview": "Developed a secure, serverless application that transforms a user's Google Drive into an end-to-end encrypted vault. It leverages Gemini AI for natural language management and client-side OCR to automatically extract data from uploaded documents, such as IDs, receipts, and certificates.",
    "features": [
      "Zero-Knowledge Architecture with client-side AES encryption on Google Drive.",
      "AI-Powered OCR to automatically parse and structure data from uploaded images.",
      "Natural Language Management using voice or text commands via Gemini 2.5 Pro.",
      "Advanced Security including 2-Factor Authentication (2FA) and configurable inactivity timeouts.",
      "Optimized and Responsive UI built with Next.js and Framer Motion.",
      "Secure Authentication using Google OAuth 2.0 with minimal, privacy-focused permissions."
    ],
    gallery: [
      { type: "image", src: "/Images/bookmark-gallery-1.png" },
      { type: "image", src: "/Images/bookmark-gallery-2.png" }
    ],
    "purpose": "I built this project to solve the problem of securely managing sensitive information—from bookmarks to personal documents—without trusting a third-party service. My goal was to create a zero-knowledge tool that uses AI to eliminate tedious data entry and make organization effortless, giving users full control over their data.",
    "challenges": [
      {
        "challenge": "Implementing a 'zero-knowledge' security model to ensure absolute user privacy.",
        "solution": "I architected a client-side encryption flow using CryptoJS. All data is encrypted with a user's Master Password *before* being transmitted to the Google Drive API. This means the stored files are unreadable ciphertext to anyone but the user, achieving true data sovereignty."
      },
      {
        "challenge": "Automating data entry from various uploaded documents like IDs and receipts.",
        "solution": "I created a client-side OCR pipeline using Tesseract.js that pre-processes images in-browser (enhancing contrast and converting to grayscale) for accuracy. The extracted text is then passed to a Gemini AI model with an expert-tuned prompt, which intelligently parses and structures the data into key-value pairs."
      },
      {
        "challenge": "Ensuring the AI interaction for managing the vault was both powerful and reliable.",
        "solution": "I engineered a sophisticated prompting system for the Gemini API that combines a 'knowledge base' of common document fields with a 'few-shot' example. This guides the AI to produce consistent JSON output, which is then handled by a robust parsing layer that translates the AI's response into executable application commands."
      }
    ],
    "architecture": "I chose Next.js for its performant hybrid of Server and Client components, enabling a fast initial load and a highly interactive UI. To maintain a truly serverless and cost-effective backend, the Google Drive API serves as a personal, encrypted database for each user. This innovative approach offloads the cost and complexity of database management while placing the user in full control of their own data.",
    // "videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
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
    gallery: [
      { type: "image", src: "/Images/va-gallery-1.png" },
      { type: "image", src: "/Images/va-gallery-2.png" },
      { type: "video", src: "/video/vsi.mp4" }
    ],

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
     gallery: [
      { type: "image", src: "/Images/ems-gallery-1.png" },
      { type: "image", src: "/Images/ems-gallery-2.png" }
    ],
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
    gallery: [
      { type: "image", src: "/Images/duolingo-gallery-1.png" },
      { type: "image", src: "/Images/duolingo-gallery-2.png" }
    ],
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