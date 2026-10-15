import { BriefMock } from "@/components/product/BriefMock";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { overviewCallouts } from "@/data/loop";
import { FeatureVisual } from "../CorePlatform/FeatureVisual";
import { TabVisual } from "../ProductStory/TabVisual";

const layer =
  "rounded-[var(--radius-lg)] border border-border-strong bg-surface p-2.5 shadow-[var(--shadow-lg)] sm:p-3";

/**
 * The product at a glance: three real screens, layered. On large screens they
 * overlap in depth with a slight perspective; below that they simply stack.
 */
export function Overview() {
  return (
    <Section id="product" spacing="lg" containerClassName="flex flex-col gap-14 lg:gap-20">
      <SectionHeading
        index={1}
        eyebrow="Product"
        title="One workspace where the day's work meets the money."
        description="The brief, the member and the approval below are three of the screens LiftIQ gives a gym owner. They run on the same records, so each one knows what the others know."
      />

      <div className="relative lg:[perspective:1800px]">
        <div
          aria-hidden="true"
          className="glow inset-x-[8%] top-[10%] h-[70%] opacity-60 max-lg:hidden"
        />
        <div className="relative grid grid-cols-1 gap-4 lg:[transform:rotateY(-4deg)_rotateX(2deg)] lg:grid-cols-12 lg:gap-0">
          <Reveal variant="mask" className={`${layer} lg:col-span-8 lg:col-start-1 lg:row-start-1`}>
            <BriefMock />
          </Reveal>

          <Reveal
            variant="right"
            delay={160}
            className={`${layer} lg:z-10 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mt-48`}
          >
            <TabVisual kind="members" />
          </Reveal>

          <Reveal
            variant="left"
            delay={280}
            className={`${layer} lg:z-20 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:-mt-4 lg:ml-8`}
          >
            <FeatureVisual kind="approval" />
          </Reveal>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-3 md:gap-10">
        {overviewCallouts.map((callout, i) => (
          <Reveal as="li" key={callout.title} delay={i * 80} className="flex flex-col gap-2">
            <span className="text-[0.72rem] font-medium text-text-faint tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">
              {callout.title}
            </h3>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">{callout.body}</p>
          </Reveal>
        ))}
      </ul>
      <p className="-mt-8 text-[11px] text-text-faint">Sample gym and figures, for illustration.</p>
    </Section>
  );
}
