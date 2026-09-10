import { cn } from "@/lib/cn";

interface AuroraProps {
  className?: string;
  /** decorative preset */
  variant?: "hero" | "panel" | "footer" | "contact";
  dots?: boolean;
  grain?: boolean;
}

/**
 * Layered atmospheric background: brand-coloured aurora blobs, an optional
 * dotted constellation field, and optional film grain. Purely decorative.
 */
export function Aurora({
  className,
  variant = "panel",
  dots = false,
  grain = true,
}: AuroraProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        grain && "grain",
        className,
      )}
    >
      {dots && <div className="bg-dots absolute inset-0 opacity-70" />}

      {variant === "hero" && (
        <>
          <span className="aurora aurora--blue animate-drift left-[-10%] top-[-20%] h-[42rem] w-[42rem]" />
          <span className="aurora aurora--violet animate-drift-slow right-[-15%] top-[-10%] h-[38rem] w-[38rem] opacity-40" />
        </>
      )}

      {variant === "contact" && (
        <>
          <span className="aurora aurora--violet animate-drift left-[-12%] bottom-[-25%] h-[36rem] w-[36rem] opacity-40" />
          <span className="aurora aurora--blue animate-drift-slow right-[-10%] top-[-20%] h-[34rem] w-[34rem] opacity-35" />
        </>
      )}

      {variant === "footer" && (
        <>
          <span className="aurora aurora--accent left-1/2 top-[-60%] h-[30rem] w-[72rem] -translate-x-1/2 opacity-25 blur-[140px]" />
        </>
      )}

      {variant === "panel" && (
        <span className="aurora aurora--accent left-1/2 top-1/2 h-[26rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      )}
    </div>
  );
}
