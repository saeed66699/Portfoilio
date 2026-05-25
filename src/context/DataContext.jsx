import React, { createContext, useContext } from "react";

// Static data for all sections
const portfolioData = {
  header: {
    name: "Saeed Ahmad",
    title: "Team Lead · Senior Software Engineer · Cloud Architect",
    description: "I transform ideas into high-performance digital products. From architecting scalable backend systems to crafting beautiful frontend experiences, I merge clean code with creative problem-solving to deliver results that matter. If you're building something bold, ambitious, or downright disruptive — I'm all in.",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/",
        icon: "github"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/",
        icon: "linkedin"
      },
      {
        platform: "Email",
        url: "https://mail.google.com/",
        icon: "email"
      }
    ],
    resumeUrl: "/prototype.pdf"
  },
  
  about: {
    professional: {
      title: "Professional Experience",
      content: [
        "Currently serving as <b>Team Lead at Antematter</b>, orchestrating cross-functional collaboration across frontend, backend, QA, and design—bridging engineering excellence with product innovation.",
        "Former <b>Tech Lead at Status200</b>, where I designed scalable backend systems using AWS Lambda and implemented fault-tolerant, cloud-native solutions.",
        "Accomplished freelancer on Upwork, building real-time Chrome extensions, robust full-stack applications, and SaaS tools for clients worldwide.",
        "Contributed to high-impact projects at <b>QLU.ai</b> and <b>SkipQ</b>, specializing in modern stacks like MERN, serverless architecture, and cloud-first development."
      ]
    },
    education: {
      title: "Education",
      content: [
        "I hold a <b>Bachelor's degree in Software Engineering</b> from <b>Sukkur IBA University</b>, where I built a strong foundation in software design, systems thinking, and computational logic.",
        "My education extends beyond the classroom—refined through real-world experience, hands-on projects, and continuous exploration of emerging tools, frameworks, and architectures."
      ]
    }
  },

  featured: {
    title: "Featured Projects",
    projects: [
      {
        title: "GOS Fantasy Sports",
        role: "Tech Lead",
        icon: "game",
        description: "Fantasy horse racing platform with real-time data, secure payments, and gamified experience.",
        tech: ["Next", "React", "TypeScript", "NestJS", "MongoDB", "Firebase", "Stripe", "SignaturePay", "Radar", "AWS"]
      },
      {
        title: "RoofTracker – Interactive Roofing Maps (USA)",
        role: "Full Stack Developer",
        icon: "map",
        description: "Location-aware roofing service platform with live map interactions, custom layers, and geo-filtering for seamless user experience.",
        tech: ["Next.js", "Node.js (TypeScript)", "Tailwind CSS", "Mapbox"]
      },
      {
        title: "Baker's Bot – FIFA Snipe Bot",
        role: "Lead Developer",
        icon: "bot",
        description: "A sophisticated sniping bot for FIFA Ultimate Team with secure payments, real-time player acquisition, and comprehensive admin/user dashboard.",
        tech: ["React", "Chrome Extension", "MongoDB", "Stripe", "SendGrid", "AWS"]
      },
      {
        title: "Enable LifeCare",
        role: "Full Stack Developer",
        icon: "health",
        description: "Healthcare app for the Australian market featuring role-based dashboards, smart data presentation, and AI-powered assistance.",
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "ChatGPT"]
      },
      {
        title: "BreakComp – Web Scrappy",
        role: "Tech Lead",
        icon: "scraper",
        description: "Custom scraping suite extracting data from 45+ websites with IP rotation, error handling, and monitoring UI.",
        tech: ["React.js", "Node.js", "Express.js", "Puppeteer", "BrightData", "MongoDB"]
      },
      {
        title: "IELC",
        role: "Frontend Developer",
        icon: "edu",
        description: "Modern educational platform offering personalized English courses with interactive content and mobile-first design.",
        tech: ["Next.js 14", "Tailwind CSS", "Vercel", "Mobile-First Design"]
      },
      {
        title: "Centerline",
        role: "Full Stack Engineer",
        icon: "house",
        description: "Property management system featuring 3D house views and comprehensive user dashboards for real estate operations.",
        tech: ["React", "NestJS", "TypeScript", "Redux Toolkit", "React Query", "Swagger"]
      },
      {
        title: "QMail",
        role: "Senior Developer",
        icon: "mail",
        description: "Lead generation platform combining LinkedIn messaging and email campaigns with sequence automation.",
        tech: ["Node.js", "Sequelize", "PostgreSQL", "TypeScript", "Next.js", "SCSS"]
      },
      {
        title: "QLU UI Library",
        role: "Frontend Architect",
        icon: "spine",
        description: "Reusable component library built for rapid UI development with consistent design language and accessibility.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"]
      }
    ]
  },

  technicalSkills: {
    title: "Technical Skills",
    categories: {
      languages: [
        { name: "JavaScript (ES6+)", percent: 95 },
        { name: "TypeScript", percent: 94 },
        { name: "SQL", percent: 93 },
        { name: "PostgreSQL", percent: 93 },
        { name: "MySQL", percent: 93 },
        { name: "MongoDB", percent: 93 }
      ],
      frontend: [
        { name: "React.js", percent: 95 },
        { name: "Next.js", percent: 94 },
        { name: "Redux", percent: 93 },
        { name: "Ant Design", percent: 93 },
        { name: "Material UI", percent: 93 },
        { name: "Tailwind CSS", percent: 93 },
        { name: "Bootstrap", percent: 93 }
      ],
      backend: [
        { name: "Node.js", percent: 95 },
        { name: "Express.js", percent: 94 },
        { name: "NestJS", percent: 93 },
        { name: "REST APIs", percent: 93 },
        { name: "WebSockets", percent: 93 },
        { name: "JWT Authentication", percent: 93 }
      ],
      cloud: [
        { name: "AWS (Amplify, EC2, Lambda, CDN)", percent: 95 },
        { name: "Firebase", percent: 94 },
        { name: "Docker", percent: 93 },
        { name: "Vercel", percent: 93 },
        { name: "Netlify", percent: 93 }
      ],
      tools: [
        { name: "Git", percent: 95 },
        { name: "GitHub", percent: 94 },
        { name: "Bitbucket", percent: 93 },
        { name: "Jira", percent: 93 },
        { name: "Postman", percent: 93 },
        { name: "JEST", percent: 93 },
        { name: "Puppeteer", percent: 93 }
      ],
      other: [
        { name: "Stripe Integration", percent: 95 },
        { name: "OAuth", percent: 94 },
        { name: "Geolocation APIs", percent: 93 },
        { name: "Email Templating", percent: 93 },
        { name: "PWA (Progressive Web Apps)", percent: 93 }
      ]
    }
  },

  contact: {
    title: "Contact Me",
    image: "https://static.vecteezy.com/system/resources/previews/034/954/571/non_2x/ai-generated-business-man-character-profile-free-png.png",
    formTitle: "Send Message",
    footerText: "I'm always open to discussing new opportunities, creative ideas, or collaborations. Feel free to reach out if you want to connect!"
  },

  footer: {
    title: "Get In Touch",
    description: "I am dedicated to creating innovative software solutions and exploring emerging technologies. Whether you're looking to discuss an idea, collaborate on a project, or simply connect, I welcome meaningful conversations. Let's work together to bring impactful solutions to life.",
    contactLinks: [
      {
        platform: "Email",
        url: "https://mail.google.com/",
        icon: "email",
        text: "Email"
      },
      {
        platform: "GitHub",
        url: "https://github.com/",
        icon: "github",
        text: "GitHub"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/",
        icon: "linkedin",
        text: "LinkedIn"
      },
      {
        platform: "Phone",
        url: "tel:+1234567890",
        icon: "phone",
        text: "Phone"
      }
    ]
  }
};

// Create context
const DataContext = createContext();

// Provider component
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={portfolioData}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export default DataContext;