"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SECTIONS } from "@/app/data/sections";
import { SOCIAL } from "@/app/data/social";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 right-0 z-50 flex items-center justify-end p-6 md:p-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex flex-col gap-1.5 w-8 h-8 justify-center items-end cursor-pointer"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-[var(--foreground)] group-hover:bg-[var(--accent)] transition-colors duration-200" />
          <span className="block w-5 h-0.5 bg-[var(--foreground)] group-hover:bg-[var(--accent)] transition-colors duration-200" />
          <span className="block w-4 h-0.5 bg-[var(--foreground)] group-hover:bg-[var(--accent)] transition-colors duration-200" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#1a1a1a] z-[70] p-8 md:p-12 shadow-2xl flex flex-col justify-between overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:text-[var(--accent)] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Main Content */}
              <div className="flex-1 flex flex-col justify-center mt-12 md:mt-0">
                <div className="grid grid-cols-2 gap-8 md:gap-12">
                  {/* Social Column */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                      Social
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {SOCIAL.map(({ label, href }) => (
                        <li key={label}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="text-gray-300 hover:text-white transition-colors text-sm md:text-base capitalize"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Menu Column */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                      Menu
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {SECTIONS.map(({ id, label }) => {
                        let dotColor = "bg-white";
                        if (label === "Home") dotColor = "bg-yellow-500";
                        else if (label === "About Me") dotColor = "bg-blue-500";
                        else if (label === "Experience")
                          dotColor = "bg-teal-400";
                        else if (label === "Projects")
                          dotColor = "bg-purple-500";
                        // else if (label === "Partners") dotColor = "bg-pink-500";

                        return (
                          <li key={id}>
                            <a
                              href={`#${id}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-base md:text-lg group"
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${dotColor} group-hover:scale-125 transition-transform`}
                              />
                              {label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-12">
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-4">
                  Get in touch
                </h3>
                <a
                  href="mailto:amrsamy622@gmail.com"
                  className="text-white hover:text-[var(--accent)] transition-colors text-sm md:text-base"
                >
                  amrsamy622@gmail.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
