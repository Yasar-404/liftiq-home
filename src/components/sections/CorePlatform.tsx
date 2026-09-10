import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/features/FeatureCard";
import { features } from "@/data/features";

const spanClass: Record<4 | 6 | 8 | 12, string> = {
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
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 60} className={spanClass[f.span ?? 4]}>
            <FeatureCard {...f} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
