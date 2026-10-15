import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

interface MiniBarsProps {
  data: readonly number[];
  /** Accessible description of what the chart shows. */
  label: string;
  labels?: readonly string[];
  className?: string;
  /** Index of the bar to highlight. */
  activeIndex?: number;
}

/**
 * Small bar chart. A server component: bars grow when the shared RevealObserver
 * marks it `is-visible` (see `.chart` in styles/motion.css), and are full height
 * without scripting.
 */
export function MiniBars({ data, label, labels, className, activeIndex }: MiniBarsProps) {
  const max = Math.max(...data) || 1;

  return (
    <div role="img" aria-label={label} className={cn("chart flex flex-col gap-1.5", className)}>
      <div className="flex h-20 items-end gap-1.5">
        {data.map((d, i) => (
          <div
            key={i}
            className={cn(
              "chart-bar flex-1 rounded-[3px]",
              i === activeIndex ? "bg-accent" : "bg-white/12",
            )}
            style={{ height: `${(d / max) * 100}%`, "--i": i } as CSSProperties}
          />
        ))}
      </div>
      {labels && (
        <div className="flex justify-between text-[10px] text-text-faint" aria-hidden="true">
          {labels.filter(Boolean).map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}
