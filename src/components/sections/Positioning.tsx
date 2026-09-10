"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { viewportOnce } from "@/lib/motion";

const principles = [
  "OPERATIONS",
  "MEMBERS",
  "REVENUE",
  "ATTENDANCE",
  "INSIGHTS",
  "COMMUNICATION",
  "AUTOMATION",
];

export function Positioning() {
  return (
    <Section spacing="md" containerClassName="flex flex-col items-center gap-10 text-center">
      <AnimatedText
        as="p"
        className="text-h3 mx-auto max-w-2xl text-balance text-text"
        stagger={0.04}
      >
        Built for the next generation of fitness businesses.
      </AnimatedText>

      <motion.p
        className="max-w-xl text-balance text-text-muted"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        LiftIQ brings the operational complexity of running a modern gym into one
        focused, intelligent workspace.
      </motion.p>

      <div className="w-full">
        <motion.div
          className="hairline mb-8 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Marquee items={principles} duration={38} />
        </motion.div>
        <motion.div
          className="hairline mt-8 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </Section>
  );
}
