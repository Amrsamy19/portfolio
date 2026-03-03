"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Hero() {
  return (
    <AnimatedSection
      as="section"
      id="home"
      className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-16 md:px-24 relative"
      delayOrder={0}
      animateOnMount
    >
      <div className="flex flex-col items-center justify-center text-center gap-12 max-w-4xl mx-auto w-full">
        {/* Centered: name, description, CTA */}
        <div className="flex-1 w-full">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[var(--accent)]">AMR SAMY</span>
            <br />  
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            A{" "}
            <strong className="text-[var(--foreground)] inline-block">
              Software Engineer
            </strong>{" "}
            focused on building scalable, accessible, and responsive web
            applications.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
          >
            <a
              href="mailto:amrsamy622@gmail.com"
              className="btn-primary inline-flex items-center justify-center bg-[var(--accent)] px-8 py-4 text-base font-semibold uppercase tracking-wider text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors"
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
