import { cn } from "@/lib/cn";

/** Diagonal light sweep on hover. Place inside a `group relative overflow-hidden` parent. */
export function Sheen({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-18deg]",
        "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09),transparent)]",
        "transition-transform duration-[900ms] ease-[var(--ease-spring)]",
        "group-hover:translate-x-[130%]",
        className,
      )}
    />
  );
}
