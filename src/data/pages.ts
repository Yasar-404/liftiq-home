/**
 * The site's dedicated pages: one source for their paths, navigation labels,
 * titles and descriptions. Navigation, the sitemap and each page's metadata
 * read from here.
 */

export interface PageInfo {
  path: `/${string}`;
  /** Label in the navigation. */
  label: string;
  /** Document title, before the " | LiftIQ" suffix. */
  title: string;
  description: string;
}

export const pages = {
  platform: {
    path: "/platform",
    label: "Platform",
    title: "Gym Management Platform",
    description:
      "How LiftIQ runs a gym from one workspace: memberships, payments with GST receipts, attendance, renewals, leads and reports, for owners and the front desk.",
  },
  aiInsights: {
    path: "/ai-insights",
    label: "AI Insights",
    title: "AI Insights and Reporting for Gyms",
    description:
      "The LiftIQ morning brief, members likely to leave and weekly summaries, counted from your gym's own data. What is available today and which AI features are planned.",
  },
  features: {
    path: "/features",
    label: "Features",
    title: "Features",
    description:
      "Every LiftIQ feature by area: memberships, payments and GST billing, attendance, renewals, leads, reports, branches, cash drawer, discount approvals and team roles.",
  },
  security: {
    path: "/security",
    label: "Security",
    title: "Security",
    description:
      "How LiftIQ protects gym data and money: per-gym isolation in the database, role-based access, an audit trail, an append-only payment ledger and hardened hosting.",
  },
} as const satisfies Record<string, PageInfo>;

/** The pages in the main navigation, in order. */
export const primaryPages: PageInfo[] = [
  pages.platform,
  pages.aiInsights,
  pages.features,
  pages.security,
];
