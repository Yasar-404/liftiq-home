import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featureAreas } from "@/data/featureList";
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

export function Features() {
  return (
    <Section id="features" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        index={4}
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
              variant="scale"
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

      {/* The complete list, for readers who want it; collapsed so it doesn't dominate. */}
      <details className="group rounded-[var(--radius-lg)] border border-border bg-surface/40">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[var(--radius-lg)] px-5 py-4 text-[0.95rem] font-medium text-text sm:px-7 [&::-webkit-details-marker]:hidden">
          <span>
            Every feature, by area of the gym
            <span className="ml-2 text-[0.85rem] font-normal text-text-faint">
              {featureAreas.length} areas
            </span>
          </span>
          <span
            aria-hidden="true"
            className="text-text-faint transition-transform duration-[var(--duration-base)] group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-8 border-t border-border px-5 py-7 sm:px-7 md:grid-cols-2 lg:grid-cols-3">
          {featureAreas.map((area) => (
            <li key={area.title}>
              <h3 className="flex flex-wrap items-center gap-2 text-[0.975rem] font-semibold text-text">
                {area.title}
                {area.status && (
                  <span className="rounded-full border border-border-strong px-2 py-0.5 text-[11px] font-normal text-text-muted">
                    {area.status}
                  </span>
                )}
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {area.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[0.875rem] leading-snug text-text-muted"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </details>
    </Section>
  );
}
