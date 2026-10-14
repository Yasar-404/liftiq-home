import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { loopSteps } from "@/data/loop";

export function Loop() {
  return (
    <Section id="how-it-works" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="How it works"
        title="Built around the loop that keeps a gym in business."
        description="Most gym revenue is lost between steps: a payment nobody chased, a renewal nobody noticed, a lead nobody called back. LiftIQ keeps every step in one place, so nothing slips between them."
      />

      <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {loopSteps.map(({ title, body, icon: Icon }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 80}
            className="flex flex-col gap-4 bg-bg p-6 sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-sm)] border border-border-strong bg-surface-elevated text-accent-text">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[0.72rem] text-text-faint" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-[1.15rem] font-semibold tracking-tight text-text">{title}</h3>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">{body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
