import type { ExperienceData } from "@/components/features/home/Experience";

export const EXPERIENCE = [
  {
    company: "Simple Way",
    role: "Front End Developer",
    startDate: "2026-07-01",
    endDate: undefined,
    isCurrent: true,
    location: "El-Shorouk, Cairo",
    logo: "/simpleway.jpg",
    bullets: [
      "Optimized nested workflow task rendering by building a custom useDelegatedTasks hook, utilizing Promise.all to parallelize assignment fetching and avoid sequential API waterfalls.",
      "Architected a dynamic Workflow Engine UI with a scalable WorkflowActionDrawer component, abstracting complex REST API payloads to handle 10+ distinct workflow actions including Delegation and Approvals.",
    ],
  },
  {
    company: "EngTechno",
    role: "Full Stack Developer",
    startDate: "2026-04-01",
    endDate: undefined,
    isCurrent: true,
    location: "Cairo, Egypt",
    logo: "/engtechno.jpg",
    bullets: [
      "Implemented locale-aware background images using PayloadCMS v3's native localized field, enabling per-locale content for a bilingual EN/AR luxury automotive platform.",
      "Debugged and resolved scroll-triggered animation conflicts between react-awesome-reveal and custom IntersectionObserver logic, fixing a transform race condition using scale-x/origin-left approach.",
      "Built a token-based Tailwind color system with tailwind-merge and CVA for a reusable component library across two client projects.",
    ],
  },
  {
    company: "Information Technology Institute (ITI)",
    role: "Full Stack Developer Trainee",
    startDate: "2025-07-01",
    endDate: "2025-11-01",
    isCurrent: false,
    location: "Giza, Egypt",
    logo: "/iti.jpg",
    bullets: [
      "Built 3+ responsive web applications using React, Next.js, and TypeScript with mobile-first layouts using CSS Grid and Flexbox.",
      "Integrated REST APIs and implemented NextAuth/JWT authentication flows with protected routes and session management.",
    ],
  },
  {
    company: "Cairo University",
    role: "Bachelor of Computer Science",
    startDate: "2018-09-01",
    endDate: "2022-06-01",
    isCurrent: false,
    location: "Giza, Egypt",
    logo: "/cairo-university.png",
    bullets: [],
  },
] as const satisfies readonly ExperienceData[];
