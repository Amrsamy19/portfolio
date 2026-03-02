export const PROJECTS = [
  {
    id: "01",
    name: "Hawash Law",
    freelance: true,
    description:
      "Legal Services Platform — Next.js, TypeScript, Tailwind CSS, Framer Motion",
    bullets: [
      "Developed a high-performance, SEO-optimized landing page using Next.js App Router",
      "Implemented fluid UI animations with Framer Motion to enhance engagement and brand authority",
      "Engineered a responsive, accessible design system using Tailwind CSS for all device types",
      "Optimized Core Web Vitals and load speeds via Next.js Image and efficient architecture",
    ],
    live: "https://www.hawashlawfirm.com/",
    repo: null,
  },
  {
    id: "02",
    name: "Jawla",
    freelance: true,
    description:
      "Admin Dashboard — React, TypeScript, Tailwind CSS, Redux Toolkit",
    bullets: [
      "Developed a comprehensive administrative dashboard for managing travel and tourism data",
      "Implemented complex state management using Redux Toolkit for seamless data flow and UI synchronization",
      "Built modular, reusable UI components focusing on data visualization and efficient CRUD operations",
      "Ensured high-performance data handling and a fully responsive interface across all screen sizes",
    ],
    live: null,
    repo: "https://github.com/Mo-metwally/jawla-admin",
  },
  {
    id: "03",
    name: "EcoSphere",
    freelance: false,
    description:
      "SaaS Web Platform — Next.js, TypeScript, Tailwind CSS, MongoDB, AWS",
    bullets: [
      "Architected scalable frontend using Next.js App Router",
      "Implemented secure authentication (NextAuth + JWT) with protected routes",
      "Built accessible, reusable UI components with performance optimizations",
      "Designed modular architecture to support scalability and future feature expansion",
      "Deployed on AWS & Vercel with optimized performance and SEO best practices",
    ],
    live: "http://eco-sphere-kappa.vercel.app",
    repo: null,
  },
  {
    id: "04",
    name: "Plastikat Admin Dashboard",
    freelance: false,
    description: "React, TypeScript, Tailwind CSS, Auth0",
    bullets: [
      "Built a role-based admin dashboard used to manage application data with full CRUD operations",
      "Implemented full CRUD workflows with proper loading and error states",
      "Ensured responsive and accessible UI across devices",
    ],
    live: null,
    repo: "https://github.com/Amrsamy19/plastikat-dashboard",
  },
] as const;
