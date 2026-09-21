import { Attendance, Billing, Grid, Insights, Members } from "@/components/ui/icons";
import type { IconType } from "@/types";

/** Sample data rendered by the product mockups. Not real customer data. */

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

interface DashboardNavItem {
  label: string;
  icon: IconType;
  active?: boolean;
}

export const dashboardNav: DashboardNavItem[] = [
  { label: "Dashboard", icon: Grid, active: true },
  { label: "Members", icon: Members },
  { label: "Attendance", icon: Attendance },
  { label: "Billing", icon: Billing },
  { label: "Insights", icon: Insights },
];

export const dashboardKpis = [
  { label: "Revenue · MTD", value: 4.82, decimals: 2, prefix: "₹", suffix: "L" },
  { label: "Active members", value: 612 },
  { label: "Check-ins today", value: 148 },
];

export const revenueSeries = [22, 26, 24, 30, 28, 34, 33, 40, 44, 42, 52, 58];

export const weeklyCheckIns = {
  values: [58, 72, 65, 80, 91, 74, 40],
  labels: weekdays,
  peakIndex: 4,
};

export const upcomingRenewals = [
  { name: "Priya N.", plan: "Annual · Strength", due: "2d" },
  { name: "Arjun M.", plan: "Quarterly", due: "4d" },
  { name: "Kavya S.", plan: "Monthly · PT", due: "6d" },
];

export const recentActivity = [
  { who: "Rahul V.", what: "checked in", when: "now" },
  { who: "Meera K.", what: "renewed Annual plan", when: "6m" },
  { who: "Dev A.", what: "booked assessment", when: "18m" },
];

/** Product story tab visuals */

export const revenueOverview = {
  series: [24, 28, 26, 33, 31, 38, 41, 46, 44, 53, 58, 64],
  stats: [
    { label: "Collected", value: "₹4.82L" },
    { label: "Pending", value: "₹52k" },
    { label: "Renewals", value: "18" },
  ],
};

export const attendanceWeek = {
  values: [62, 78, 70, 88, 96, 74, 44],
  labels: weekdays,
  peakIndex: 4,
  summary: "Friday peak · 96 check-ins · avg 0.4s each",
};

interface TableRow {
  name: string;
  note: string;
  tag: string;
}

export const memberRecords: TableRow[] = [
  { name: "Priya N.", note: "Annual · Strength", tag: "Open" },
  { name: "Arjun M.", note: "Quarterly", tag: "Due" },
  { name: "Kavya S.", note: "Monthly · PT", tag: "New" },
  { name: "Rahul V.", note: "Annual", tag: "Active" },
];

export const followUpQueue: TableRow[] = [
  { name: "Priya N.", note: "Trial ending", tag: "Open" },
  { name: "Arjun M.", note: "No-show 7d", tag: "Due" },
  { name: "Kavya S.", note: "Renewal call", tag: "New" },
  { name: "Rahul V.", note: "Won back", tag: "Active" },
];
