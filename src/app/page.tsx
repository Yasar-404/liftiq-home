import { AiInsights, Benefits, Contact, Hero, Platform } from "@/components/sections";

/**
 * The whole story in five sections: what LiftIQ is, how the platform covers a
 * gym, one example of the insights, what it does for the business, and how to
 * book a demo. Security is a short strip inside the benefits section.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Platform />
      <AiInsights />
      <Benefits />
      <Contact />
    </>
  );
}
