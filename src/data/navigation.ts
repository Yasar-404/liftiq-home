import type { NavItem } from "@/types";

export const primaryNav: NavItem[] = [
  { label: "Product", href: "#platform" },
  { label: "Solutions", href: "#owners" },
  { label: "Features", href: "#features" },
  { label: "Resources", href: "#contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "Product", href: "#platform" },
      { label: "Solutions", href: "#owners" },
      { label: "Features", href: "#features" },
      { label: "Resources", href: "#contact" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#manifesto" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#contact" },
      { label: "Terms", href: "#contact" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "#contact" },
  { label: "Terms", href: "#contact" },
];
