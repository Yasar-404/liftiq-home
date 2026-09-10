import type { Feature } from "@/types";
import {
  Members,
  Attendance,
  Billing,
  Crm,
  Communication,
  Insights,
  Copilot,
  Intelligence,
} from "@/components/ui/icons";

export const features: Feature[] = [
  {
    title: "Membership Management",
    description:
      "Manage member profiles, plans, renewals, status, and lifecycle from one clean record.",
    icon: Members,
    span: 8,
    accent: true,
  },
  {
    title: "Attendance",
    description: "Fast, reliable check-ins and attendance tracking that never gets in the way.",
    icon: Attendance,
    span: 4,
  },
  {
    title: "Billing",
    description:
      "Keep payments, invoices, renewals, and revenue visibility organized and current.",
    icon: Billing,
    span: 4,
  },
  {
    title: "CRM",
    description: "Turn member interactions into a queue of actionable follow-ups.",
    icon: Crm,
    span: 4,
  },
  {
    title: "Communication",
    description: "Keep important member communication in context, not scattered across chats.",
    icon: Communication,
    span: 4,
  },
  {
    title: "Reports & Insights",
    description:
      "Understand what's happening across the business with reports that stay readable.",
    icon: Insights,
    span: 6,
  },
  {
    title: "AI Copilot",
    description: "Turn gym data into useful answers, insights, and actions — in plain language.",
    icon: Copilot,
    span: 6,
    accent: true,
  },
  {
    title: "Business Intelligence",
    description: "Make better decisions with a clearer, connected view of the business.",
    icon: Intelligence,
    span: 12,
  },
];
