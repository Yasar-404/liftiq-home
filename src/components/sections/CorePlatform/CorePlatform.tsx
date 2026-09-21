import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/features";
import type { Feature } from "@/types";
import { FeatureCard } from "./FeatureCard";

const spanClass: Record<NonNullable<Feature["span"]>, string> = {
  4: "lg:col-span-4",
  6: "lg:col-span-6",
  8: "lg:col-span-8",
  12: "lg:col-span-12",
};

export function CorePlatform() {
  return (
    <Section id="features" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Core platform"
        title="One workspace for your entire operation."
        description="Purpose-built modules that share the same data, the same design, and the same source of truth."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 60} className={spanClass[feature.span ?? 4]}>
            <FeatureCard {...feature} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
