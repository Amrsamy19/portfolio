"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getStackIcon } from "@/components/sections/stack-icons";

import { STACK } from "@/app/data";

const ICONS = Object.values(STACK).flat();

export function FloatingIcons() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {ICONS.map((icon, i) => {
        const Icon = getStackIcon(icon);
        const size = Math.random() * 30 + 30; // 30px to 60px
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 20 + 20; // 20s to 40s

        return (
          <motion.div
            key={i}
            className="absolute text-[var(--muted)] opacity-[0.03]"
            style={{
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}
