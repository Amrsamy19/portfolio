"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { EXPERIENCE } from "@/app/data";

export function Experience() {
  return (
    <AnimatedSection
      as="section"
      id="experience"
      className="px-6 py-24 md:px-24 border-t border-[var(--border)]"
      delayOrder={0}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Experience</h2>
        <StaggerContainer className="space-y-10" staggerDelay={0.12}>
          {EXPERIENCE.map(({ company, role, period, location }) => (
            <StaggerItem
              key={company}
              className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2"
            >
              <div>
                <h3 className="text-lg font-semibold">{company}</h3>
                <p className="text-[var(--accent)] text-base font-medium">
                  {role}
                </p>
              </div>
              <div className="text-base text-[var(--muted)] md:text-right">
                <p>{period}</p>
                <p>{location}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
