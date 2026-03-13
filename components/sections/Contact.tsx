"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SOCIAL } from "@/app/data/social";

export function Contact() {
  return (
    <AnimatedSection
      as="section"
      id="contact"
      className="px-6 py-24 md:px-24 border-t border-[var(--border)]"
      delayOrder={0}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-[var(--muted)] mb-12 max-w-xl text-lg">
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out through any of the platforms
          below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {/* Email Card */}
          <a
            href="mailto:amrsamy622@gmail.com"
            className="group block p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] card-hover hover:border-[var(--accent)]/50"
          >
            <p className="text-sm font-medium text-[var(--muted)] mb-1 uppercase tracking-wider">
              Email
            </p>
            <p className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              amrsamy622@gmail.com
            </p>
          </a>

          {/* Social Links */}
          {SOCIAL.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] card-hover hover:border-[var(--accent)]/50"
            >
              <p className="text-sm font-medium text-[var(--muted)] mb-1 uppercase tracking-wider">
                {link.label}
              </p>
              <p className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                @{link.href.split("/").pop()}
              </p>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
