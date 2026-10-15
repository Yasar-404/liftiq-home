import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { demoSteps } from "@/data/contact";
import { site } from "@/data/site";
import { ContactChannels } from "./ContactChannels";

export function Contact() {
  return (
    <Section id="demo" spacing="lg" className="relative overflow-hidden">
      <Reveal className="frame-lit">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[linear-gradient(180deg,#121318,#0b0c0e)] px-6 py-14 sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="spotlight absolute inset-x-0 top-0 h-[30rem]" />
            <div className="grid-texture radial-fade absolute inset-0 opacity-60" />
          </div>

          <div className="relative flex flex-col items-center gap-5 text-center">
            <p className="text-eyebrow flex items-center gap-2.5">
              <span className="text-text-faint tabular-nums" aria-hidden="true">
                08
                <span className="mx-2 inline-block h-px w-5 bg-border-strong align-middle" />
              </span>
              Book a demo
            </p>
            <h2 className="text-h2 text-sheen max-w-2xl text-balance">
              See LiftIQ on a gym like yours.
            </h2>
            <p className="text-lead max-w-xl text-pretty">
              A short, practical walkthrough of the product. Email us a few details about your gym
              and we will reply {site.demo.replyTime} to find a time.
            </p>
            <div className="mt-3 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button href={site.contact.demoEmailHref} size="lg" withArrow cta="demo-email">
                {site.cta.primary.label}
              </Button>
              <Button href={site.contact.phoneHref} size="lg" variant="secondary" cta="demo-call">
                Call {site.contact.phone}
              </Button>
            </div>
          </div>

          <ol className="relative mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-3">
            {demoSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-strong bg-surface-elevated text-[12px] font-medium text-text tabular-nums">
                  {i + 1}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-medium text-text">{step.title}</span>
                  <span className="text-[0.925rem] leading-relaxed text-text-muted">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="relative mt-10 border-t border-border pt-2">
            <ContactChannels />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
