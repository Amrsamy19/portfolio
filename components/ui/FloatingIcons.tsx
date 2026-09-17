"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getStackIcon } from "@/components/sections/stack-icons";

import { STACK } from "@/app/data";

const ICONS = Object.values(STACK).flat();

export function FloatingIcons() {
  const [isMounted, setIsMounted] = useState(false);
  const [iconData, setIconData] = useState<
    Array<{
      icon: string;
      size: number;
      initialX: number;
      initialY: number;
      duration: number;
      animX: number[];
      animY: number[];
    }>
  >([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIconData(
      ICONS.map((icon) => ({
        icon,
        size: Math.random() * 30 + 30,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: Math.random() * 20 + 20,
        animX: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
        animY: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
      }))
    );
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {iconData.map((data, i) => {
        const Icon = getStackIcon(data.icon);
        
        return (
          <motion.div
            key={i}
            className="absolute text-(--muted) opacity-[0.03]"
            style={{
              left: `${data.initialX}%`,
              top: `${data.initialY}%`,
            }}
            animate={{
              x: data.animX,
              y: data.animY,
              rotate: [0, 360],
            }}
            transition={{
              duration: data.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={data.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
