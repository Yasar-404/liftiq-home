import type { Workflow } from "@/types";

export const workflows: Workflow[] = [
  {
    id: "members",
    label: "Members",
    headline: "Every member, on one record.",
    problem: "Plans, payments, visits and notes about the same person end up in different places.",
    solution:
      "Each member has one profile: the running plan, what they have paid and still owe, their visits and a timeline of everything that happened.",
    points: [
      "Sell, renew, freeze or resume from the profile",
      "Call or WhatsApp straight from the record",
      "A timeline of sales, payments, visits and notes",
    ],
  },
  {
    id: "payments",
    label: "Payments",
    headline: "Every rupee recorded once, with a receipt.",
    problem: "Cash, UPI and card payments are hard to reconcile, and balances are easy to forget.",
    solution:
      "Payments are recorded against invoices with GST, receipts are issued automatically, and anything still owed shows up with how late it is.",
    points: [
      "GST invoices and numbered receipts",
      "Dues sorted by how late they are",
      "A daily cash-drawer close for each branch",
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    headline: "See who comes in, and who has stopped.",
    problem:
      "A sign-in register records visits but tells you nothing about the members you are losing.",
    solution:
      "Check members in and out from a search at the desk. LiftIQ compares today with last week and flags members whose visits are falling away.",
    points: [
      "Check-in and check-out in a couple of taps",
      "Who is in the gym right now",
      "Members slipping away, with the reason",
    ],
  },
  {
    id: "renewals",
    label: "Renewals",
    headline: "Renewals worked as a list, not a memory.",
    problem: "Memberships lapse quietly because nobody noticed the end date in time.",
    solution:
      "A renewals board groups who is due and who just lapsed, shows what is at stake and what happened last, and records every contact.",
    points: [
      "Due this week, due soon and recently lapsed",
      "Log a call, a promise or a reason for leaving",
      "How likely each member is to leave",
    ],
  },
  {
    id: "leads",
    label: "Leads",
    headline: "Enquiries that turn into members.",
    problem: "Walk-ins and Instagram enquiries get a reply once, then get forgotten.",
    solution:
      "Every enquiry becomes a lead with a source, a stage and a follow-up date. When they join, the lead becomes a member in one step.",
    points: [
      "A pipeline from enquiry to trial to joined",
      "Follow-ups that show up when they are due",
      "Where your members actually come from",
    ],
  },
  {
    id: "reports",
    label: "Reports",
    headline: "Reports without a spreadsheet.",
    problem: "Month-end numbers take an evening of exporting and adding up.",
    solution:
      "Collections, revenue by plan, money owed, renewals by month, lead sources and busy hours are ready whenever you look, for one branch or all of them.",
    points: [
      "Collections and how they were paid",
      "Revenue by plan and by branch",
      "Busiest days and times",
    ],
  },
];
