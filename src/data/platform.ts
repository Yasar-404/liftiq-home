import type { PlatformArea } from "@/types";

/**
 * The four areas shown as tabs in the platform section. `id` picks the sample
 * preview from components/product/AreaPreview. Copy is deliberately short: one
 * sentence and three points per area.
 */
export const platformAreas: PlatformArea[] = [
  {
    id: "members",
    label: "Members",
    headline: "Every member, on one record.",
    summary: "Plan, payments, visits and notes together, with renew, call and WhatsApp a tap away.",
    points: [
      "Sell, renew and freeze plans",
      "A timeline of everything",
      "Call or WhatsApp from the record",
    ],
  },
  {
    id: "billing",
    label: "Billing",
    headline: "Every rupee recorded once.",
    summary:
      "GST invoices and numbered receipts, with what is still owed sorted by how late it is.",
    points: ["Cash, UPI and card", "Receipts issued automatically", "Daily cash-drawer close"],
  },
  {
    id: "attendance",
    label: "Attendance",
    headline: "See who comes, and who stopped.",
    summary:
      "Check members in from a search, and spot visits falling away while there is time to call.",
    points: [
      "Check in and out in two taps",
      "Who is in the gym now",
      "Members slipping away, with why",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    headline: "Reports you will actually read.",
    summary:
      "Collections, revenue by plan, dues and renewals, ready whenever you look, for one branch or all.",
    points: ["Collections by method", "Revenue by plan and branch", "Busiest days and times"],
  },
];
