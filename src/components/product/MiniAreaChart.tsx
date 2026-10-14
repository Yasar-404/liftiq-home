"use client";

import { useId } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { cn } from "@/lib/cn";

interface MiniAreaChartProps {
  data: readonly number[];
  /** Accessible description of what the chart shows. */
  label: string;
  className?: string;
  height?: number;
}

/** Small SVG area chart; the line draws in when scrolled into view. */
export function MiniAreaChart({ data, label, className, height = 96 }: MiniAreaChartProps) {
  const id = useId().replace(/:/g, "");
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  const width = 320;
  const max = Math.max(...data);
  const min = Math.min(...data) * 0.85;
  const range = max - min || 1;
  const step = width / (data.length - 1);

  const points = data.map((d, i) => [i * step, height - ((d - min) / range) * (height - 8) - 4]);
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  const [lastX, lastY] = points[points.length - 1];

  return (
    <div ref={ref} className={cn("w-full", className)} style={{ height }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label={label}
      >
        <defs>
          <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.24" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={0}
            x2={width}
            y1={height * f}
            y2={height * f}
            stroke="rgba(255,255,255,0.05)"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path
          d={area}
          fill={`url(#fill-${id})`}
          opacity={inView ? 1 : 0}
          style={{ transition: "opacity 0.6s ease 0.3s" }}
        />
        <path
          d={line}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: inView ? 0 : 1,
            transition: "stroke-dashoffset 1.1s var(--ease-spring)",
          }}
        />
        <circle
          cx={lastX}
          cy={lastY}
          r={3}
          fill="var(--color-accent-text)"
          opacity={inView ? 1 : 0}
          style={{ transition: "opacity 0.3s ease 1s" }}
        />
      </svg>
    </div>
  );
}
