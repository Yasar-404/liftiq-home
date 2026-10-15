import { Billing, Bell, Members, Renew } from "@/components/ui/icons";
import type { IconType } from "@/types";

interface LoopStep {
  title: string;
  body: string;
  icon: IconType;
}

/** The daily loop LiftIQ is organised around. */
export const loopSteps: LoopStep[] = [
  {
    title: "Sell",
    body: "Turn enquiries into members, sell a plan at the desk, and apply discounts within the limit you set.",
    icon: Members,
  },
  {
    title: "Collect",
    body: "Record cash, UPI and card payments against GST invoices, with a receipt every time.",
    icon: Billing,
  },
  {
    title: "Remind",
    body: "See who owes money, whose plan is ending and which lead is waiting, before it becomes a loss.",
    icon: Bell,
  },
  {
    title: "Renew",
    body: "Work renewals from a board, log every contact, and renew in one step from the member's record.",
    icon: Renew,
  },
];

/** Short facts under the hero calls to action. Each is a shipped capability. */
export const heroFacts = [
  "GST invoices and receipts",
  "Multi-branch",
  "Roles for the front desk",
  "A brief every morning",
];

/** What the layered screens in the product overview show, one line each. */
export const overviewCallouts = [
  {
    title: "The day, counted",
    body: "Collections, dues, renewals and follow-ups are counted from your records each morning, with one task to do first.",
  },
  {
    title: "The member, in full",
    body: "A member's plan, payments, visits and notes sit on one record, with renew, call and WhatsApp at hand.",
  },
  {
    title: "Control at the counter",
    body: "A discount above the desk's limit waits for the owner, with the reason attached, instead of being decided in a hurry.",
  },
];
