import type { NavItem } from "@/types";
import { navSections, sectionHref } from "./sections";
import { site } from "./site";

export const primaryNav: NavItem[] = navSections.map(({ id, label }) => ({
  label,
  href: sectionHref(id),
}));

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [...primaryNav, { label: "How it works", href: sectionHref("how-it-works") }],
  },
  {
    title: "Company",
    items: [
      { label: "Book a Demo", href: site.cta.primary.href },
      { label: "Email us", href: site.contact.emailHref },
      { label: "Call us", href: site.contact.phoneHref },
    ],
  },
];
