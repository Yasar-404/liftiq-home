"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { viewportOnce } from "@/lib/motion";
import { site } from "@/data/site";

export function FinalCta() {
  return (
    <Section spacing="lg" bare className="relative overflow-hidden">
      <div aria-hidden className="grain pointer-events-none absolute inset-0 -z-10">
        <div className="grid-texture radial-fade absolute inset-0 opacity-60" />
        <div className="bg-dots absolute inset-0 opacity-40" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle,var(--color-accent-violet),transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/2 h-[300px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle,var(--color-accent-blue),transparent 70%)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-7 px-5 text-center">
        <motion.h2
          className="text-h2 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Your gym deserves better software.
        </motion.h2>
        <motion.p
          className="max-w-md text-balance text-[1.05rem] leading-relaxed text-text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          See what a smarter operating system can do for your fitness business.
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button href={site.cta.primary.href} size="lg" withArrow>
            {site.cta.primary.label}
          </Button>
          <Button href="#contact" size="lg" variant="secondary">
            Talk to LiftIQ
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
