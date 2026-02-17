"use client";

export function VerticalEmail() {
  return (
    <div className="fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <a
        href="mailto:amrsamy622@gmail.com"
        className="link-hover text-[var(--muted)] hover:text-[var(--accent)] text-xs tracking-wider"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          letterSpacing: "0.2em",
        }}
      >
        amrsamy622@gmail.com
      </a>
    </div>
  );
}
