import { Section } from "@/components/layout/Section";
import { Renew } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { loopSteps } from "@/data/loop";

export function HowItWorks() {
  return (
    <Section id="how-it-works" spacing="lg" containerClassName="flex flex-col gap-16">
      <SectionHeading
        align="center"
        index={2}
        eyebrow="How it works"
        title="Built around the loop that keeps a gym in business."
        description="Most gym revenue is lost between steps: a payment nobody chased, a renewal nobody noticed, a lead nobody called back. LiftIQ keeps every step in one place."
      />

      <div className="relative">
        {/* The rail: vertical on small screens, horizontal through the nodes from lg. */}
        <div
          aria-hidden="true"
          className="absolute top-6 bottom-6 left-6 w-px bg-[linear-gradient(180deg,transparent,var(--color-border-strong)_12%,var(--color-border-strong)_88%,transparent)] lg:top-6 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-px lg:w-auto lg:bg-[linear-gradient(90deg,var(--color-border-strong),rgba(160,139,255,0.6)_50%,var(--color-border-strong))]"
        />

        <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
          {loopSteps.map(({ title, body, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="flex gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border-strong bg-surface-elevated text-accent-text shadow-[0_0_0_6px_var(--color-bg),0_0_24px_-4px_rgba(124,92,255,0.5)]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col gap-2 pt-1 lg:pt-3">
                <span className="text-[0.72rem] font-medium text-text-faint tabular-nums">
                  Step {i + 1}
                </span>
                <h3 className="text-[1.25rem] font-semibold tracking-tight text-text">{title}</h3>
                <p className="max-w-[17rem] text-[0.925rem] leading-relaxed text-text-muted">
                  {body}
                </p>
              </span>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal
        as="p"
        delay={200}
        className="mx-auto flex items-center gap-2 text-sm text-text-muted"
      >
        <Renew className="h-4 w-4 text-accent-text" />
        Every renewal starts the loop again, so nothing falls between the steps.
      </Reveal>
    </Section>
  );
}
