"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Sheen } from "@/components/ui/Sheen";
import { designPrinciples } from "@/data/principles";
import { easeSpring, viewportOnce } from "@/lib/motion";

export function Manifesto() {
  return (
    <Section
      id="manifesto"
      spacing="lg"
      className="relative overflow-hidden"
      containerClassName="flex flex-col items-center gap-14 text-center"
    >
      <div
        aria-hidden
        className="animate-drift-slow pointer-events-none absolute top-[-8rem] left-1/2 -z-10 h-[24rem] w-[48rem] max-w-[130vw] -translate-x-1/2 rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: "radial-gradient(circle,var(--color-accent),transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[320px] w-[720px] max-w-[92vw] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle,rgba(124,92,255,0.35),transparent 70%)" }}
      />

      <div className="flex flex-col items-center gap-6">
        <motion.span
          className="text-eyebrow"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          Design principle
        </motion.span>

        <AnimatedText
          as="h2"
          className="text-h2 max-w-3xl text-balance text-text"
          emphasize={["disappear"]}
          emphasisClassName="text-gradient word-dissolve"
        >
          Software should disappear into the way you work.
        </AnimatedText>

        <motion.p
          className="text-lead max-w-lg text-balance"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          LiftIQ is designed around clarity, speed, and the realities of running a modern fitness
          business.
        </motion.p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface/60 sm:grid-cols-3">
        {designPrinciples.map((principle, i) => (
          <motion.div
            key={principle.title}
            className="group relative flex flex-col gap-2 overflow-hidden p-6 text-left sm:p-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: easeSpring }}
          >
            <Sheen />
            {i > 0 && (
              <motion.span
                aria-hidden
                className="absolute top-4 bottom-4 left-0 hidden w-px bg-border-strong sm:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                style={{ originY: 0 }}
              />
            )}

            <span className="text-eyebrow relative text-[0.6rem] text-text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="relative flex items-center gap-2 text-[1rem] font-semibold tracking-tight text-text">
              {principle.title}
              <span className="h-px w-4 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <p className="relative text-sm leading-relaxed text-text-muted">{principle.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
