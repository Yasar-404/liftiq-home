"use client";

import { motion } from "motion/react";

export function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="flex flex-col items-center gap-2 text-text-faint"
      aria-hidden="true"
    >
      <span className="text-eyebrow text-[0.6rem]">Scroll</span>
      <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
        <motion.span
          className="h-1.5 w-1 rounded-full bg-text-faint"
          animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.div>
  );
}
