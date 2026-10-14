import { Mail, Phone, Pin } from "@/components/ui/icons";
import type { IconType } from "@/types";
import { site } from "./site";

interface ContactChannel {
  label: string;
  value: string;
  icon: IconType;
  href?: string;
}

export const contactChannels: ContactChannel[] = [
  { label: "Email", value: site.contact.email, href: site.contact.emailHref, icon: Mail },
  { label: "Phone", value: site.contact.phone, href: site.contact.phoneHref, icon: Phone },
  { label: "Based in", value: site.contact.location, icon: Pin },
];

/** What happens after someone asks for a demo. */
export const demoSteps = [
  {
    title: "Tell us about your gym",
    body: "Your branches, roughly how many members you have, and how you track them today.",
  },
  {
    title: `A ${site.demo.length} walkthrough`,
    body: "We show LiftIQ on a sample gym set up like yours: selling a plan, taking a payment, working renewals.",
  },
  {
    title: "Your questions, answered",
    body: "Pricing, moving your existing members across, and what onboarding involves. No obligation.",
  },
];
