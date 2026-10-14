import { DetailGroups } from "@/components/page/DetailGroups";
import { ExplorePages } from "@/components/page/ExplorePages";
import { NotYetClaimed } from "@/components/page/NotYetClaimed";
import { PageHero } from "@/components/page/PageHero";
import { Contact } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { pages } from "@/data/pages";
import { securityGroups } from "@/data/securityPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = pages.security;

export const metadata = pageMetadata(page);

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Built to protect your members and your money."
        lead="LiftIQ holds payments, receipts and personal details for your gym. Here is how it keeps them separate, accurate and in the right hands, described as it is built today."
      >
        <Button href={site.cta.primary.href} size="lg" withArrow cta="security-demo">
          {site.cta.primary.label}
        </Button>
        <Button href={site.contact.emailHref} size="lg" variant="secondary">
          Ask a security question
        </Button>
      </PageHero>
      <DetailGroups
        id="controls"
        eyebrow="Controls"
        title="How LiftIQ is protected."
        description="The safeguards built into the platform, from the database up."
        groups={securityGroups}
      />
      <NotYetClaimed />
      <ExplorePages current={page.path} />
      <Contact />
    </>
  );
}
