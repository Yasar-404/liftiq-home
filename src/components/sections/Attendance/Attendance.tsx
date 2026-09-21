"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { checkInSteps } from "@/data/attendance";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

const STEP_INTERVAL_MS = 1400;
const LAST_STEP = checkInSteps.length - 1;

export function Attendance() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reducedMotion) {
      const timer = setTimeout(() => setActiveStep(LAST_STEP), 0);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(
      () => setActiveStep((step) => (step + 1) % checkInSteps.length),
      STEP_INTERVAL_MS,
    );
    return () => clearInterval(interval);
  }, [inView, reducedMotion]);

  return (
    <Section id="attendance" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Attendance"
        title="Check in. Get moving."
        description="Recognise a member and record attendance in under a second, with no queue and no friction at the door."
        align="center"
      />

      <div ref={ref} className="mx-auto w-full max-w-3xl">
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
          {checkInSteps.map(({ label, detail, icon: Icon }, i) => {
            const reached = i <= activeStep;
            const current = i === activeStep;

            return (
              <div key={label} className="flex flex-1 items-center gap-2 sm:flex-col">
                <motion.div
                  animate={{
                    borderColor: current
                      ? "var(--color-accent)"
                      : reached
                        ? "var(--color-border-strong)"
                        : "var(--color-border)",
                    backgroundColor: current ? "rgba(124, 92, 255, 0.14)" : "rgba(124, 92, 255, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex w-full items-center gap-3 rounded-[var(--radius-md)] border bg-surface/40 p-3.5 sm:flex-col sm:gap-2 sm:p-4 sm:text-center"
                >
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border",
                      reached ? "text-accent" : "text-text-faint",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12.5px] font-medium text-text">{label}</span>
                    <AnimatePresence mode="wait">
                      {reached && (
                        <motion.span
                          key={detail}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="block text-[11px] text-text-muted"
                        >
                          {detail}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-text-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Typical end-to-end check-in: ~0.4s
        </div>
      </div>
    </Section>
  );
}
