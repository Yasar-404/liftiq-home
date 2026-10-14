import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Fades and lifts its children in when scrolled into view. A server component:
 * the single RevealObserver in the root layout adds `is-visible`.
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children }: RevealProps) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
