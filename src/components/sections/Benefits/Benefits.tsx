import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/data/benefits";
import { TrustStrip } from "./TrustStrip";

/**
 * Three benefits, then a quiet strip of what the product is built to protect.
 * The strip carries the `security` anchor so it stays a navigation target
 * without becoming a section of its own.
 */
export function Benefits() {
  return (
    <Section id="benefits" spacing="lg" containerClassName="flex flex-col gap-20">
      <div className="flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Benefits"
          title="Less admin. A clearer picture. Members who stay."
        />

        <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
          {benefits.map((benefit, i) => (
            <Reveal
              as="li"
              key={benefit.title}
              delay={i * 90}
              className="flex flex-col gap-3 border-t border-border-strong pt-6 md:border-t-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <span className="text-[0.72rem] font-medium text-accent-text tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.3rem] font-semibold tracking-tight text-text">
                {benefit.title}
              </h3>
              <p className="text-[0.975rem] leading-relaxed text-text-muted">{benefit.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>

      <TrustStrip />
    </Section>
  );
}
