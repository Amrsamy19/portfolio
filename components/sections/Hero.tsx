"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Hero() {
  return (
    <AnimatedSection
      as="section"
      id="home"
      className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-16 md:px-16 md:pl-24 md:pr-32 relative"
      delayOrder={0}
      animateOnMount
    >
      <div className="flex flex-col md:flex-row md:items-center gap-16 max-w-6xl mx-auto w-full">
        {/* Left / center: title, intro, CTA */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[var(--accent)]">SOFTWARE</span>
            <br />
            <span className="text-[var(--foreground)]">ENGINEER</span>
          </motion.h1>
          <motion.p
            className="text-lg text-[var(--muted)] mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            Hi! I&apos;m{" "}
            <strong className="text-[var(--foreground)]">
              Amr Samy Ramadan
            </strong>
            . A Software Engineer focused on building scalable, accessible, and
            responsive web applications using React, Next.js, and TypeScript.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
          >
            <a
              href="mailto:amrsamy622@gmail.com"
              className="btn-primary inline-flex items-center justify-center bg-[var(--accent)] px-8 py-4 text-base font-semibold uppercase tracking-wider text-[var(--background)] hover:bg-[var(--accent-hover)]"
            >
              Hire Me
            </a>
            <a
              href="/Amr_Samy_Ramadan_Frontend_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center border border-[var(--border)] px-8 py-4 text-base font-semibold uppercase tracking-wider text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
