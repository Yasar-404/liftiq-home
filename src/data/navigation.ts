import type { NavItem } from "@/types";

export const primaryNav: NavItem[] = [
  { label: "Platform", href: "#platform" },
  { label: "Daily Brief", href: "#intelligence" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#trust" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Platform", href: "#platform" },
      { label: "Daily Brief", href: "#intelligence" },
      { label: "Features", href: "#features" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Why LiftIQ", href: "#compare" },
      { label: "Security", href: "#trust" },
      { label: "Book a Demo", href: "#demo" },
    ],
  },
];
