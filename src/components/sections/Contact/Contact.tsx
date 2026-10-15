import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/icons";
import { demoCovers } from "@/data/contact";
import { site } from "@/data/site";
import { ContactChannels } from "./ContactChannels";

/** The closing statement and the demo request. The only mechanism is email or phone. */
export function Contact() {
  return (
    <Section id="contact" spacing="lg" className="relative overflow-hidden">
      <Reveal variant="scale" className="frame-lit">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[image:var(--gradient-panel)] px-6 pt-14 pb-8 sm:px-12 sm:pt-20 sm:pb-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="spotlight absolute inset-x-0 top-0 h-[30rem]" />
            <div className="grid-texture radial-fade absolute inset-0 opacity-60" />
          </div>

          <div className="relative flex flex-col items-center gap-5 text-center">
            <h2 className="text-h2 text-sheen max-w-2xl text-balance">
              See LiftIQ on a gym like yours.
            </h2>
            <p className="text-lead max-w-xl text-pretty">
              A {site.demo.length} walkthrough. Email us a few details and we will reply{" "}
              {site.demo.replyTime}.
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

          <div className="relative mt-12 border-t border-border pt-8">
            <p className="text-center text-[11px] font-medium tracking-[0.14em] text-accent-text uppercase">
              The demo covers
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-3">
              {demoCovers.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9rem] text-text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent-soft text-accent-text"
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8">
            <ContactChannels />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
