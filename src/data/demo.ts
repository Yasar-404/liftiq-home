import { formatChange, formatInr, percentChange, plural, sum } from "@/lib/format";

/**
 * The sample workspace behind every product preview on the site.
 *
 * The gym, its members and every figure are fictional. Totals, counts and
 * percentages are derived from the rows below rather than typed in, so the
 * dashboard, the brief, the tabs and the risk list always agree. Dates are
 * relative ("today", "in 3 days") so the previews never look stale.
 */

export const demoGym = {
  name: "Sample Fitness",
  initials: "SF",
  activeMembers: 286,
  inGymNow: 23,
} as const;

/** GST-inclusive plan prices in rupees. */
export const plans = {
  Monthly: 2_000,
  Quarterly: 5_400,
  "Half-yearly": 9_600,
  Annual: 16_800,
} as const;

export type PlanName = keyof typeof plans;

/* Renewals ---------------------------------------------------------------- */

interface ExpiringMembership {
  name: string;
  plan: PlanName;
  endsInDays: number;
  visitsThisMonth: number;
  contacted: boolean;
}

/** Every membership that ends in the next 7 days. */
export const expiringThisWeek: ExpiringMembership[] = [
  { name: "Priya N.", plan: "Annual", endsInDays: 1, visitsThisMonth: 14, contacted: false },
  { name: "Arjun M.", plan: "Quarterly", endsInDays: 2, visitsThisMonth: 11, contacted: true },
  { name: "Kavya S.", plan: "Monthly", endsInDays: 2, visitsThisMonth: 9, contacted: false },
  { name: "Rahul V.", plan: "Half-yearly", endsInDays: 3, visitsThisMonth: 12, contacted: false },
  { name: "Meera K.", plan: "Quarterly", endsInDays: 4, visitsThisMonth: 7, contacted: true },
  { name: "Dev A.", plan: "Monthly", endsInDays: 5, visitsThisMonth: 10, contacted: false },
  { name: "Sana S.", plan: "Annual", endsInDays: 6, visitsThisMonth: 13, contacted: true },
  { name: "Vikram R.", plan: "Monthly", endsInDays: 6, visitsThisMonth: 2, contacted: false },
];

const notContacted = expiringThisWeek.filter((m) => !m.contacted);
const stakeOf = (rows: ExpiringMembership[]) => sum(rows.map((m) => plans[m.plan]));

export const renewals = {
  rows: expiringThisWeek,
  count: expiringThisWeek.length,
  atStake: stakeOf(expiringThisWeek),
  notContacted,
  notContactedCount: notContacted.length,
  notContactedAtStake: stakeOf(notContacted),
};

/* Payments ---------------------------------------------------------------- */

interface Payment {
  name: string;
  plan: PlanName;
  method: "UPI" | "Cash" | "Card";
  receipt: string;
}

/** Payments recorded yesterday. */
export const paymentsYesterday: Payment[] = [
  { name: "Neha P.", plan: "Monthly", method: "UPI", receipt: "R-1182" },
  { name: "Karthik R.", plan: "Quarterly", method: "UPI", receipt: "R-1183" },
  { name: "Aditi G.", plan: "Monthly", method: "Cash", receipt: "R-1184" },
];

export const paymentRows = paymentsYesterday.map((p) => ({ ...p, amount: plans[p.plan] }));

interface Due {
  name: string;
  amount: number;
  daysLate: number;
}

/** Members with a balance still owed. */
export const outstandingDues: Due[] = [
  { name: "Imran Q.", amount: 5_400, daysLate: 12 },
  { name: "Lakshmi T.", amount: 4_200, daysLate: 9 },
  { name: "Gautam B.", amount: 3_600, daysLate: 6 },
  { name: "Riya D.", amount: 2_000, daysLate: 3 },
  { name: "Harsh J.", amount: 2_000, daysLate: 0 },
  { name: "Pooja L.", amount: 1_800, daysLate: 0 },
];

export const dues = {
  rows: outstandingDues,
  total: sum(outstandingDues.map((d) => d.amount)),
  members: outstandingDues.length,
  overdue: outstandingDues.filter((d) => d.daysLate > 0).length,
};

/**
 * Collections per week for the last 12 weeks, in rupees. The last week ends
 * yesterday and its final day matches `paymentsYesterday`.
 */
const weeklyCollections = [
  48_200, 52_600, 47_400, 55_000, 58_300, 51_200, 60_100, 56_900, 63_400, 59_200, 66_800, 61_000,
];

const last4 = sum(weeklyCollections.slice(-4));
const previous4 = sum(weeklyCollections.slice(-8, -4));
const collectedYesterday = sum(paymentRows.map((p) => p.amount));
const usualDay = last4 / 28;

export const collections = {
  weekly: weeklyCollections,
  last4Weeks: last4,
  changePct: percentChange(last4, previous4),
  yesterday: collectedYesterday,
  yesterdayVsUsualPct: percentChange(collectedYesterday, usualDay),
};

/** Collections over the last 4 weeks, by plan. Sums to `collections.last4Weeks`. */
export const revenueByPlan: { plan: PlanName; amount: number }[] = [
  { plan: "Annual", amount: 1_00_800 },
  { plan: "Half-yearly", amount: 57_600 },
  { plan: "Quarterly", amount: 54_000 },
  { plan: "Monthly", amount: last4 - 1_00_800 - 57_600 - 54_000 },
];

/* Attendance -------------------------------------------------------------- */

/** Check-ins for the last 7 days; the last value is today so far. */
const dailyCheckIns = [104, 112, 98, 118, 109, 121, 74];

export const attendance = {
  days: dailyCheckIns,
  labels: ["6d ago", "", "", "", "", "", "Today"],
  today: dailyCheckIns[dailyCheckIns.length - 1],
  inGymNow: demoGym.inGymNow,
  /** Busiest full day in the window. */
  peak: Math.max(...dailyCheckIns.slice(0, -1)),
};

/* Leads ------------------------------------------------------------------- */

export const leadPipeline = [
  { stage: "New", count: 6 },
  { stage: "Contacted", count: 9 },
  { stage: "Trial booked", count: 3 },
  { stage: "Joined this month", count: 5 },
];

export const overdueLeads = [
  {
    name: "Siddharth P.",
    source: "Instagram",
    note: "Asked about the quarterly plan",
    due: "2 days ago",
  },
  {
    name: "Ayesha M.",
    source: "Walk-in",
    note: "Trial on Saturday, no reply since",
    due: "Yesterday",
  },
  { name: "Naveen K.", source: "Referral", note: "Wants a couple's plan", due: "Yesterday" },
  { name: "Divya R.", source: "Website", note: "Call back after 6 pm", due: "Today" },
];

/* Members likely to leave -------------------------------------------------- */

/**
 * Members flagged by attendance rules. The reasons are worded the way the app
 * words them: plain thresholds an owner can check.
 */
export const atRiskMembers = [
  { name: "Ankit S.", reason: "11 visits last month, 3 this month", band: "High" },
  { name: "Fatima K.", reason: "Not seen for 14 days", band: "High" },
  {
    name: "Vikram R.",
    reason: `Membership ends in ${expiringThisWeek[7].endsInDays} days, ${expiringThisWeek[7].visitsThisMonth} visits this month`,
    band: "Medium",
  },
  { name: "Joel F.", reason: "Joined 5 weeks ago, stopped coming", band: "Medium" },
  { name: "Swati P.", reason: "Not seen for 9 days", band: "Medium" },
  { name: "Manoj E.", reason: "8 visits last month, 2 this month", band: "Medium" },
  { name: "Tara W.", reason: "Not seen for 8 days", band: "Medium" },
  { name: "Omar H.", reason: "Not seen for 7 days", band: "Medium" },
  { name: "Bhavna C.", reason: "Joined 6 weeks ago, 1 visit in 3 weeks", band: "Medium" },
] as const;

/* Today's brief ----------------------------------------------------------- */

/** The morning brief: five numbers and one thing to do first. */
export const brief = {
  figures: [
    {
      label: "collected yesterday",
      value: formatInr(collections.yesterday),
      note: `${formatChange(collections.yesterdayVsUsualPct)} vs usual`,
    },
    {
      label: "expiring this week",
      value: String(renewals.count),
      note: `${formatInr(renewals.atStake)} at stake`,
    },
    {
      label: "outstanding",
      value: formatInr(dues.total),
      note: plural(dues.members, "member"),
    },
    { label: "leads to follow up", value: String(overdueLeads.length) },
    { label: "members likely to leave", value: String(atRiskMembers.length) },
  ],
  action: {
    label: `Contact the ${renewals.notContactedCount} members expiring this week who have not been reached`,
    atStake: `about ${formatInr(renewals.notContactedAtStake)} at stake`,
  },
};

/* Dashboard --------------------------------------------------------------- */

export const dashboardKpis = [
  {
    label: "Active members",
    value: String(demoGym.activeMembers),
    note: `${renewals.count} renewing this week`,
  },
  {
    label: "Collected · last 4 weeks",
    value: formatInr(collections.last4Weeks),
    note: `${formatChange(collections.changePct)} vs previous 4 weeks`,
    positive: collections.changePct >= 0,
  },
  {
    label: "Check-ins today",
    value: String(attendance.today),
    note: `${attendance.inGymNow} in the gym now`,
  },
  {
    label: "Outstanding",
    value: formatInr(dues.total),
    note: `${plural(dues.overdue, "member")} overdue`,
  },
];
