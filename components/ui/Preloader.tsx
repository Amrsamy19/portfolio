"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]"
        >
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]"
            >
              Amr Samy<span className="text-[var(--accent)]">.</span>
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
              }}
              className="mt-4 h-1 w-full bg-[var(--accent)] origin-left"
            />
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)] blur-[120px] rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
