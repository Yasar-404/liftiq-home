import { Section } from "@/components/layout/Section";
import { Aurora } from "@/components/ui/Aurora";
import { Reveal } from "@/components/ui/Reveal";
import { ContactChannels } from "./ContactChannels";
import { DemoCard } from "./DemoCard";

export function Contact() {
  return (
    <Section id="contact" spacing="lg" className="relative overflow-hidden">
      <Aurora variant="contact" dots />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="text-eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-h2 max-w-lg text-balance">
                Book a demo, or just <span className="text-gradient">talk to us</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-[1.05rem] leading-relaxed text-text-muted">
                Tell us about your gym and we&apos;ll show you how LiftIQ fits the way you already
                run it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <ContactChannels />
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:pt-2">
          <DemoCard />
        </Reveal>
      </div>
    </Section>
  );
}
