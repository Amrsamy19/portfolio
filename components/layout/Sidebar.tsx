"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SECTIONS, SOCIAL } from "@/app/data";

const sidebarVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3, ease: "easeOut" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: 0.5 + i * 0.06 },
  }),
};

// Menu order like Tajmirul: Projects, Experience, About Me, Home (reverse scroll order)
const MENU_ORDER = [...SECTIONS].reverse();

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sectionIds = SECTIONS.map((s) => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      className="fixed left-0 top-0 z-50 flex h-full w-[280px] flex-col border-r border-[var(--border)] bg-[var(--background)]/95 backdrop-blur px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      {/* Brand / name at top like Tajmirul */}
      <motion.a
        href="#home"
        className="mb-12 block text-xl font-bold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
        variants={itemVariants}
        custom={0}
      >
        AMR
      </motion.a>

      <div className="mb-12">
        <motion.p
          className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mb-4"
          variants={itemVariants}
          custom={1}
        >
          Social
        </motion.p>
        <ul className="space-y-2">
          {SOCIAL.map(({ label, href }, i) => (
            <motion.li key={label} variants={itemVariants} custom={2 + i}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                {label.toLowerCase()}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <nav className="mb-12">
        <motion.p
          className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mb-4"
          variants={itemVariants}
          custom={4}
        >
          Menu
        </motion.p>
        <ul className="space-y-2">
          {MENU_ORDER.map(({ id, label }, i) => (
            <motion.li key={id} variants={itemVariants} custom={5 + i}>
              <a
                href={`#${id}`}
                className={`text-sm transition-colors ${
                  activeId === id
                    ? "text-[var(--accent)] font-medium"
                    : "text-[var(--foreground)] hover:text-[var(--accent)]"
                }`}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <motion.div
        className="mt-auto"
        variants={itemVariants}
        custom={9}
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
          Get in touch
        </p>
        <a
          href="mailto:amrsamy622@gmail.com"
          className="text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors break-all"
        >
          amrsamy622@gmail.com
        </a>
      </motion.div>
    </motion.aside>
  );
}
