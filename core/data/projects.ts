import type { ProjectData } from "@/components/features/home/Projects";

export const PROJECTS = [
  {
    id: "01",
    title: "Salaty",
    isFreelance: false,
    description: "Modern Islamic Prayer App — React Native, Expo, NativeWind, Zustand",
    bullets: [
      { text: "Developed a full-featured prayer times application with real-time GPS calculations using Aladhan API" },
      { text: "Implemented a multilingual interface (English & Arabic) with dynamic RTL support and localization" },
      { text: "Built a daily prayer tracker with data visualization to help users monitor their spiritual progress" },
      { text: "Engineered a robust notification system for Adhan alerts with customizable alert settings" },
      { text: "Designed a premium, high-performance adaptive UI with dark mode support using NativeWind" },
    ],
    liveUrl: null,
    repoUrl: "https://github.com/Amrsamy19/Salaty",
  },
  {
    id: "02",
    title: "Hawash Law",
    isFreelance: true,
    description:
      "Legal Services Platform — Next.js, TypeScript, Tailwind CSS, Framer Motion",
    bullets: [
      { text: "Developed a high-performance, SEO-optimized landing page using Next.js App Router" },
      { text: "Implemented fluid UI animations with Framer Motion to enhance engagement and brand authority" },
      { text: "Engineered a responsive, accessible design system using Tailwind CSS for all device types" },
      { text: "Optimized Core Web Vitals and load speeds via Next.js Image and efficient architecture" },
    ],
    liveUrl: "https://www.hawashlawfirm.com/",
    repoUrl: null,
  },
  {
    id: "03",
    title: "Jawla",
    isFreelance: true,
    description:
      "Admin Dashboard — React, TypeScript, Tailwind CSS, Redux Toolkit",
    bullets: [
      { text: "Developed a comprehensive administrative dashboard for managing travel and tourism data" },
      { text: "Implemented complex state management using Redux Toolkit for seamless data flow and UI synchronization" },
      { text: "Built modular, reusable UI components focusing on data visualization and efficient CRUD operations" },
      { text: "Ensured high-performance data handling and a fully responsive interface across all screen sizes" },
    ],
    liveUrl: null,
    repoUrl: "https://github.com/Mo-metwally/jawla-admin",
  },
  {
    id: "04",
    title: "EcoSphere",
    isFreelance: false,
    description:
      "SaaS Web Platform — Next.js, TypeScript, Tailwind CSS, MongoDB, AWS",
    bullets: [
      { text: "Architected scalable frontend using Next.js App Router" },
      { text: "Implemented secure authentication (NextAuth + JWT) with protected routes" },
      { text: "Built accessible, reusable UI components with performance optimizations" },
      { text: "Designed modular architecture to support scalability and future feature expansion" },
      { text: "Deployed on AWS & Vercel with optimized performance and SEO best practices" },
    ],
    liveUrl: "http://eco-sphere-kappa.vercel.app",
    repoUrl: null,
  },
  {
    id: "05",
    title: "Plastikat Admin Dashboard",
    isFreelance: false,
    description: "React, TypeScript, Tailwind CSS, Auth0",
    bullets: [
      { text: "Built a role-based admin dashboard used to manage application data with full CRUD operations" },
      { text: "Implemented full CRUD workflows with proper loading and error states" },
      { text: "Ensured responsive and accessible UI across devices" },
    ],
    liveUrl: null,
    repoUrl: "https://github.com/Amrsamy19/plastikat-dashboard",
  },
] as const satisfies readonly ProjectData[];
