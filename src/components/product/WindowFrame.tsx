import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface WindowFrameProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

/** Browser-style window chrome for product previews. */
export function WindowFrame({
  url = "sample-fitness.liftiq.in",
  children,
  className,
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-lg)] border border-border-strong bg-surface shadow-[var(--shadow-lg)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="mx-auto truncate rounded-[var(--radius-xs)] bg-bg/60 px-3 py-1 text-[11px] text-text-faint">
          {url}
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
