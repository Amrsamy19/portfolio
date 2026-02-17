"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { PARTNERS } from "@/app/data/partners";

export function Partners() {
  return (
    <AnimatedSection
      as="section"
      id="partners"
      className="px-16 py-24 md:px-24 border-t border-[var(--border)]"
      delayOrder={0}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Partners</h2>
      <p className="text-[var(--muted)] mb-12 max-w-xl">
        Collaborations and companies I&apos;ve had the pleasure to work with.
      </p>

      <StaggerContainer
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        staggerDelay={0.1}
      >
        {PARTNERS.map((partner) => (
          <StaggerItem key={partner.name}>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors duration-300 aspect-[3/2]"
            >
              {/* Fallback to text if no logo, or wrap logo in image tag if you add images later */}
              <div className="text-center">
                <h3 className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {partner.name}
                </h3>
                {partner.wip && (
                  <span className="text-xs text-[var(--muted)] mt-1 block">
                    Work in Progress
                  </span>
                )}
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
}
