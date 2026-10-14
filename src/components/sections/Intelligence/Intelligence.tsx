import { Section } from "@/components/layout/Section";
import { MockHeading, MockPanel, MockRow, MockTag } from "@/components/product/Mock";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { atRiskMembers, brief, plans, renewals } from "@/data/demo";
import { availableNow, intelligencePrinciples, onTheRoadmap } from "@/data/intelligence";
import { formatInr, plural } from "@/lib/format";

const shownAtRisk = atRiskMembers.slice(0, 3);

export function Intelligence() {
  return (
    <Section
      id="intelligence"
      spacing="lg"
      className="relative overflow-hidden"
      containerClassName="flex flex-col gap-14"
    >
      <div
        aria-hidden="true"
        className="glow top-1/3 left-1/2 -z-10 h-[30rem] w-[56rem] max-w-[150vw] -translate-x-1/2 opacity-60"
      />

      <SectionHeading
        eyebrow="Daily Brief"
        title="Start every day knowing what matters."
        description="Each morning LiftIQ counts the day for you and picks the task with the most money riding on it. It shows its working, so you can trust it."
      />

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <Reveal className="flex flex-col gap-3">
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
                    <MockTag tone={m.band === "High" ? "negative" : "warning"}>{m.band}</MockTag>
                  }
                />
              ))}
            </ul>
            <p className="mt-2.5 text-[11px] text-text-faint">
              +{atRiskMembers.length - shownAtRisk.length} more · sample data
            </p>
          </MockPanel>
        </Reveal>

        <div className="flex flex-col gap-10">
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

          <Reveal
            delay={200}
            className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-eyebrow">Available now</h3>
              <ul className="flex flex-col gap-2.5">
                {availableNow.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-snug text-text"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-positive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-eyebrow text-text-muted">On the roadmap</h3>
              <ul className="flex flex-col gap-2.5">
                {onTheRoadmap.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-snug text-text-muted"
                  >
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full border border-text-faint"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
