import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navigation/Navbar";
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

/**
 * Each section answers one question a gym owner has, in order: what is it,
 * how does it work, what does it do, how does it help me decide, what else,
 * why not my current tools, can I trust it, and what happens next.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Loop />
        <ProductStory />
        <Intelligence />
        <CorePlatform />
        <ForGymOwners />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
