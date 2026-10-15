import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
}

/** The tabs of the platform section. */
export type AreaId = "members" | "billing" | "attendance" | "analytics";

export interface PlatformArea {
  id: AreaId;
  label: string;
  headline: string;
  summary: string;
  points: string[];
}

interface DetailItem {
  title: string;
  body: string;
}

export interface DetailGroup {
  title: string;
  summary?: string;
  items: DetailItem[];
}
