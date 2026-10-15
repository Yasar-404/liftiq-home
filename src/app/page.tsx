import {
  Benefits,
  Contact,
  CorePlatform,
  Hero,
  Intelligence,
  Loop,
  Overview,
  ProductStory,
  Trust,
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
      <Overview />
      <Loop />
      <ProductStory />
      <CorePlatform />
      <Intelligence />
      <Benefits />
      <Trust />
      <Contact />
    </>
  );
}
