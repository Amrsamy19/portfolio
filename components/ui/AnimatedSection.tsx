"use client";

import { motion, type Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
    willChange: "transform, opacity",
  }),
};

const motionProps = (delayOrder: number, className: string, id?: string) => ({
  id,
  className,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, amount: 0.2, margin: "0px 0px -80px 0px" },
  variants: defaultVariants,
  custom: delayOrder,
});

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delayOrder?: number;
  as?: "section" | "div" | "footer";
  id?: string;
  /** When true, animate on mount instead of when in view (for above-the-fold sections) */
  animateOnMount?: boolean;
};

export function AnimatedSection({
  children,
  className = "",
  delayOrder = 0,
  as: Tag = "section",
  id,
  animateOnMount = false,
}: AnimatedSectionProps) {
  const props = {
    id,
    className,
    variants: defaultVariants,
    custom: delayOrder,
    initial: "hidden" as const,
    ...(animateOnMount
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { once: true, amount: 0.2, margin: "0px 0px -80px 0px" },
        }),
  };
  if (Tag === "section") {
    return <motion.section {...props}>{children}</motion.section>;
  }
  if (Tag === "footer") {
    return <motion.footer {...props}>{children}</motion.footer>;
  }
  return <motion.div {...props}>{children}</motion.div>;
}

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay = 0.08) => ({
    opacity: 1,
    transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
    willChange: "transform, opacity",
  },
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -60px 0px" }}
      variants={containerVariants}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
