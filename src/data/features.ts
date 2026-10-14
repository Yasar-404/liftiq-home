import { Approval, Branches, Cash, Expenses, Phone as Mobile, Shield } from "@/components/ui/icons";
import type { Feature } from "@/types";

/** Capabilities beyond the core daily loop. Anything not yet released carries a `status`. */
export const features: Feature[] = [
  {
    title: "Branches",
    size: "large",
    visual: "branches",
    description:
      "Run several locations from one account, with each branch's hours, manager and numbers kept apart and comparable.",
    icon: Branches,
  },
  {
    title: "Roles and permissions",
    size: "small",
    description:
      "Owners see everything. The front desk sees what it needs. Pay and exports stay with the people allowed to see them.",
    icon: Shield,
  },
  {
    title: "Discount approvals",
    size: "large",
    visual: "approval",
    description:
      "Set the desk's discount limit. Anything above it waits for the owner's approval, with the reason attached.",
    icon: Approval,
  },
  {
    title: "Cash-drawer close",
    size: "small",
    visual: "cashClose",
    description:
      "For each branch and day, see what should be in the drawer, count it, and record who closed it and why it was off.",
    icon: Cash,
  },
  {
    title: "Expenses",
    size: "small",
    description:
      "Record rent, salaries and supplies by category, and see what was spent next to what members paid.",
    icon: Expenses,
  },
  {
    title: "Mobile app",
    size: "wide",
    description:
      "An app for Android and iPhone with the dashboard, members, payments, renewals and approvals, on the same data as the web.",
    icon: Mobile,
    status: "In testing",
  },
];
