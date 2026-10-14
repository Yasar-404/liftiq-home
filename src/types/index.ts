import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
  /** Shown as a badge when the capability is not generally available yet. */
  status?: string;
}

export type TabVisualKind =
  "members" | "payments" | "attendance" | "renewals" | "leads" | "reports";

export interface ProductTab {
  id: TabVisualKind;
  label: string;
  headline: string;
  /** The operational problem, in the owner's words. */
  problem: string;
  /** What LiftIQ does about it. */
  solution: string;
  points: string[];
}
