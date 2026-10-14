/** Every feature, grouped by area of the gym, as short checklists. */
export const featureAreas: { title: string; features: string[]; status?: string }[] = [
  {
    title: "Members",
    features: [
      "Search and filter every member",
      "One profile: plan, payments, dues, visits, notes",
      "Timeline of everything that happened",
      "Call or WhatsApp from the record",
      "Archived, never deleted",
    ],
  },
  {
    title: "Memberships",
    features: [
      "Sell or renew a plan in a few taps",
      "Discounts with a reason, within the desk's limit",
      "Freeze and resume",
      "Cancel, or undo a sale outright (owner)",
      "Status worked out from dates, always current",
    ],
  },
  {
    title: "Payments and billing",
    features: [
      "Cash, UPI and card",
      "GST invoices and numbered receipts",
      "Pay now or leave a balance due",
      "Dues sorted by how late they are",
      "Refunds and reversals as their own entries",
      "Daily cash-drawer close per branch",
    ],
  },
  {
    title: "Attendance",
    features: [
      "Check in and check out from a search",
      "Who is in the gym right now",
      "Today compared with last week",
      "Members whose visits are falling away",
      "Undo a check-in made by mistake",
    ],
  },
  {
    title: "Renewals and retention",
    features: [
      "Due this week, due soon and recently lapsed",
      "What each renewal is worth",
      "How likely each member is to leave",
      "Log a call, a promise or a reason for leaving",
      "Win-back offers for lapsed members",
    ],
  },
  {
    title: "Leads",
    features: [
      "Pipeline from enquiry to trial to joined",
      "Follow-up dates that surface when due",
      "Where every lead came from",
      "Convert a lead to a member in one step",
      "Warns when a number already belongs to a member",
    ],
  },
  {
    title: "Reports and insights",
    features: [
      "A brief every morning with one task first",
      "Collections and how they were paid",
      "Revenue by plan and by branch",
      "Money owed by how late it is",
      "Renewals by month and lead sources",
      "Busiest days and times",
    ],
  },
  {
    title: "Team and control",
    features: [
      "Owner and front-desk roles",
      "Permissions per action, not just per role",
      "Discount limit with owner approval",
      "Several branches under one account",
      "Audit trail of every change",
    ],
  },
  {
    title: "Mobile apps",
    status: "In testing",
    features: [
      "Owner app: dashboard, members, money, renewals, approvals",
      "Staff app shaped by each person's permissions",
      "Member app: membership, payments, attendance",
    ],
  },
];
