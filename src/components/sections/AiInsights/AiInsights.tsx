import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { BriefMock } from "@/components/product/BriefMock";
import { MockHeading, MockPanel, MockRow, MockTag } from "@/components/product/Mock";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { atRiskMembers, brief, plans, renewals } from "@/data/demo";
import { aiRoadmap, availableNow, insightGroups, intelligencePrinciples } from "@/data/insights";
import { formatInr, plural } from "@/lib/format";

const shownAtRisk = atRiskMembers.slice(0, 3);

/** A numbered caption above one panel of the walkthrough. */
function Stage({ n, label, children }: { n: number; label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-text-faint uppercase">
        <span className="grid h-5 w-5 place-items-center rounded-full border border-border-strong text-[10px] text-text-muted tabular-nums">
          {n}
        </span>
        {label}
      </p>
      {children}
    </div>
  );
}

/** A thin connector between two panels, with a light that travels down it. */
function Trace() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-7 w-px bg-border-strong">
      <span className="trace-dot absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
    </div>
  );
}

/**
 * The AI section: one walkthrough of how LiftIQ gets from your records to the
 * one thing to do first, then a plain statement of what is rule-based today and
 * what AI-assisted features are planned. Nothing here claims a model produces
 * today's numbers.
 */
export function AiInsights() {
  return (
    <Section
      id="ai"
      spacing="lg"
      className="ai-surface relative overflow-hidden"
      containerClassName="flex flex-col gap-16"
    >
      <SectionHeading
        index={5}
        eyebrow="AI Insights"
        title="Start every day knowing what matters."
        description="Each morning LiftIQ counts the day from your own records and picks the task with the most money riding on it. It shows its working, so you can check it. The insights available now are counted by clear rules, not guessed by a model."
      />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal variant="mask" className="frame-lit">
          <div className="flex flex-col gap-1 rounded-[var(--radius-lg)] bg-[linear-gradient(180deg,#14151b,#0c0d11)] p-4 sm:p-6">
            <Stage n={1} label="Counted this morning">
              <BriefMock />
            </Stage>
            <Trace />
            <Stage n={2} label="Every figure links to its list">
              <MockPanel>
                <div className="mb-3 flex flex-col gap-1 rounded-[var(--radius-sm)] border border-accent/30 bg-accent-soft px-3 py-2.5">
                  <span className="text-[10.5px] font-medium tracking-wide text-accent-text uppercase">
                    Do this first
                  </span>
                  <span className="text-[12px] leading-snug text-text">{brief.action.label}</span>
                </div>
                <MockHeading title="Counted from" aside="Not reached · expiring this week" />
                <ul>
                  {renewals.notContacted.map((m) => (
                    <MockRow
                      key={m.name}
                      primary={m.name}
                      secondary={`${m.plan} · ends in ${m.endsInDays} ${m.endsInDays === 1 ? "day" : "days"}`}
                      aside={
                        <span className="text-[12px] text-text tabular-nums">
                          {formatInr(plans[m.plan])}
                        </span>
                      }
                    />
                  ))}
                </ul>
                <div className="mt-3 flex justify-between border-t border-border-strong pt-2.5 text-[12px]">
                  <span className="text-text-muted">At stake</span>
                  <span className="font-semibold text-text tabular-nums">
                    {formatInr(renewals.notContactedAtStake)}
                  </span>
                </div>
              </MockPanel>
            </Stage>
            <Trace />
            <Stage n={3} label="Members drifting away, with the reason">
              <MockPanel>
                <MockHeading
                  title="Members likely to leave"
                  aside={plural(atRiskMembers.length, "member")}
                />
                <ul>
                  {shownAtRisk.map((m) => (
                    <MockRow
                      key={m.name}
                      primary={m.name}
                      secondary={m.reason}
                      aside={
                        <MockTag tone={m.band === "High" ? "negative" : "warning"}>
                          {m.band}
                        </MockTag>
                      }
                    />
                  ))}
                </ul>
                <p className="mt-2.5 text-[11px] text-text-faint">
                  +{atRiskMembers.length - shownAtRisk.length} more · sample data
                </p>
              </MockPanel>
            </Stage>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
          <ul className="flex flex-col gap-6">
            {intelligencePrinciples.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="flex flex-col gap-1.5">
                <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <details className="group rounded-[var(--radius-lg)] border border-border bg-surface/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[var(--radius-lg)] px-5 py-4 text-[0.95rem] font-medium text-text [&::-webkit-details-marker]:hidden">
                What each insight counts
                <span
                  aria-hidden="true"
                  className="text-text-faint transition-transform duration-[var(--duration-base)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="flex flex-col gap-6 border-t border-border px-5 py-5">
                {insightGroups.map((group) => (
                  <div key={group.title} className="flex flex-col gap-3">
                    <h3 className="text-[0.95rem] font-semibold text-text">{group.title}</h3>
                    <dl className="flex flex-col gap-2.5">
                      {group.items.map((item) => (
                        <div key={item.title}>
                          <dt className="text-[0.875rem] font-medium text-text">{item.title}</dt>
                          <dd className="text-[0.85rem] leading-relaxed text-text-muted">
                            {item.body}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </details>
          </Reveal>
        </div>
      </div>

      <Reveal className="frame-lit">
        <div className="grid grid-cols-1 gap-8 rounded-[var(--radius-lg)] bg-[linear-gradient(180deg,#121318,#0b0c0e)] p-6 sm:p-9 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-[1.05rem] font-semibold text-text">Available now</h3>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">
              Counted from your gym&apos;s own records by fixed, explainable rules. No AI model
              produces these numbers.
            </p>
            <ul className="flex flex-col gap-2.5">
              {availableNow.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-positive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <h3 className="flex items-center gap-2 text-[1.05rem] font-semibold text-text">
              {aiRoadmap.title}
              <span className="rounded-full border border-border-strong px-2 py-0.5 text-[11px] font-normal text-text-muted">
                Not available yet
              </span>
            </h3>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">{aiRoadmap.summary}</p>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {aiRoadmap.items.map((item) => (
                <div key={item.title}>
                  <dt className="text-[0.9rem] font-medium text-text">{item.title}</dt>
                  <dd className="text-[0.85rem] leading-relaxed text-text-muted">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
