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
