import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";
import { Sheen } from "./Sheen";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkProps extends CommonProps {
  href: string;
  onClick?: () => void;
}

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium " +
  "transition-[transform,background-color,border-color,box-shadow] duration-200 ease-[var(--ease-spring)] " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50 select-none";

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[linear-gradient(150deg,#2f80ff_0%,#7c5cff_50%,#b64bff_100%)] " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_-8px_rgba(124,92,255,0.5)] " +
    "hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]",
  secondary:
    "border border-border-strong bg-surface/50 text-text hover:-translate-y-0.5 hover:border-white/25 hover:bg-surface-hover",
  ghost: "text-text-muted hover:text-text",
};

function Inner({ withArrow, children }: { withArrow?: boolean; children: ReactNode }) {
  return (
    <>
      <Sheen />
      <span className="relative">{children}</span>
      {withArrow && (
        <ArrowRight className="relative h-4 w-4 transition-transform duration-200 ease-[var(--ease-spring)] group-hover:translate-x-1" />
      )}
    </>
  );
}

/** Link-styled-as-button. Use for anchors / in-page navigation. */
export function ButtonLink({
  href,
  onClick,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
}: LinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </a>
  );
}

/** Real <button> element. Use for click handlers that are not navigation. */
export function ButtonEl({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: NativeButtonProps) {
  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}

/**
 * Polymorphic entry point: renders an anchor when `href` is present,
 * otherwise a native button.
 */
export function Button(props: LinkProps | NativeButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    return <ButtonLink {...props} />;
  }
  return <ButtonEl {...(props as NativeButtonProps)} />;
}
