import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: string[];
  duration?: number;
  className?: string;
  separator?: ReactNode;
}

export function Marquee({ items, duration = 44, className, separator }: MarqueeProps) {
  const sep = separator ?? <span className="text-accent/50">/</span>;
  const track = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        "[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]",
        className,
      )}
    >
      <div
        className="animate-marquee flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        aria-hidden="false"
      >
        {track.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="text-eyebrow text-[0.8rem] tracking-[0.2em] whitespace-nowrap text-text-muted">
              {item}
            </span>
            {sep}
          </div>
        ))}
      </div>
    </div>
  );
}
