"use client";

import Image from "next/image";
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
        <StaggerContainer
          className="divide-y divide-[var(--border)]"
          staggerDelay={0.12}
        >
          {EXPERIENCE.map(({ company, role, period, location, logo }) => (
            <StaggerItem
              key={company}
              className="group -mx-3 flex flex-col gap-2 rounded-xl px-3 py-6 transition-colors duration-300 hover:bg-white/5 md:flex-row md:items-baseline md:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 shrink-0 rounded-md bg-white/90 p-1 sm:h-[52px] sm:w-[52px] md:h-14 md:w-14">
                    <Image
                      src={logo}
                      alt={`${company} logo`}
                      fill
                      sizes="(max-width: 640px) 48px, (max-width: 768px) 52px, 56px"
                      className="rounded-sm object-contain"
                    />
                </div>
                <div>
                  <h3 className="text-xl font-semibold md:text-[1.35rem]">
                    {company}
                  </h3>
                  <p className="text-[var(--accent)] text-base font-medium">
                    {role}
                  </p>
                </div>
              </div>
              <div className="text-sm text-[var(--muted)]/80 md:text-right md:text-base">
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
