"use client";

import { useInViewOnce } from "@/hooks/useInViewOnce";
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

/** Small bar chart; bars grow in when scrolled into view. */
export function MiniBars({ data, label, labels, className, activeIndex }: MiniBarsProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const max = Math.max(...data) || 1;

  return (
    <div ref={ref} role="img" aria-label={label} className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex h-20 items-end gap-1.5">
        {data.map((d, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 rounded-[3px] transition-[height] duration-700 ease-[var(--ease-spring)]",
              i === activeIndex ? "bg-accent" : "bg-white/12",
            )}
            style={{
              height: inView ? `${(d / max) * 100}%` : "0%",
              transitionDelay: `${i * 45}ms`,
            }}
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
