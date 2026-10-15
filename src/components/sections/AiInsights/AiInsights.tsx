import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { BriefMock } from "@/components/product/BriefMock";
import { MockHeading, MockPanel, MockRow } from "@/components/product/Mock";
import { DetailDisclosure } from "@/components/ui/DetailDisclosure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brief, plans, renewals } from "@/data/demo";
import { insightGroups, insightPrinciples, insightStatus } from "@/data/insights";
import { formatInr } from "@/lib/format";

/** A numbered caption above one panel of the example. */
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
 * One worked example of how a gym owner gets an insight and acts on it: the
 * morning brief, then the exact members behind its recommended task. It says
 * plainly that today's insights are counted by rules, not produced by a model.
 */
export function AiInsights() {
  return (
    <Section
      id="ai"
      spacing="lg"
      className="ai-surface relative overflow-hidden"
      containerClassName="flex flex-col gap-14"
    >
      <SectionHeading
        eyebrow="AI Insights"
        title="Start the day knowing what matters."
        description="Each morning LiftIQ counts the day from your own records and picks the one task with the most money riding on it."
      />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal variant="mask" className="frame-lit">
          <div className="flex flex-col gap-1 rounded-[var(--radius-lg)] bg-[image:var(--gradient-panel)] p-4 sm:p-6">
            <Stage n={1} label="The brief, counted this morning">
              <BriefMock />
            </Stage>
            <Trace />
            <Stage n={2} label="Who to call, and what is at stake">
              <MockPanel>
                <MockHeading title="Not reached yet" aside="Expiring this week" />
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
                  <span className="text-text-muted">{brief.action.atStake}</span>
                  <span className="font-semibold text-text tabular-nums">
                    {formatInr(renewals.notContactedAtStake)}
                  </span>
                </div>
              </MockPanel>
            </Stage>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 lg:sticky lg:top-28">
          <ul className="flex flex-col gap-5">
            {insightPrinciples.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="flex flex-col gap-1">
                <h3 className="text-[1rem] font-semibold tracking-tight text-text">{item.title}</h3>
                <p className="text-[0.925rem] leading-relaxed text-text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="flex flex-col gap-2 border-t border-border pt-6 text-sm">
            <p className="leading-relaxed text-text">{insightStatus.available}</p>
            <p className="leading-relaxed text-text-muted">{insightStatus.planned}</p>
          </Reveal>

          <DetailDisclosure title="How insights work" groups={insightGroups} />
        </div>
      </div>
    </Section>
  );
}
