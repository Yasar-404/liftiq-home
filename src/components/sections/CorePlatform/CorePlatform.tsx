import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/features";
import type { Feature } from "@/types";
import { FeatureCard } from "./FeatureCard";

type Size = NonNullable<Feature["size"]>;

const order: Record<Size, number> = { large: 0, small: 1, wide: 2 };

const spanClass: Record<Size, string> = {
  large: "lg:col-span-3",
  small: "lg:col-span-2",
  wide: "sm:col-span-2 lg:col-span-6",
};

/** Large cards with product visuals first, then the smaller ones, then the wide strip. */
const bento = [...features].sort((a, b) => order[a.size ?? "small"] - order[b.size ?? "small"]);

export function CorePlatform() {
  return (
    <Section id="features" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Features"
        title="Built for how gyms actually run."
        description="More than one branch, a front desk that changes shifts, cash in the drawer and discounts at the counter. LiftIQ handles the details that generic software leaves out."
      />

      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {bento.map((feature, i) => (
            <Reveal
              as="li"
              key={feature.title}
              delay={(i % 3) * 70}
              className={spanClass[feature.size ?? "small"]}
            >
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </ul>
        <p className="text-[11px] text-text-faint">
          Product visuals show a sample gym and figures, for illustration.
        </p>
      </div>
    </Section>
  );
}
