import { cn } from "@/lib/cn";
import type { Feature } from "@/types";
import { FeatureVisual } from "./FeatureVisual";

export function FeatureCard({ title, description, icon: Icon, status, size, visual }: Feature) {
  const wide = size === "wide";

  return (
    <article
      className={cn(
        "card relative flex h-full gap-5 p-6 sm:p-7",
        wide ? "flex-col sm:flex-row sm:items-center" : "flex-col",
      )}
    >
      <div className={cn("flex flex-col gap-3", wide && "sm:flex-1")}>
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-border-strong bg-bg/60 text-accent-text">
            <Icon className="h-[18px] w-[18px]" />
          </span>
          <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">{title}</h3>
          {status && (
            <span className="ml-auto rounded-full border border-border-strong px-2.5 py-1 text-[11px] text-text-muted sm:ml-0">
              {status}
            </span>
          )}
        </div>
        <p className="max-w-xl text-[0.925rem] leading-relaxed text-text-muted">{description}</p>
      </div>

      {visual && (
        <div className="mt-auto">
          <FeatureVisual kind={visual} />
        </div>
      )}
    </article>
  );
}
