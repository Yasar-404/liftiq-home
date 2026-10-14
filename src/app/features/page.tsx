import { ExplorePages } from "@/components/page/ExplorePages";
import { FeatureAreas } from "@/components/page/FeatureAreas";
import { PageHero } from "@/components/page/PageHero";
import { Contact, CorePlatform, ForGymOwners } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { pages } from "@/data/pages";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = pages.features;

export const metadata = pageMetadata(page);

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything a gym runs on."
        lead="Memberships, payments with GST receipts, attendance, renewals, leads and reports, plus the details generic software leaves out: branches, the cash drawer, discount approvals and roles for the front desk."
      >
        <Button href={site.cta.primary.href} size="lg" withArrow cta="features-demo">
          {site.cta.primary.label}
        </Button>
        <Button href="#all-features" size="lg" variant="secondary">
          Jump to the full list
        </Button>
      </PageHero>
      <CorePlatform showPageLink={false} />
      <FeatureAreas />
      <ForGymOwners />
      <ExplorePages current={page.path} />
      <Contact />
    </>
  );
}
