import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { demoSteps } from "@/data/contact";
import { site } from "@/data/site";
import { ContactChannels } from "./ContactChannels";

export function Contact() {
  return (
    <Section id="demo" spacing="lg" className="relative overflow-hidden border-t border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-texture radial-fade absolute inset-0 opacity-70" />
        <div className="glow top-[-10rem] left-1/2 h-[32rem] w-[60rem] max-w-[160vw] -translate-x-1/2" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Reveal as="p" className="text-eyebrow">
              Book a demo
            </Reveal>
            <Reveal as="h2" delay={60} className="text-h2 max-w-xl text-balance">
              See LiftIQ on a gym like yours.
            </Reveal>
            <Reveal as="p" delay={120} className="text-lead max-w-lg text-pretty">
              A short, practical walkthrough of the product. Bring your questions, and we will bring
              a sample gym set up the way you work.
            </Reveal>
          </div>

          <ol className="flex flex-col gap-6">
            {demoSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={160 + i * 70} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-strong bg-surface-elevated text-[12px] font-medium text-text tabular-nums">
                  {i + 1}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-medium text-text">{step.title}</span>
                  <span className="text-[0.925rem] leading-relaxed text-text-muted">
                    {step.body}
                  </span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={120} className="lg:pt-10">
          <div className="card relative flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-h3">Request a demo</h3>
              <p className="text-[0.95rem] leading-relaxed text-text-muted">
                Email us a few details about your gym and we will reply {site.demo.replyTime} to
                find a time. Prefer to talk? Call us.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                href={site.contact.demoEmailHref}
                size="lg"
                withArrow
                cta="demo-email"
                className="sm:flex-1"
              >
                {site.cta.primary.label}
              </Button>
              <Button
                href={site.contact.phoneHref}
                size="lg"
                variant="secondary"
                cta="demo-call"
                className="sm:flex-1"
              >
                Call {site.contact.phone}
              </Button>
            </div>

            <ContactChannels />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
