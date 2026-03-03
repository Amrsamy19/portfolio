"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SECTIONS } from "@/app/data/sections";
import { SOCIAL } from "@/app/data/social";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md py-4 px-6 md:px-12"
            : "py-6 px-6 md:py-8 md:px-12"
        }`}
      >
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-[var(--card)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-all duration-300 shadow-lg">
            <img
              src="/logo.png"
              alt="Amr Samy"
              className="w-full h-full object-cover p-1 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">
            AMR<span className="text-[var(--accent)]">SAMY</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/Amr_Samy_Ramadan_Frontend_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center border border-[var(--border)] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all rounded-lg"
          >
            Resume
          </a>
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
        </div>
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
                    <h3 className="text-sm uppercase tracking-widest text-violet-200 font-semibold">
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
                            className="text-gray-200 hover:text-white transition-colors text-base md:text-lg capitalize"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Menu Column */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-sm uppercase tracking-widest text-violet-200 font-semibold">
                      Menu
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {SECTIONS.map(({ id, label }) => {
                        const dotColor = "bg-[var(--accent)]";

                        return (
                          <li key={id}>
                            <a
                              href={`#${id}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors text-lg md:text-xl group"
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
                <h3 className="text-sm uppercase tracking-widest text-violet-200 font-semibold mb-4">
                  Get in touch
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:amrsamy622@gmail.com"
                    className="text-white hover:text-[var(--accent)] transition-colors text-base md:text-lg"
                  >
                    amrsamy622@gmail.com
                  </a>
                  <a
                    href="/Amr_Samy_Ramadan_Frontend_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:text-white transition-colors text-base md:text-lg font-semibold mt-2"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
