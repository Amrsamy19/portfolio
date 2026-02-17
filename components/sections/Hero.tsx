"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { STATS } from "@/app/data";

export function Hero() {
  return (
    <AnimatedSection
      as="section"
      id="home"
      className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-16 md:px-16 md:pl-24 md:pr-32 relative"
      delayOrder={0}
      animateOnMount
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 max-w-6xl mx-auto w-full">
        {/* Left / center: title, intro, CTA */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[var(--accent)]">FRONTEND</span>
            <br />
            <span className="text-[var(--foreground)]">ENGINEER</span>
          </motion.h1>
          <motion.p
            className="text-lg text-[var(--muted)] max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            Hi! I&apos;m <strong className="text-[var(--foreground)]">Amr Samy Ramadan</strong>. A Frontend Engineer focused on building scalable, accessible, and responsive web applications using React, Next.js, and TypeScript.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
          >
            <a
              href="mailto:amrsamy622@gmail.com"
              className="btn-primary inline-flex items-center justify-center bg-[var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--background)] hover:bg-[var(--accent-hover)]"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Right: stats */}
        <StaggerContainer
          className="flex flex-col gap-8 md:min-w-[200px]"
          staggerDelay={0.1}
        >
          {STATS.map(({ value, label }) => (
            <StaggerItem key={label}>
              <p className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
                {value}
              </p>
              <p className="text-sm text-[var(--muted)] mt-1">{label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
