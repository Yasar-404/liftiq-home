"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { viewportOnce } from "@/lib/motion";

const tools = [
  "Spreadsheets",
  "Payment software",
  "Attendance system",
  "WhatsApp",
  "CRM",
  "Reports",
  "Manual follow-ups",
];

export function ProblemSection() {
  return (
    <Section id="problem" spacing="lg" containerClassName="flex flex-col gap-16">
      <SectionHeading
        eyebrow="The problem"
        title="Your gym shouldn't run on disconnected tools."
        description="Every tool holds a piece of the picture. None of them talk to each other — so the work of connecting them falls on you."
      />

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        {/* fragmented */}
        <Reveal>
          <ul className="flex flex-wrap gap-2.5 lg:justify-end">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-border bg-bg-subtle px-3 py-2 text-[13px] text-text-faint"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* connector */}
        <div className="flex items-center justify-center py-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center gap-3 text-text-faint"
          >
            <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-border-strong lg:block" />
            <span className="rotate-90 text-lg lg:rotate-0">→</span>
            <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-border-strong lg:block" />
          </motion.div>
        </div>

        {/* unified */}
        <Reveal delay={120}>
          <div className="relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border-strong bg-surface px-8 py-8 text-center shadow-[var(--shadow-glow)] lg:items-start lg:text-left">
            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <Logo />
            <p className="text-sm text-text-muted">
              One platform. One source of truth. One place to run the business.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
