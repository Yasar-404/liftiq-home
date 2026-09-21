"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** Applies the OS reduced-motion preference to all `motion` components. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
