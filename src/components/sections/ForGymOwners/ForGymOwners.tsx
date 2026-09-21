import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sheen } from "@/components/ui/Sheen";
import { afterItems, beforeItems } from "@/data/owners";

export function ForGymOwners() {
  return (
    <Section id="owners" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="For gym owners"
        title="Spend less time managing the business. More time growing it."
        description="The same operation, moved out of scattered tools and into one workspace that keeps itself current."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-border bg-bg-subtle/60 p-6 sm:p-7">
            <span className="text-eyebrow text-text-faint">Before</span>
            <ul className="flex flex-col gap-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-faint">
                  <span className="mt-1.5 h-1 w-3 shrink-0 rounded-full bg-white/15" />
                  <span className="line-through decoration-white/20">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card group relative flex h-full flex-col gap-4 overflow-hidden p-6 sm:p-7">
            <Sheen />
            <div className="pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.22),transparent_70%)] blur-2xl" />
            <span className="text-eyebrow relative text-accent">With LiftIQ</span>
            <ul className="relative flex flex-col gap-3">
              {afterItems.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 50}
                  className="flex items-start gap-2.5 text-sm text-text"
                >
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
