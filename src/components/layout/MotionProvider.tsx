"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/**
 * Honours the OS "reduce motion" setting for every `motion` component:
 * transforms are dropped, only opacity fades remain.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
