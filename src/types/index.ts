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
  /** Column span on the 12-column bento grid (lg and up). */
  span?: 4 | 6 | 8 | 12;
  accent?: boolean;
}

export type TabVisualKind = "revenue" | "attendance" | "records" | "followUps";

export interface ProductTab {
  id: string;
  label: string;
  headline: string;
  description: string;
  points: string[];
  visual: TabVisualKind;
}
