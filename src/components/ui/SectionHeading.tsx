"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { viewportOnce } from "@/lib/motion";
import { AnimatedText } from "./AnimatedText";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          className="text-eyebrow"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.span>
      )}

      <AnimatedText
        as="h2"
        delay={0.05}
        className={cn("text-h2 max-w-3xl text-balance text-text", align === "center" && "mx-auto")}
      >
        {title}
      </AnimatedText>

      {description && (
        <motion.p
          className={cn("text-lead max-w-xl", align === "center" && "mx-auto")}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
