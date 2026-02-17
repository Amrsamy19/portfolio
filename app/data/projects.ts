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
