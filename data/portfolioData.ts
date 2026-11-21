export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  brandLogo: string;
  role: string;
  shortRole: string;
  year: string;
  location: string;
  status: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  portraitUrl: string;
  heroPortraitUrl?: string;
  aboutPortraitUrl?: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  unit?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  pillarNumber: string;
  title: string;
  categoryLabel: string;
  icon: string;
  shadowVariant?: "default" | "orange";
  skills: {
    name: string;
    variant?: "default" | "dark" | "orange" | "lime";
  }[];
}

export interface Project {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  categoryLabel: string;
  inProgress?: boolean;
  description: string;
  techStack: { name: string; highlight?: boolean }[];
  liveDemoUrl: string;
  githubUrl: string;
  cardTheme: "dark" | "light";
  blueprint: {
    domain: string;
    statusText: string;
    details: {
      label: string;
      value: string;
      highlight?: "orange" | "lime";
    }[];
    extraInfo?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  achievements: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  techTags: string;
  description: string;
  badge: string;
  badgeVariant?: "dark" | "orange" | "lime";
}

export interface AboutSectionData {
  sectionTag: string;
  title: string;
  heading: string;
  headingEmphasis: string;
  bio: string;
  locationSubtitle: string;
  engineeringFocus: string[];
  motionFocus: string[];
  signatureText: string;
  portraitUrl?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Mohammed Sahil",
    shortName: "SAHIL",
    brandLogo: "SAHIL.DEV",
    role: "Frontend Developer & Creative Technologist",
    shortRole: "Frontend Developer",
    year: "2026",
    location: "Kerala, India",
    status: "Open to Opportunities",
    email: "mhdsahil8910@gmail.com",
    phone: "+91 8075834041",
    github: "https://github.com/mohdsahildev",
    linkedin: "https://www.linkedin.com/in/mohdsahildev",
    resumeUrl: "/Mohammed_Sahil_Frontend_Developer.pdf",
    portraitUrl: "/images/hero-portrait.png",
    heroPortraitUrl: "/images/hero-portrait.png",
    aboutPortraitUrl: "/images/about-portrait.jpeg",
  },

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],

  hero: {
    metaSubline: "Mohammed Sahil / Frontend Developer / 2026",
    componentPillText: "Component: SahilDev.tsx (Selected)",
    stampText: "✦ HIRE ME ✦ MOHAMMED SAHIL ✦ 2026",
    currentlyBuilding: {
      badge: "CURRENTLY BUILDING",
      title: "FlowForge — Workflow Automation & Observability Platform",
      status: "Status: In Progress",
      version: "v0.9",
    },
    locationTag: "Kerala, India",
    locationDescription: "Crafting responsive, high-performance web applications.",
    headline: "I build fast,",
    headlineEmphasis: "animated interfaces",
    headlineEnd: "with React & Next.js.",
    bio: "Frontend developer in Kerala crafting responsive, high-performance web apps with smooth GSAP and Three.js interactions.",
    floatingTechPills: [
      { name: "React", dotColor: "bg-cyan-400", position: "-left-12 top-10 -rotate-6", variant: "dark" },
      { name: "Next.js", prefix: "▲", position: "-left-14 top-36 rotate-3", variant: "orange" },
      { name: "TS TypeScript", position: "-left-8 bottom-12 -rotate-3", variant: "dark" },
      { name: "Tailwind", dotColor: "bg-white", position: "-right-12 top-28 rotate-6", variant: "orange" },
      { name: "GSAP & Three.js", position: "-right-10 bottom-16 -rotate-6", variant: "lime", hasZap: true },
    ],
  },

  marqueeSkills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Three.js",
    "React Three Fiber",
    "WebGL",
    "Zustand",
    "REST APIs",
  ],

  stats: [
    {
      label: "EXPERIENCE",
      value: "1",
      suffix: "+",
      unit: "Year",
      description: "Professional frontend development experience",
    },
    {
      label: "FEATURED WORK",
      value: "03",
      description: "Featured production & client-grade projects",
    },
    {
      label: "ANIMATION & 3D",
      value: "03",
      description: "Dedicated animation tools: GSAP, Three.js & WebGL",
    },
    {
      label: "RESPONSIVENESS",
      value: "100",
      suffix: "%",
      description: "Desktop, Tablet & Mobile fluid builds delivered",
    },
  ] as StatItem[],

  skillCategories: [
    {
      id: "core",
      pillarNumber: "01",
      categoryLabel: "CORE",
      icon: "Code2",
      title: "Languages",
      skills: [
        { name: "JavaScript (ES6+)", variant: "default" },
        { name: "TypeScript", variant: "dark" },
        { name: "HTML5", variant: "default" },
        { name: "CSS3", variant: "default" },
      ],
    },
    {
      id: "runtime",
      pillarNumber: "02",
      categoryLabel: "FRAMEWORKS",
      icon: "Atom",
      title: "Frameworks & State",
      shadowVariant: "orange",
      skills: [
        { name: "React.js", variant: "orange" },
        { name: "Next.js", variant: "dark" },
        { name: "Redux Toolkit", variant: "default" },
        { name: "Zustand", variant: "default" },
        { name: "React Flow", variant: "default" },
      ],
    },
    {
      id: "design",
      pillarNumber: "03",
      categoryLabel: "STYLING",
      icon: "Palette",
      title: "Styling & UI",
      skills: [
        { name: "Tailwind CSS", variant: "dark" },
        { name: "Bootstrap", variant: "default" },
        { name: "Responsive Web Design", variant: "default" },
        { name: "CSS Animations", variant: "default" },
        { name: "UI Implementation", variant: "default" },
      ],
    },
    {
      id: "motion",
      pillarNumber: "04",
      categoryLabel: "MOTION",
      icon: "Sparkles",
      title: "Motion & 3D",
      skills: [
        { name: "GSAP", variant: "lime" },
        { name: "Three.js", variant: "orange" },
        { name: "React Three Fiber", variant: "orange" },
        { name: "WebGL", variant: "dark" },
      ],
    },
    {
      id: "data",
      pillarNumber: "05",
      categoryLabel: "DATA",
      icon: "Plug",
      title: "Backend & APIs",
      skills: [
        { name: "REST API Integration", variant: "dark" },
        { name: "Authentication & Session Management", variant: "default" },
        { name: "JSON", variant: "default" },
      ],
    },
    {
      id: "devops",
      pillarNumber: "06",
      categoryLabel: "TOOLS",
      icon: "Wrench",
      title: "Development Tools",
      skills: [
        { name: "Git", variant: "default" },
        { name: "GitHub", variant: "default" },
        { name: "VS Code", variant: "default" },
        { name: "Antigravity", variant: "default" },
        { name: "npm", variant: "default" },
        { name: "Vercel", variant: "dark" },
        { name: "Postman", variant: "default" },
        { name: "Figma", variant: "default" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      number: "01",
      tag: "RIDE SHARING & TRAVEL PLATFORM",
      categoryLabel: "FULL-STACK READY FRONTEND",
      title: "SahaYatri",
      subtitle: "Ride Sharing & Travel Coordination Platform",
      description:
        "A ride-sharing platform designed to simplify travel coordination and connect people heading towards similar destinations. Developed the frontend experience with Next.js, focusing on authentication, ride management, interactive interfaces, and real-time notifications.",
      techStack: [
        { name: "Next.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Zustand" },
        { name: "Socket.IO", highlight: true },
        { name: "REST APIs" },
      ],
      liveDemoUrl: "https://sahayatri-gilt.vercel.app",
      githubUrl: "https://github.com/mohdsahildev/sahayatri",
      cardTheme: "dark",
      blueprint: {
        domain: "sahayatri-gilt.vercel.app",
        statusText: "Active Route",
        details: [
          { label: "Origin → Destination:", value: "Kochi → Kozhikode", highlight: "orange" },
          { label: "Seats Remaining:", value: "3 of 4 available", highlight: "lime" },
          { label: "State Sync:", value: "Zustand & Socket.IO" },
        ],
      },
    },
    {
      number: "02",
      tag: "3D TYPING EXPERIENCE",
      categoryLabel: "INTERACTIVE 3D & MOTION",
      inProgress: false,
      title: "WebType",
      subtitle: "A 3D Interactive Typing Experience",
      description:
        "An experimental typing-speed experience that combines typing challenges with an immersive 3D environment. Built using React Three Fiber, featuring a procedural city environment, interactive gameplay mechanics, and animated 3D character movement.",
      techStack: [
        { name: "Next.js" },
        { name: "React" },
        { name: "Three.js", highlight: true },
        { name: "React Three Fiber", highlight: true },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "GSAP" },
      ],
      liveDemoUrl: "https://webtype-delta.vercel.app/",
      githubUrl: "https://github.com/mohdsahildev/webtype",
      cardTheme: "light",
      blueprint: {
        domain: "webtype-delta.vercel.app",
        statusText: "3D Canvas Active",
        details: [
          { label: "RENDER ENGINE", value: "Three.js / R3F" },
          { label: "GAMEPLAY CHOREO", value: "60 FPS GSAP", highlight: "orange" },
        ],
        extraInfo: "Procedural 3D City Environment & Character Rigging",
      },
    },
    {
      number: "03",
      tag: "E-COMMERCE WEB APPLICATION",
      categoryLabel: "CLIENT ARCHITECTURE",
      title: "Auralis",
      subtitle: "E-Commerce Web App",
      description:
        "Sleek e-commerce client focused on friction-free product browsing, faceted category filtering, robust shopping cart session management, and mocked persistent REST endpoints.",
      techStack: [
        { name: "React.js" },
        { name: "JavaScript" },
        { name: "CSS" },
        { name: "JSON Server" },
      ],
      liveDemoUrl: "https://auralis-opal.vercel.app/",
      githubUrl: "https://github.com/mohdsahildev/auralis",
      cardTheme: "light",
      blueprint: {
        domain: "auralis-opal.vercel.app",
        statusText: "Cart: 2 items",
        details: [
          { label: "Acoustic Frequency Unit", value: "$240.00", highlight: "orange" },
          { label: "Studio Reference Cable", value: "$45.00", highlight: "orange" },
        ],
      },
    },
  ] as Project[],

  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Bridgeon Solutions LLP",
      location: "Kerala, India",
      period: "July 2025 – Present",
      isCurrent: true,
      achievements: [
        "Developed responsive and interactive web interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",
        "Built reusable component architectures and implemented efficient client-side state management using Redux and Zustand.",
        "Integrated REST APIs and implemented frontend authentication, session management, and data-driven interfaces.",
        "Developed interactive workflow interfaces using React Flow and implemented animations using GSAP.",
        "Collaborated with developers through Git and GitHub, contributing to team-based development projects.",
      ],
    },
  ] as ExperienceItem[],

  services: [
    {
      number: "01",
      title: "Responsive Web Apps",
      techTags: "React.js / Next.js / Tailwind CSS",
      description:
        "Crafting modular, lightning-fast web applications built for zero layout shifts, fluid cross-device adaptability, and clean component structures.",
      badge: "Cross-Browser",
      badgeVariant: "dark",
    },
    {
      number: "02",
      title: "Interactive Animations & 3D",
      techTags: "GSAP / Three.js / React Three Fiber",
      description:
        "Infusing tactile energy into user interfaces with physics-based scroll choreography, micro-interactions, and lightweight 3D canvas visualizers.",
      badge: "60 FPS Motion",
      badgeVariant: "orange",
    },
    {
      number: "03",
      title: "API Integration & State",
      techTags: "REST APIs / Auth / Zustand / Redux Toolkit",
      description:
        "Connecting client interfaces with secure REST endpoints, session tokens, JWTs, and deterministic centralized state stores with zero lag.",
      badge: "Secure State",
      badgeVariant: "dark",
    },
    {
      number: "04",
      title: "Reusable UI Component Architecture",
      techTags: "Design Tokens / TypeScript / Agile",
      description:
        "Engineering bulletproof UI design systems with reusable atomic primitives, typed variant props, and seamless collaboration inside Agile workflows.",
      badge: "Scalable Design",
      badgeVariant: "lime",
    },
  ] as ServiceItem[],

  about: {
    sectionTag: "BIOGRAPHY & CRAFT",
    title: "05 / ABOUT ME",
    locationSubtitle: "BASED IN KERALA, INDIA",
    heading: "Who is",
    headingEmphasis: "Sahil?",
    bio: "I'm a frontend developer passionate about building modern, interactive, and visually engaging digital experiences. My journey started with an interest in web design and the possibilities of turning ideas into functional interfaces. Since then, I've worked with React and Next.js to develop scalable web applications, while exploring GSAP and Three.js to bring creativity and motion into the browser. I enjoy combining engineering with visual storytelling, focusing on thoughtful interactions, clean architecture, and experiences that feel as good as they function.",
    engineeringFocus: [
      "Modular & Reusable Component Architecture",
      "Responsive & Performance-Conscious Interfaces",
      "Scalable State Management & API Integration",
    ],
    motionFocus: [
      "GSAP Timeline Animations & Interaction Design",
      "Three.js & WebGL Experiences",
      "Interactive 3D Environments & Creative Web Development",
    ],
    signatureText: "Sahil — Kerala, 2026",
    portraitUrl: "/images/about-portrait.jpeg",
  } as AboutSectionData,
};
