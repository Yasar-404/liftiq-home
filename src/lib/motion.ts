import type { Variants, Transition } from "motion/react";

/** Shared spring used across the marketing site. */
export const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

export const easeOut: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

/** Fade + rise, used for section entrances. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOut,
  },
};

/** Stagger container for lists of revealing children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Blur-in reveal for hero-level elements. */
export const blurIn: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Standard viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
