"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { STACK } from "@/app/data";
import { getStackIcon } from "./stack-icons";

const CATEGORY_LABELS: Record<string, string> = {
  frontend: "FRONTEND",
  backend: "BACKEND",
  database: "DATABASE",
  tools: "TOOLS",
};

const iconSize = 28;

export function Stack() {
  return (
    <AnimatedSection
      as="section"
      className="px-16 py-24 md:px-24 border-t border-[var(--border)]"
      delayOrder={0}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mb-2">
        * My Stack
      </p>
      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        staggerDelay={0.08}
      >
        {Object.entries(STACK).map(([category, items]) => (
          <StaggerItem key={category} className="relative group">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center cursor-pointer hover:border-[var(--accent)] transition-colors duration-300">
              <h3
                className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                aria-haspopup="true"
              >
                {CATEGORY_LABELS[category] ?? category.toUpperCase()}
              </h3>
            </div>

            {/* Popup Container - Visible on Group Hover */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[280px] md:w-[320px] p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 flex flex-wrap gap-3 justify-center">
              {/* Arrow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-4 h-4 bg-[var(--card)] border-t border-l border-[var(--border)] rotate-45" />

              {items.map((item) => {
                const Icon = getStackIcon(item);
                return (
                  <span
                    key={item}
                    className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-[var(--background)]/80 border border-[var(--border)]"
                  >
                    <Icon className="text-[var(--accent)]" size={18} />
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      {item}
                    </span>
                  </span>
                );
              })}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
}
