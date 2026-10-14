import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featureAreas } from "@/data/featuresPage";

/** Every feature, as a checklist per area of the gym. */
export function FeatureAreas() {
  return (
    <Section
      id="all-features"
      spacing="lg"
      className="band"
      containerClassName="flex flex-col gap-14"
    >
      <SectionHeading
        eyebrow="Every feature"
        title="The full list, by area of the gym."
        description="What LiftIQ does today, grouped the way a gym works. Anything still being tested is marked."
      />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureAreas.map((area, i) => (
          <Reveal
            as="li"
            key={area.title}
            delay={(i % 3) * 60}
            className="card relative p-6 sm:p-7"
          >
            <h3 className="flex flex-wrap items-center gap-2 text-[1.05rem] font-semibold tracking-tight text-text">
              {area.title}
              {area.status && (
                <span className="rounded-full border border-border-strong px-2 py-0.5 text-[11px] font-normal text-text-muted">
                  {area.status}
                </span>
              )}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {area.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-[0.9rem] leading-snug text-text-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
