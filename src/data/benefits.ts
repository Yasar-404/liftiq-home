interface ComparisonRow {
  task: string;
  before: string;
  withLiftIQ: string;
}

/** The same jobs, done with registers and spreadsheets versus with LiftIQ. */
export const comparisonRows: ComparisonRow[] = [
  {
    task: "Renewals",
    before: "Spotted when a member stops showing up",
    withLiftIQ: "Listed a week ahead, with what is at stake",
  },
  {
    task: "Payments",
    before: "Cash in a drawer, UPI on a phone, receipts by hand",
    withLiftIQ: "Recorded once against an invoice, receipt issued",
  },
  {
    task: "Dues",
    before: "Remembered, or not",
    withLiftIQ: "Sorted by how late they are",
  },
  {
    task: "Leads",
    before: "Scattered across WhatsApp and call logs",
    withLiftIQ: "A pipeline with follow-up dates",
  },
  {
    task: "Attendance",
    before: "A register nobody reads",
    withLiftIQ: "Visits that flag members drifting away",
  },
  {
    task: "Month-end",
    before: "An evening of adding up",
    withLiftIQ: "Reports ready whenever you look",
  },
];

/**
 * What a gym gets from running on LiftIQ, stated as outcomes of how the product
 * works. No figures: nothing here is a measured result.
 */
export const businessOutcomes = [
  {
    title: "A clear picture of the business",
    body: "Collections, dues, renewals and follow-ups are on one dashboard, counted from the same records, so you are not adding up three tools.",
  },
  {
    title: "Membership admin without the paperwork",
    body: "Selling, renewing, freezing and cancelling a plan all happen from one member record, with the discount and its reason on the sale.",
  },
  {
    title: "Billing you can follow",
    body: "Every payment is recorded once against an invoice, receipts are issued, and what is still owed is sorted by how late it is.",
  },
  {
    title: "Attendance that means something",
    body: "Check-ins feed a view of who is slipping away, with the reason, so a quiet member becomes a call rather than a lost renewal.",
  },
];
