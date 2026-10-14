import { Audit, Link, Lock, Shield } from "@/components/ui/icons";
import type { IconType } from "@/types";

interface TrustPoint {
  title: string;
  body: string;
  icon: IconType;
}

/** How the product protects a gym's data and money. Each point describes how LiftIQ is built today. */
export const trustPoints: TrustPoint[] = [
  {
    title: "Your gym's data stays your gym's",
    body: "Every gym's records are kept apart at the database level, so one gym's staff can never see another gym's members.",
    icon: Lock,
  },
  {
    title: "Access by role",
    body: "Owners decide what the front desk can see and do. Discounts, pay and exports follow the permissions you set.",
    icon: Shield,
  },
  {
    title: "Payments recorded once",
    body: "A double tap or a dropped connection mid-payment does not create a second entry. LiftIQ tells you it is already paid.",
    icon: Audit,
  },
  {
    title: "Numbers you can check",
    body: "Every figure on the dashboard and brief links to the list it was counted from, so you never have to take a total on trust.",
    icon: Link,
  },
];

/** What onboarding looks like. */
export const onboardingSteps = [
  "We set up your gym's workspace, branches and plans with you.",
  "Your front desk gets its own login with the permissions you choose.",
  "You start recording sales, payments and visits as soon as the workspace is ready.",
];
