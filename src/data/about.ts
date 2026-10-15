import { Audit, Link, Lock, Shield } from "@/components/ui/icons";
import type { DetailGroup, IconType } from "@/types";

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

/**
 * Security controls as built in the LiftIQ platform (see the liftiq-gym
 * repository's docs/architecture.md and packages/auth). Only controls that
 * exist in the code are listed; no certifications are claimed.
 */
export const securityGroups: DetailGroup[] = [
  {
    title: "Each gym kept separate",
    summary: "One gym's staff can never see another gym's members or money.",
    items: [
      {
        title: "Isolation in the database",
        body: "Every gym's rows are protected by row-level security in Postgres. A query that doesn't name its gym sees nothing at all.",
      },
      {
        title: "No way around it for the app",
        body: "The app connects to the database with a role that cannot bypass those rules, so a mistake in app code can't leak another gym's data.",
      },
      {
        title: "Gym taken from the account",
        body: "Which gym a request belongs to comes from the signed-in person's account, never from a web address or form.",
      },
      {
        title: "Tested on every change",
        body: "Automated tests check the isolation rules against a real database engine before any change ships.",
      },
    ],
  },
  {
    title: "Sign-in and access",
    summary: "The right people, with the right permissions.",
    items: [
      {
        title: "Dedicated sign-in provider",
        body: "Sign-in and sessions are handled by Clerk, a specialised identity provider, rather than passwords stored by LiftIQ.",
      },
      {
        title: "Two-factor for LiftIQ staff",
        body: "LiftIQ's own console, used to onboard and support gyms, requires two-factor authentication.",
      },
      {
        title: "Permissions per action",
        body: "What each role may do is set action by action. Pay, exports and discount approvals stay with the people allowed them.",
      },
      {
        title: "The server checks every number",
        body: "Prices and discounts are recalculated on the server, so a figure changed in a browser is never trusted.",
      },
    ],
  },
  {
    title: "Money and records",
    summary: "Books that can be trusted and checked.",
    items: [
      {
        title: "Append-only ledger",
        body: "Payments are never edited. A mistake is reversed and a refund is its own entry, so the history stays complete.",
      },
      {
        title: "Nothing silently deleted",
        body: "Invoices are voided with a credit note, and members and plans are archived rather than deleted.",
      },
      {
        title: "Recorded once",
        body: "A double tap or a dropped connection during a sale or payment never records it twice.",
      },
      {
        title: "Audit trail",
        body: "Changes to money, members and settings record who made them, what changed, and the values before and after.",
      },
    ],
  },
  {
    title: "Web and hosting",
    summary: "Standard protections, switched on.",
    items: [
      {
        title: "Encrypted connections",
        body: "HTTPS everywhere, with browsers told to refuse insecure connections (HSTS).",
      },
      {
        title: "Browser protections",
        body: "A content security policy, pages that can't be framed by other sites, and no access to camera, microphone or location.",
      },
      {
        title: "Rate limits and signed callbacks",
        body: "Requests are rate-limited, and calls from payment and messaging providers must carry a valid signature.",
      },
      {
        title: "Hosted in Singapore",
        body: "The app runs on Vercel and the database on Neon Postgres, both in Singapore. Personal details are removed from error reports.",
      },
    ],
  },
];

/** Being upfront about what isn't claimed yet. */
export const notYetClaimed = [
  "LiftIQ does not yet hold independent security certifications such as SOC 2 or ISO 27001.",
  "We don't publish backup recovery targets yet. Ask us how your data is protected and recovered during your demo.",
];
