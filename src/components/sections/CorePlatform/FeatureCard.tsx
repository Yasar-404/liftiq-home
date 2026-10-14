import type { Feature } from "@/types";

export function FeatureCard({ title, description, icon: Icon, status }: Feature) {
  return (
    <article className="flex h-full flex-col gap-4 bg-bg p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-sm)] border border-border-strong bg-surface-elevated text-text-muted">
          <Icon className="h-5 w-5" />
        </span>
        {status && (
          <span className="rounded-full border border-border-strong px-2.5 py-1 text-[11px] text-text-muted">
            {status}
          </span>
        )}
      </div>
      <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">{title}</h3>
      <p className="text-[0.925rem] leading-relaxed text-text-muted">{description}</p>
    </article>
  );
}
