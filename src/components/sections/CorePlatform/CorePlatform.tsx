import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/features";
import { FeatureCard } from "./FeatureCard";

export function CorePlatform() {
  return (
    <Section id="features" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Features"
        title="Built for how gyms actually run."
        description="More than one branch, a front desk that changes shifts, cash in the drawer and discounts at the counter. LiftIQ handles the details that generic software leaves out."
      />

      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal as="li" key={feature.title} delay={(i % 3) * 70} className="bg-bg">
            <FeatureCard {...feature} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
