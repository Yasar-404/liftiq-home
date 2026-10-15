import { AreaPreview } from "@/components/product/AreaPreview";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { platformAreas } from "@/data/platform";
import type { AreaId } from "@/types";
import { PlatformTabs } from "./PlatformTabs";

const previews = Object.fromEntries(
  platformAreas.map((area) => [area.id, <AreaPreview key={area.id} kind={area.id} />]),
) as Record<AreaId, React.ReactNode>;

/** The platform, one tab per area of the gym. */
export function Platform() {
  return (
    <Section id="platform" spacing="lg" containerClassName="flex flex-col gap-12">
      <SectionHeading
        align="center"
        eyebrow="Platform"
        title="One workspace for the whole gym."
        description="Switch between the areas your team works in every day."
      />
      <PlatformTabs areas={platformAreas} previews={previews} />
    </Section>
  );
}
