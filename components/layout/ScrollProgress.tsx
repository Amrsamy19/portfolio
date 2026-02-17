"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-0 top-0 w-0.5 h-full bg-[var(--border)] z-40">
      <motion.div
        className="absolute left-0 top-0 w-full bg-[var(--accent)]"
        style={{ height }}
      />
    </div>
  );
}
