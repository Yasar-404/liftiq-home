import type { Variants } from "motion/react";

/** Ease curve shared by entrance animations. */
export const easeSpring: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Viewport options for scroll-triggered animations that should run once. */
export const viewportOnce = { once: true, margin: "-80px" } as const;

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeSpring },
  },
};
