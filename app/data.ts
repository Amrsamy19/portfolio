export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "1+", label: "Years of Experience" },
  { value: "4+", label: "Completed Projects" },
  { value: "500+", label: "Hours of Code" },
] as const;

export const STACK = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Radix UI",
    "Redux Toolkit",
    "HTML5",
    "CSS3",
  ],
  backend: ["Node.js", "NestJS", "REST APIs", "GraphQL"],
  database: ["MongoDB", "PostgreSQL", "Prisma"],
  tools: ["Git", "GitHub", "AWS", "Vercel", "Auth0", "NextAuth"],
} as const;

export const EXPERIENCE = [
  {
    company: "Information Technology Institute (ITI)",
    role: "Full Stack Development (MERN)",
    period: "July 2025 – November 2025",
    location: "Giza, Egypt",
  },
  {
    company: "Cairo University",
    role: "Bachelor of Computer Science",
    period: "September 2018 – July 2022",
    location: "Giza, Egypt",
  },
] as const;

export const PROJECTS = [
  {
    id: "01",
    name: "EcoSphere",
    description:
      "SaaS Web Platform — Next.js, TypeScript, Tailwind CSS, Radix UI, MongoDB, AWS",
    bullets: [
      "Component-driven frontend with Next.js App Router",
      "NextAuth.js, JWT, protected routes",
      "Performance: lazy loading, code splitting",
    ],
    live: "http://eco-sphere-kappa.vercel.app",
    repo: null,
  },
  {
    id: "02",
    name: "Plastikat Admin Dashboard",
    description: "React, TypeScript, Tailwind CSS, Auth0, REST APIs",
    bullets: [
      "Production-grade admin dashboard, role-based auth",
      "Full CRUD with loading, empty, and error states",
      "Responsive and accessible",
    ],
    live: null,
    repo: "https://github.com/Amrsamy19/plastikat-dashboard",
  },
  {
    id: "03",
    name: "Social Platform Backend",
    description: "REST API — NestJS, TypeScript, Prisma, PostgreSQL",
    bullets: [
      "Users, posts, comments, likes, follows, notifications",
      "JWT auth, Swagger/OpenAPI docs",
    ],
    live: null,
    repo: "https://github.com/Amrsamy19/social-backend",
  },
  {
    id: "04",
    name: "Todo (Authenticated)",
    description: "React.js, TypeScript, AWS",
    bullets: [
      "Google OAuth and email/password login",
      "Full CRUD, responsive, deployed on AWS",
    ],
    live: null,
    repo: "https://github.com/Amrsamy19/todo-react-aws",
  },
] as const;

export const SOCIAL = [
  { label: "GitHub", href: "https://github.com/Amrsamy19" },
  { label: "LinkedIn", href: "https://linkedin.com/in/amrsamyramadan" },
] as const;
