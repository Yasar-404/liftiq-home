import {
  Benefits,
  Contact,
  Features,
  Hero,
  AiInsights,
  HowItWorks,
  PlatformOverview,
  Workflows,
  About,
} from "@/components/sections";

/**
 * The whole product story on one page, in the order a gym owner's questions
 * come up: what is it, how does it work, what does it do, what is different,
 * what do I get, can I trust it, and what happens next.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <HowItWorks />
      <Workflows />
      <Features />
      <AiInsights />
      <Benefits />
      <About />
      <Contact />
    </>
  );
}
