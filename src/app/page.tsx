import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import {
  AiCopilot,
  Attendance,
  Contact,
  CorePlatform,
  Ecosystem,
  FinalCta,
  ForGymOwners,
  Hero,
  Manifesto,
  Positioning,
  Problem,
  ProductStory,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Positioning />
        <Problem />
        <ProductStory />
        <CorePlatform />
        <AiCopilot />
        <Attendance />
        <ForGymOwners />
        <Manifesto />
        <Ecosystem />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
