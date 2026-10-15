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

/** What a demo covers, as three short lines. */
export const demoCovers = [
  "Your gym's set-up: branches, plans and members",
  "Selling, collecting and renewing, step by step",
  "Pricing, moving your data across, and onboarding",
];
