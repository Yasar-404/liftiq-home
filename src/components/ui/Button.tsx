import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  /**
   * Names the call to action (e.g. "hero-demo") as a `data-cta` attribute, so
   * clicks can be measured by a tag manager without changing components.
   */
  cta?: string;
  children: ReactNode;
}

const base =
  "group relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap " +
  "transition-[transform,background-color,border-color,box-shadow,color] duration-[var(--duration-fast)] ease-[var(--ease-spring)] " +
  "active:scale-[0.98] select-none";

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[image:var(--gradient-button)] " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_-10px_rgba(124,92,255,0.6)] " +
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),var(--shadow-glow)]",
  secondary:
    "border border-border-strong bg-white/[0.03] text-text hover:border-white/25 hover:bg-white/[0.07]",
  ghost: "text-text-muted hover:text-text",
};

/** A link styled as a button. Every call to action on the site is a plain anchor. */
export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  onClick,
  cta,
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      data-cta={cta}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-spring)] group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
