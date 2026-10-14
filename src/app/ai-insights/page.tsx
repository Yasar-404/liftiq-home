import { AiStatus } from "@/components/page/AiStatus";
import { DetailGroups } from "@/components/page/DetailGroups";
import { ExplorePages } from "@/components/page/ExplorePages";
import { PageHero } from "@/components/page/PageHero";
import { Contact, Intelligence } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { aiRoadmap, insightGroups } from "@/data/insightsPage";
import { pages } from "@/data/pages";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

const page = pages.aiInsights;

export const metadata = pageMetadata(page);

export default function AiInsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Insights"
        title="Insights you can check."
        lead="LiftIQ reads your gym's own records and tells you what needs attention today. The insights available now are counted by clear rules, not guessed by a model. AI-assisted features are planned, with a person approving every action."
      >
        <Button href={site.cta.primary.href} size="lg" withArrow cta="insights-demo">
          {site.cta.primary.label}
        </Button>
        <Button href={pages.platform.path} size="lg" variant="secondary">
          Explore the platform
        </Button>
      </PageHero>
      <AiStatus />
      <Intelligence showPageLink={false} />
      <DetailGroups
        id="how-insights-work"
        eyebrow="How it works"
        title="What each insight counts."
        description="Every figure links to the list it came from in the app, so you can check any number yourself."
        groups={insightGroups}
        band
      />
      <DetailGroups
        id="ai-roadmap"
        eyebrow="Planned AI"
        title="AI that proposes. People decide."
        description="How AI-assisted features are being designed. None of these is available yet."
        groups={[aiRoadmap]}
      />
      <ExplorePages current={page.path} />
      <Contact />
    </>
  );
}
