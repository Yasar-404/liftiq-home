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
