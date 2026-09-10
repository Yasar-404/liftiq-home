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
  /** Layout span on the bento grid (in 12-col units, desktop). */
  span?: 4 | 6 | 8 | 12;
  accent?: boolean;
}

export interface ProductTab {
  id: string;
  label: string;
  headline: string;
  description: string;
  points: string[];
}

export interface EcosystemNode {
  label: string;
  angle: number;
}
