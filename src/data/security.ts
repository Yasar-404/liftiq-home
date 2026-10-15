import type { DetailGroup } from "@/types";

/**
 * The strongest controls, stated briefly. Each describes how LiftIQ is built
 * today (see the liftiq-gym repository's docs/architecture.md); there are no
 * certifications to claim.
 */
export const trustPoints = [
  { title: "Each gym kept separate", body: "Isolated in the database, not only in the app." },
  { title: "Access by role", body: "You set what the front desk can see and do." },
  { title: "Recorded once", body: "A double tap never records a payment twice." },
  { title: "Numbers you can check", body: "Every figure links to the list behind it." },
];

/** Said plainly, next to the controls. */
export const notYetClaimed =
  "No independent certifications yet, such as SOC 2 or ISO 27001, and no published backup recovery targets.";

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
