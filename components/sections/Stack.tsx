"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { STACK } from "@/app/data";
import { getStackIcon } from "./stack-icons";

const CATEGORY_LABELS: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend & APIs",
  database: "Database Management",
  tools: "Tools & DevOps",
};

export function Stack() {
  return (
    <AnimatedSection
      as="section"
      id="skills"
      className="px-6 py-24 md:px-24 border-t border-[var(--border)] overflow-hidden"
      delayOrder={0}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <p className="text-[var(--accent)] font-bold tracking-[0.2em] text-sm mb-3 uppercase">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            My Tech Stack
          </h2>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={0.08}
        >
          {Object.entries(STACK).map(([category, items]) => (
            <StaggerItem key={category} className="h-full">
              <div className="relative h-full bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 hover:border-[var(--accent)]/50 transition-all duration-500 group overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[var(--accent)]/5 blur-3xl rounded-full group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />

                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="h-5 w-1 bg-[var(--accent)] rounded-full" />
                  {CATEGORY_LABELS[category] ?? category.toUpperCase()}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((item) => {
                    const Icon = getStackIcon(item);
                    return (
                      <span
                        key={item}
                        className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-[var(--background)]/40 border border-[var(--border)] hover:border-[var(--accent)]/30 hover:bg-[var(--background)] transition-all duration-300 group/item"
                      >
                        <Icon
                          className="text-[var(--muted)] group-hover/item:text-[var(--accent)] transition-colors duration-300"
                          size={20}
                        />
                        <span className="text-base font-medium text-[var(--foreground)] leading-none">
                          {item}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
