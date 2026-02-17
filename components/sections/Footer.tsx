"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Footer() {
  return (
    <AnimatedSection
      as="footer"
      className="px-16 py-16 md:px-24 border-t border-[var(--border)]"
      delayOrder={0}
    >
      <p className="text-[var(--muted)] text-sm">
        Design & built by Amr Samy Ramadan
      </p>
      <a
        href="mailto:amrsamy622@gmail.com"
        className="link-hover text-sm text-[var(--accent)] mt-2 inline-block"
      >
        amrsamy622@gmail.com
      </a>
    </AnimatedSection>
  );
}
