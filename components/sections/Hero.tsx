"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export interface HeroData {
  heading?: string;
  subheading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export function Hero({ data }: { data?: HeroData }) {
  const heading = data?.heading || "AMR SAMY";
  const description = data?.description || "A Software Engineer focused on building scalable, accessible, and responsive web applications.";
  const primaryButtonText = data?.primaryButtonText || "Hire Me";
  const primaryButtonLink = data?.primaryButtonLink || "mailto:amrsamy622@gmail.com";
  const secondaryButtonText = data?.secondaryButtonText || "Resume";
  const secondaryButtonLink = data?.secondaryButtonLink || "/Amr_Samy_CV.pdf";

  return (
    <AnimatedSection
      as="section"
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 md:px-24 relative"
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
            <span className="text-(--accent)">{heading}</span>
            <br />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-(--muted) mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            {description.includes("Software Engineer") ? (
              <>
                {description.split("Software Engineer")[0]}
                <strong className="text-foreground inline-block">Software Engineer</strong>
                {description.split("Software Engineer")[1]}
              </>
            ) : (
              description
            )}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
          >
            <a
              href={primaryButtonLink}
              className="btn-primary inline-flex items-center justify-center bg-(--accent) px-8 py-4 text-base font-semibold uppercase tracking-wider text-background hover:bg-(--accent-hover) transition-colors"
            >
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center border border-(--border) px-8 py-4 text-base font-semibold uppercase tracking-wider text-foreground hover:border-(--accent) hover:text-(--accent) transition-all"
            >
              {secondaryButtonText}
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
