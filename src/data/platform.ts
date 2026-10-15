import type { DetailGroup } from "@/types";

/** The modules of the LiftIQ web app, grouped by the part of the gym they run. */
export const platformModules: DetailGroup[] = [
  {
    title: "Front desk",
    summary: "The counter, from a first enquiry to a member walking in.",
    items: [
      {
        title: "Desk",
        body: "A keyboard-first screen for the counter: find a member in a keystroke, then check them in or renew them.",
      },
      {
        title: "Members",
        body: "Each member's plan, payments, dues, visits and notes on one record, with call and WhatsApp a tap away.",
      },
      {
        title: "Memberships",
        body: "Sell or renew a plan, apply a discount with its reason, and freeze, resume or cancel a membership.",
      },
      {
        title: "Attendance",
        body: "Check members in and out from a search, see who is in the gym now, and undo a check-in made by mistake.",
      },
    ],
  },
  {
    title: "Money",
    summary: "Every rupee recorded once, and nothing owed forgotten.",
    items: [
      {
        title: "Payments",
        body: "Cash, UPI and card recorded against invoices, with balances that are still owed sorted by how late they are.",
      },
      {
        title: "Invoices and receipts",
        body: "GST invoices and numbered receipts. A wrong invoice is voided with a credit note, never edited away.",
      },
      {
        title: "Cash drawer",
        body: "For each branch and day, what the drawer should hold, what was counted, and who closed it.",
      },
      {
        title: "Expenses",
        body: "Rent, salaries and supplies by category, shown next to what members paid.",
      },
    ],
  },
  {
    title: "Growth and retention",
    summary: "Keep members coming back and turn enquiries into members.",
    items: [
      {
        title: "Renewals",
        body: "Who is due and who just lapsed, what is at stake, how likely each member is to leave, and every contact logged.",
      },
      {
        title: "Win-back",
        body: "Offers for members whose plans have lapsed, tracked like any other sale.",
      },
      {
        title: "Leads",
        body: "Enquiries from walk-ins, referrals and social media in a pipeline with follow-up dates, converted to members in one step.",
      },
      {
        title: "Discount approvals",
        body: "Discounts above the front desk's limit wait for the owner, with the reason attached.",
      },
    ],
  },
  {
    title: "Running the business",
    summary: "See the whole gym, branch by branch, and decide who can do what.",
    items: [
      {
        title: "Dashboard and morning brief",
        body: "Today's numbers and the one task worth doing first, counted from your own data each morning.",
      },
      {
        title: "Reports",
        body: "Collections, revenue by plan, money owed, renewals by month, lead sources and busy times.",
      },
      {
        title: "Branches",
        body: "Several locations under one account, each with its own hours, manager and numbers.",
      },
      {
        title: "Team and settings",
        body: "Logins for your staff with the permissions you choose, plus your business details, GST and the desk's discount limit.",
      },
    ],
  },
];

/** Who works in LiftIQ, and where. */
export const platformRoles: { title: string; body: string; status?: string }[] = [
  {
    title: "Owner",
    body: "Sees everything: the brief, money, reports and branches. Approves discounts above the desk's limit.",
  },
  {
    title: "Front desk",
    body: "Sells plans, takes payments, checks members in and follows up leads, within the permissions the owner sets.",
  },
  {
    title: "LiftIQ team",
    body: "Sets up your workspace, branches and plans with you, and helps when you need it.",
  },
  {
    title: "Members",
    body: "A member app for their membership, payments and attendance, signed in with their mobile number.",
    status: "In testing",
  },
];

/** What the layered screens in the product overview show, one line each. */
export const platformHighlights = [
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
