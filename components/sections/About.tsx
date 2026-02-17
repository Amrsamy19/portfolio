"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <AnimatedSection
      as="section"
      id="about"
      className="px-16 py-24 md:px-24 border-t border-[var(--border)]"
      delayOrder={0}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
        This is me
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Hi, I&apos;m Amr.
      </h2>
      <p className="text-[var(--muted)] max-w-2xl leading-relaxed mb-6">
        I&apos;m a Frontend Developer dedicated to turning ideas into
        scalable, accessible web applications. I specialize in React,
        Next.js, and TypeScript, with experience in modern UI systems,
        authentication flows, and integrating REST APIs in real-world SaaS
        and dashboard environments.
      </p>
      <p className="text-[var(--muted)] max-w-2xl leading-relaxed">
        I&apos;m particularly interested in building scalable frontend
        architectures and authenticated admin dashboards. I focus on
        performance, accessibility, and responsiveness to deliver
        experiences that meet both user needs and business objectives.
      </p>
    </AnimatedSection>
  );
}
