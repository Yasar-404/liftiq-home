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
  {
    label: "Call us",
    value: site.contact.phone,
    href: site.contact.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: site.contact.email,
    href: site.contact.emailHref,
    icon: Mail,
  },
  {
    label: "Studio",
    value: site.contact.location,
    icon: Pin,
  },
];

export const footerContact: ContactChannel[] = [
  { label: "Phone", value: site.contact.phone, href: site.contact.phoneHref, icon: Phone },
  { label: "Email", value: site.contact.email, href: site.contact.emailHref, icon: Mail },
  { label: "Location", value: site.contact.locationShort, icon: Pin },
];
