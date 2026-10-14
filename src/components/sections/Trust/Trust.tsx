import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { onboardingSteps, trustPoints } from "@/data/trust";

export function Trust() {
  return (
    <Section id="trust" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Security and reliability"
        title="Built to be trusted with your members and your money."
        description="LiftIQ handles payments, receipts and personal details, so it is built to keep them safe, separate and accurate."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <ul className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
          {trustPoints.map(({ title, body, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 80} className="flex flex-col gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-sm)] border border-border-strong bg-surface-elevated text-accent-text">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">{title}</h3>
              <p className="text-[0.925rem] leading-relaxed text-text-muted">{body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="card relative flex flex-col gap-5 p-6 sm:p-8">
          <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">Getting started</h3>
          <ol className="flex flex-col gap-4">
            {onboardingSteps.map((step, i) => (
              <li
                key={step}
                className="flex gap-3.5 text-[0.925rem] leading-relaxed text-text-muted"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border-strong text-[11px] font-medium text-text tabular-nums">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
