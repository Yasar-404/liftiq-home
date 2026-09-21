"use client";

import { useInViewOnce } from "@/hooks/useInViewOnce";
import { cn } from "@/lib/cn";

interface MiniBarsProps {
  data: number[];
  labels?: string[];
  className?: string;
  activeIndex?: number;
}

/** Small bar chart; bars grow in when scrolled into view. */
export function MiniBars({ data, labels, className, activeIndex }: MiniBarsProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const max = Math.max(...data) || 1;

  return (
    <div ref={ref} className={cn("flex items-end gap-1.5", className)}>
      {data.map((d, i) => {
        const h = (d / max) * 100;
        const active = i === activeIndex;
        return (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex h-16 w-full items-end">
              <div
                className={cn(
                  "w-full rounded-[3px] transition-[height] duration-700 ease-[var(--ease-spring)]",
                  active ? "bg-accent" : "bg-white/12",
                )}
                style={{ height: inView ? `${h}%` : "0%", transitionDelay: `${i * 45}ms` }}
              />
            </div>
            {labels && (
              <span className="text-[9px] font-medium tracking-wide text-text-faint">
                {labels[i]}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
