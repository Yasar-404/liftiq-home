import { ArrowRight } from "@/components/ui/icons";
import { brief } from "@/data/demo";
import { cn } from "@/lib/cn";
import { MockPanel } from "./Mock";

/** The morning brief as it appears on the LiftIQ dashboard, with sample figures. */
export function BriefMock({ className }: { className?: string }) {
  return (
    <MockPanel className={cn("@container flex flex-col gap-3", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[12px] font-semibold text-text">Today&apos;s brief</span>
        <span className="mock-label">Counted this morning</span>
      </div>

      <dl className="grid grid-cols-2 gap-x-3 gap-y-3 @md:grid-cols-3 @2xl:grid-cols-5">
        {brief.figures.map((figure) => (
          <div key={figure.label} className="flex min-w-0 flex-col">
            <dt className="order-2 text-[11px] leading-snug text-text-muted">{figure.label}</dt>
            <dd className="order-1 text-[1.05rem] font-semibold tracking-tight text-text tabular-nums">
              {figure.value}
            </dd>
            {figure.note && (
              <dd className="order-3 text-[10.5px] leading-snug text-text-faint">{figure.note}</dd>
            )}
          </div>
        ))}
      </dl>

      <div className="flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-accent/30 bg-accent-soft px-3 py-2.5 text-[11.5px] leading-snug">
        <span>
          <span className="font-medium text-text">Do this first: </span>
          <span className="text-text">{brief.action.label}</span>
          <span className="text-text-muted"> · {brief.action.atStake}</span>
        </span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent-text" />
      </div>
    </MockPanel>
  );
}
