import type { ProductTab } from "@/types";

export const productTabs: ProductTab[] = [
  {
    id: "overview",
    label: "Overview",
    headline: "The whole operation, on one screen.",
    description:
      "Revenue, attendance, renewals, and member health in a single workspace built for daily use.",
    points: ["Live business snapshot", "Today's priorities surfaced first", "No tab-switching"],
  },
  {
    id: "members",
    label: "Members",
    headline: "Every member, one record.",
    description:
      "Profiles, plans, payment history, attendance, and notes stay together and stay current.",
    points: ["Full lifecycle view", "Plan and renewal status", "Activity timeline"],
  },
  {
    id: "attendance",
    label: "Attendance",
    headline: "Check-ins that keep up with the floor.",
    description:
      "Recognise members instantly and record attendance without slowing anyone down.",
    points: ["Sub-second check-in", "Live floor count", "Trend detection"],
  },
  {
    id: "billing",
    label: "Billing",
    headline: "Payments and renewals, always current.",
    description:
      "Track invoices, dues, and revenue with a clear picture of what's collected and what's pending.",
    points: ["Renewal pipeline", "Outstanding dues at a glance", "Revenue by plan"],
  },
  {
    id: "crm",
    label: "CRM",
    headline: "Follow-ups that don't fall through.",
    description:
      "Turn conversations, trials, and at-risk signals into a working queue your team can clear.",
    points: ["Lead and trial tracking", "At-risk member alerts", "Assigned follow-ups"],
  },
  {
    id: "insights",
    label: "Insights",
    headline: "Reports you'll actually read.",
    description:
      "Understand growth, retention, and utilisation without exporting anything to a spreadsheet.",
    points: ["Retention cohorts", "Peak-hour utilisation", "Plan performance"],
  },
  {
    id: "ai",
    label: "AI",
    headline: "Ask your gym a question.",
    description:
      "The Copilot reads your data and answers in plain language — with the numbers behind it.",
    points: ["Natural-language queries", "Proactive signals", "One-click drill-down"],
  },
];
