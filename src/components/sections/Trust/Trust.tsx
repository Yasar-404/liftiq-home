import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { onboardingSteps, trustPoints } from "@/data/trust";
import { pages } from "@/data/pages";

interface TrustProps {
  /** Link to the dedicated page. Off on that page itself. */
  showPageLink?: boolean;
}

export function Trust({ showPageLink = true }: TrustProps) {
  return (
    <Section id="trust" spacing="lg" className="band" containerClassName="flex flex-col gap-14">
      <SectionHeading
        link={
          showPageLink ? { href: pages.security.path, label: "Read about security" } : undefined
        }
        align="center"
        eyebrow="Security and reliability"
        title="Built to be trusted with your members and your money."
        description="LiftIQ handles payments, receipts and personal details, so it is built to keep them safe, separate and accurate."
      />

      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map(({ title, body, icon: Icon }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 70}
            className="flex flex-col gap-3 bg-[linear-gradient(180deg,#101114,#0c0d10)] p-6 sm:p-7"
          >
            <Icon className="h-5 w-5 text-accent-text" />
            <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">{title}</h3>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">{body}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120} className="flex flex-col gap-6">
        <h3 className="text-center text-[0.8rem] font-medium tracking-[0.14em] text-text-faint uppercase">
          Getting started
        </h3>
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {onboardingSteps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3.5 text-[0.925rem] leading-relaxed text-text-muted md:flex-col md:items-center md:text-center"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border-strong bg-surface-elevated text-[12px] font-medium text-text tabular-nums">
                {i + 1}
              </span>
              <span className="max-w-xs">{step}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
