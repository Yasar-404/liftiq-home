import type { NavItem } from "@/types";
import { primaryPages } from "./pages";
import { site } from "./site";

export const primaryNav: NavItem[] = primaryPages.map(({ label, path }) => ({
  label,
  href: path,
}));

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [{ label: "Overview", href: "/" }, ...primaryNav],
  },
  {
    title: "Company",
    items: [
      { label: "Book a Demo", href: site.cta.primary.href },
      { label: "Email us", href: site.contact.emailHref },
    ],
  },
];
