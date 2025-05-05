export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#educations" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring the World of Interactive Motion in Web Development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title:
      "SaaS Website Builder, Project Management And Dashboard With Stripe using Nextjs14, Bun, Stripe Connect, Prisma, MySQL, Tailwind",
    des: "Our multivendor B2B2B SaaS platform offers website and funnel building, hosting, Stripe integration, role-based access, custom dashboards, project management, lead generation, performance metrics, agency management, custom checkouts, media storage, and a landing page, all with light and dark modes.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/bun.svg", "/mysql.svg", "/c.svg"],
    link: "https://agencyfunnel.vercel.app/",
  },
  {
    id: 2,
    title: "Build a Duolingo Clone With Nextjs, React, Drizzle, Stripe",
    des: "Our application features Next.js 14, AI voices, Shadcn UI, Clerk auth, sound effects, hearts and XP systems, leaderboards, quest milestones, a shop, pro tier with Stripe, admin dashboard, DrizzleORM with PostgresDB, Vercel deployment, mobile responsiveness, AI characters, exit confirmation, lesson practice to regain hearts, and a landing page.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/elephant.png", "/c.svg"],
    link: "https://leo-clone.vercel.app/",
  },
  {
    id: 3,
    title: "Employee Management System",
    des: "The Employee Management System (EMS) project is a comprehensive solution designed to streamline and enhance the efficiency of managing employee-related tasks within an organization.",
    img: "/p3.png",
    iconLists: ["/mdb.svg", "/ex.svg", "/re.svg", "/nodejs-icon.svg"],
    link: "https://github.com/Elanchezhian2712/Emp-Frontend",
  },
  {
    id: 4,
    title: "Virtual assistance for individuals with disabilities",
    des: "Empowering disabled individuals with AI-driven accessible computing for inclusivity.",
    img: "/p4.png",
    iconLists: ["/py.svg", "/fl.svg", "/ht.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/Elanchezhian2712/VSIPC",
  },
];

export const educations = [
  {
    quote:
      "Studying MCA at Periyar University has been an enriching experience, blending theory with hands-on learning. With esteemed faculty and top-notch facilities, it's the perfect environment for honing my computer science skills. I chose Periyar for its stellar reputation in technology and dedication to fostering innovation in education.",
    name: "Periyar University",
    title: "Aug 2022 - Jul 2024",
  },
  {
    quote:
      "My BSc in Computer Science from Vysya College paved the way for my tech career. Engaging in extracurriculars like the Computer Science Club and Coding Competition Team honed my teamwork and leadership skills alongside academics. Vysya College offered a nurturing environment where my tech passion flourished, preparing me for success in the field.",
    name: "Vysya College",
    title: "Jun 2019 - Jun 2022",
  },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
   {
    id: 1,
    title: "Software Developer - Mahima Technology Pvt Ltd",
    desc: "Spearheaded time-tracking system development with role-based authentication, boosting efficiency by 20%, optimizing UI/UX, integrating AI for data extraction, Google Drive API, and improving performance with asynchronous processing.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Web Development Intern - Rakumura IT Solutions",
    desc: "Assisted in the development of a web-based platform using Next.js and Remix.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Python Programming Intern - CodSoft",
    desc: "As a Python Programming Intern at CodSoft, I engineered and implemented a comprehensive suite of applications, including a to-do list, an advanced calculator with scientific functions, a password generator, and an engaging quiz game.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Incubation Program Participant",
    desc: "As a participant in the Innovation Voucher Programme, I executed diverse projects and secured significant funding by increasing project success rates by 15% through market analysis, ideation, and investor pitches.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Elanchezhian2712",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/elanchezhian-dev/",
  },
];
