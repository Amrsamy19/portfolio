"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { PROJECTS } from "@/app/data";

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const hasSubtitle = project.description.includes("—");
  const [subtitle, techPart] = hasSubtitle
    ? project.description.split("—").map((s) => s.trim())
    : ["", project.description];
  const techs = (techPart ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <motion.article className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--card) card-hover">
      {/* Accent bar on hover */}
      <span className="absolute left-0 top-0 h-full w-1 bg-(--accent) opacity-0 scale-y-0 origin-top transition-[transform,opacity] duration-300 group-hover:opacity-100 group-hover:scale-y-100 rounded-l-2xl" />

      <div className="p-6 md:p-8 pl-7 md:pl-9">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-(--accent)/15 text-sm font-bold text-(--accent)">
              {project.id}
            </span>
            {"freelance" in project && project.freelance && (
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
                Freelance
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-1.5 rounded-lg bg-(--accent)/10 px-3 py-1.5 text-sm font-medium text-(--accent) hover:bg-(--accent) hover:text-background"
              >
                Live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-1.5 rounded-lg border border-(--border) px-3 py-1.5 text-sm font-medium text-foreground hover:border-(--accent) hover:text-(--accent)"
              >
                Repo
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          {project.name}
        </h3>

        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-(--background)/80 px-2.5 py-1 text-sm text-(--muted) border border-(--border)"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <ul className="space-y-2">
          {project.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-base text-(--muted)"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)/60" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <AnimatedSection
      as="section"
      id="projects"
      className="px-6 py-24 md:px-24 border-t border-(--border)"
      delayOrder={0}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Selected Projects
        </h2>
        <p className="text-(--muted) mb-12 max-w-xl">
          A few things I&apos;ve built with React, Next.js, and modern web
          tools.
        </p>
        <StaggerContainer className="grid gap-6 md:gap-8" staggerDelay={0.08}>
          {PROJECTS.map((project) => (
            <StaggerItem key={project.name}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
