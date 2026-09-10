import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductStory } from "@/components/sections/ProductStory";
import { CorePlatform } from "@/components/sections/CorePlatform";
import { AiCopilot } from "@/components/sections/AiCopilot";
import { AttendanceExperience } from "@/components/sections/AttendanceExperience";
import { ForGymOwners } from "@/components/sections/ForGymOwners";
import { Manifesto } from "@/components/sections/Manifesto";
import { PlatformEcosystem } from "@/components/sections/PlatformEcosystem";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Positioning />
        <ProblemSection />
        <ProductStory />
        <CorePlatform />
        <AiCopilot />
        <AttendanceExperience />
        <ForGymOwners />
        <Manifesto />
        <PlatformEcosystem />
        <FinalCta />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
