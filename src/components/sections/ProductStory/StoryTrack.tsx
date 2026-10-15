import type { ReactNode } from "react";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export interface StoryStep {
  id: string;
  label: string;
  headline: string;
  problem: string;
  solution: string;
  points: string[];
  /** Server-rendered product visual for this step. */
  visual: ReactNode;
}

/**
 * A product story told one area at a time. Each step is a row: its explanation
 * on the left and its product visual on the right. From lg the visual sticks
 * near the top while its row scrolls past, so the interface stays in view as
 * the explanation is read and is replaced by the next as the next row arrives.
 * Scrolling is never intercepted or pinned; below lg the visual simply follows
 * its text. Each visual is rendered once and the page needs no script for any
 * of it.
 */
export function StoryTrack({ steps }: { steps: StoryStep[] }) {
  return (
    <ol className="relative flex flex-col gap-20 lg:gap-6 lg:border-l lg:border-border lg:pl-12">
      {steps.map((step, i) => (
        <li
          key={step.id}
          className="relative grid grid-cols-1 gap-8 lg:min-h-[88vh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14"
        >
          {/* The step's marker on the rail. */}
          <span
            aria-hidden="true"
            className="absolute top-[7.4rem] -left-[calc(3rem+5px)] hidden h-2.5 w-2.5 rounded-full border border-border-strong bg-bg lg:block"
          />

          <div className="flex flex-col justify-center gap-6 lg:py-24">
            <div className="flex flex-col gap-3">
              <span className="text-eyebrow flex items-center gap-2.5">
                <span className="text-text-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step.label}
              </span>
              <h3 className="text-h3 text-balance">{step.headline}</h3>
            </div>

            <div className="flex flex-col gap-4 text-[0.95rem] leading-relaxed">
              <p className="text-text-muted">
                <span className="font-medium text-text">The problem. </span>
                {step.problem}
              </p>
              <p className="text-text-muted">
                <span className="font-medium text-text">With LiftIQ. </span>
                {step.solution}
              </p>
            </div>

            <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
              {step.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-text">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-text">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <Reveal variant="scale" className="lg:sticky lg:top-28">
            <figure className="frame-lit">
              <div className="rounded-[var(--radius-lg)] bg-[linear-gradient(180deg,var(--color-surface-elevated),var(--color-surface))] p-3 sm:p-5">
                <figcaption className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-eyebrow">{step.label}</span>
                  <span className="text-[11px] text-text-faint tabular-nums">
                    {i + 1} of {steps.length}
                  </span>
                </figcaption>
                <div className="rounded-[var(--radius-md)] border border-border bg-bg-subtle p-3 sm:p-5">
                  {step.visual}
                </div>
                <p className="mt-3 text-center text-[11px] text-text-faint">
                  Sample gym and figures, for illustration
                </p>
              </div>
            </figure>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
