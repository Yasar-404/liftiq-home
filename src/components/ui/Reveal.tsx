"use client";

import type { ElementType, ReactNode } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { cn } from "@/lib/cn";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}

/**
 * CSS-driven scroll reveal. No animation library, GPU-friendly,
 * and fully disabled under `prefers-reduced-motion` (see globals.css).
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children }: RevealProps) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
