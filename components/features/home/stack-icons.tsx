"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRadixui,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiAmazonwebservices,
  SiVercel,
  SiAuth0,
  SiSwagger,
} from "react-icons/si";
import { FiKey } from "react-icons/fi";

const iconMap: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Radix UI": SiRadixui,
  "Redux Toolkit": SiRedux,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  "REST APIs": SiSwagger,
  GraphQL: SiGraphql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Git: SiGit,
  GitHub: SiGithub,
  AWS: SiAmazonwebservices,
  Vercel: SiVercel,
  Auth0: SiAuth0,
  NextAuth: FiKey,
};

export function getStackIcon(name: string): IconType {
  return iconMap[name] ?? FiKey;
}
