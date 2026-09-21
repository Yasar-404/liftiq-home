import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface WindowFrameProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

/** Browser-style window chrome for product mockups. */
export function WindowFrame({
  url = "app.liftiq.in/dashboard",
  children,
  className,
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-lg)] border border-border-strong bg-surface",
        "shadow-[var(--shadow-lg)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="mx-auto flex items-center gap-2 rounded-md bg-bg/60 px-3 py-1 text-[11px] text-text-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          {url}
        </span>
        <span className="w-[52px]" />
      </div>
      {children}
    </div>
  );
}
