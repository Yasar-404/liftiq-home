"use client";

import { motion } from "motion/react";
import { Check, Insights, Members } from "@/components/ui/icons";
import { easeSpring } from "@/lib/motion";

const float = (delay: number) => ({
  initial: { opacity: 0, y: 18, scale: 0.94 },
  animate: { opacity: 1, y: [0, -8, 0], scale: 1 },
  transition: {
    opacity: { delay, duration: 0.6, ease: easeSpring },
    scale: { delay, duration: 0.6, ease: easeSpring },
    y: { delay: delay + 0.6, duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
});

/** Floating stat cards beside the hero dashboard (xl screens and up). */
export function HeroFloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
      <motion.div
        {...float(1.3)}
        className="card absolute top-12 -left-20 w-[190px] p-3.5 2xl:-left-28"
      >
        <div className="relative flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-soft text-accent">
            <Insights className="h-4 w-4" />
          </span>
          <span className="text-[11px] text-text-faint">Membership revenue</span>
        </div>
        <div className="relative mt-2 flex items-end justify-between">
          <span className="text-[1.05rem] font-semibold tracking-tight text-text">₹4.82L</span>
          <span className="text-[11px] font-medium text-accent">▲ 12%</span>
        </div>
        <svg viewBox="0 0 120 26" className="relative mt-1.5 h-5 w-full" preserveAspectRatio="none">
          <path
            d="M0 22 L18 18 L36 20 L54 12 L72 14 L90 6 L108 8 L120 2"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        {...float(1.7)}
        className="card absolute bottom-40 -left-16 w-[186px] p-3.5 2xl:-left-24"
      >
        <div className="relative flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/5 text-text-muted">
            <Members className="h-4 w-4" />
          </span>
          <span className="text-[11px] text-text-faint">Renewals · next 7 days</span>
        </div>
        <div className="relative mt-2 flex items-baseline gap-1.5">
          <span className="text-[1.05rem] font-semibold tracking-tight text-text">18</span>
          <span className="text-[11px] text-text-muted">members</span>
        </div>
      </motion.div>

      <motion.div
        {...float(1.5)}
        className="card absolute top-28 -right-20 w-[196px] p-3.5 2xl:-right-28"
      >
        <div className="relative flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-soft text-accent">
            <Check className="h-4 w-4" />
          </span>
          <span className="text-[11px] font-medium text-text">Check-in recorded</span>
        </div>
        <p className="relative mt-1.5 text-[10.5px] leading-snug text-text-muted">
          Ananya R. · Strength plan · 0.4s
        </p>
      </motion.div>
    </div>
  );
}
