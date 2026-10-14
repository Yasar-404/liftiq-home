import { DetailGroups } from "@/components/page/DetailGroups";
import { ExplorePages } from "@/components/page/ExplorePages";
import { PageHero } from "@/components/page/PageHero";
import { RoleGrid } from "@/components/page/RoleGrid";
import { Contact, Loop, ProductStory } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { pages } from "@/data/pages";
import { platformModules } from "@/data/platformPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = pages.platform;

export const metadata = pageMetadata(page);

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One workspace for the whole gym."
        lead="LiftIQ brings the front desk, the money and the follow-ups into one system, so a sale, a payment, a visit and a renewal all land on the same member, for every branch."
      >
        <Button href={site.cta.primary.href} size="lg" withArrow cta="platform-demo">
          {site.cta.primary.label}
        </Button>
        <Button href={pages.features.path} size="lg" variant="secondary">
          See every feature
        </Button>
      </PageHero>
      <Loop />
      <ProductStory showPageLink={false} />
      <DetailGroups
        id="modules"
        eyebrow="Modules"
        title="Everything the gym runs on, in one place."
        description="Each module works on the same records, so nothing has to be copied between tools or added up by hand."
        groups={platformModules}
      />
      <RoleGrid />
      <ExplorePages current={page.path} />
      <Contact />
    </>
  );
}
