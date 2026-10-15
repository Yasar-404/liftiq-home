import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Building blocks for product previews. Server components, no client JavaScript. */

interface MockPanelProps {
  children: ReactNode;
  className?: string;
  /** When set (ms), the panel fades in on load after this delay, for sequenced previews. */
  enterDelay?: number;
}

export function MockPanel({ children, className, enterDelay }: MockPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-border bg-surface-elevated/70 p-3.5 sm:p-4",
        enterDelay !== undefined && "enter",
        className,
      )}
      style={
        enterDelay !== undefined
          ? ({ "--enter-delay": `${enterDelay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}

export function MockHeading({ title, aside }: { title: string; aside?: ReactNode }) {
  return (
    <div className="mb-3 flex items-baseline justify-between gap-3">
      <span className="text-[12px] font-medium text-text">{title}</span>
      {aside && <span className="mock-label text-right">{aside}</span>}
    </div>
  );
}

type Tone = "neutral" | "accent" | "positive" | "warning" | "negative";

const toneClass: Record<Tone, string> = {
  neutral: "bg-white/[0.06] text-text-muted",
  accent: "bg-accent-soft text-accent-text",
  positive: "bg-positive-soft text-positive",
  warning: "bg-warning-soft text-warning",
  negative: "bg-negative-soft text-negative",
};

export function MockTag({ children, tone = "neutral" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-[var(--radius-xs)] px-1.5 py-0.5 text-[10.5px] leading-none font-medium whitespace-nowrap",
        toneClass[tone],
      )}
    >
      {children}
    </span>
  );
}

interface MockRowProps {
  primary: ReactNode;
  secondary?: ReactNode;
  aside?: ReactNode;
}

/** One line of a list: name and detail on the left, a value or tag on the right. */
export function MockRow({ primary, secondary, aside }: MockRowProps) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-border py-2 text-[12px] last:border-0 last:pb-0">
      <span className="min-w-0">
        <span className="block text-text">{primary}</span>
        {secondary && <span className="block text-[11px] text-text-faint">{secondary}</span>}
      </span>
      {aside && <span className="shrink-0 text-right whitespace-nowrap">{aside}</span>}
    </li>
  );
}

/** Marks a preview as sample data, in the window chrome or a panel. */
export function SampleDataBadge() {
  return <MockTag>Sample data</MockTag>;
}
