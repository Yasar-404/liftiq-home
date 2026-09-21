"use client";

import { useId } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { cn } from "@/lib/cn";

interface MiniAreaChartProps {
  data: number[];
  className?: string;
  height?: number;
  stroke?: string;
}

/** Small SVG area chart; the stroke draws in when scrolled into view. */
export function MiniAreaChart({
  data,
  className,
  height = 96,
  stroke = "var(--color-accent)",
}: MiniAreaChartProps) {
  const id = useId().replace(/:/g, "");
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  const width = 320;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);

  const points = data.map((d, i) => {
    const x = i * step;
    const y = height - ((d - min) / range) * (height - 10) - 5;
    return [x, y] as const;
  });

  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        role="img"
        aria-label="Revenue trend, upward"
      >
        <defs>
          <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={area}
          fill={`url(#fill-${id})`}
          opacity={inView ? 1 : 0}
          style={{ transition: "opacity 0.6s ease 0.3s" }}
        />
        <path
          d={line}
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: inView ? 0 : 1,
            transition: "stroke-dashoffset 1.1s var(--ease-spring)",
          }}
        />
      </svg>
    </div>
  );
}
