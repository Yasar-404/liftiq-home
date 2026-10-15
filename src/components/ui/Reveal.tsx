import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * How an element arrives. Matched to what it is, so the page doesn't move in
 * one way everywhere:
 * - `rise`  a short lift: text blocks and list items (default)
 * - `fade`  opacity only: small labels and supporting details
 * - `scale` a slight settle: panels and product visuals
 * - `mask`  a top-down wipe: large product frames
 * - `left` / `right` a sideways slide: paired columns arriving toward each other
 */
export type RevealVariant = "rise" | "fade" | "scale" | "mask" | "left" | "right";

interface RevealProps {
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Reveals its children when scrolled into view. A server component: the single
 * RevealObserver in the root layout adds `is-visible`; the variants live in
 * styles/motion.css and only apply once the `.js` flag is set.
 */
export function Reveal({
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className,
  children,
}: RevealProps) {
  return (
    <Tag
      className={cn("reveal", className)}
      data-reveal={variant === "rise" ? undefined : variant}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
