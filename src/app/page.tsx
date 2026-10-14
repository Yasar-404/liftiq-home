import {
  Contact,
  CorePlatform,
  ForGymOwners,
  Hero,
  Intelligence,
  Loop,
  ProductStory,
  Trust,
} from "@/components/sections";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata;

/**
 * The overview. Each section answers one question a gym owner has, in order:
 * what is it, how does it work, what does it do, how does it help me decide,
 * what else, why not my current tools, can I trust it, and what happens next.
 * Sections link to the dedicated page that covers them in depth.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Loop />
      <ProductStory />
      <Intelligence />
      <CorePlatform />
      <ForGymOwners />
      <Trust />
      <Contact />
    </>
  );
}
