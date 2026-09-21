export const copilotCapabilities = [
  {
    title: "Revenue insight",
    body: "See what changed in membership revenue and why, in plain language.",
  },
  {
    title: "Renewal opportunity",
    body: "Surface members approaching renewal before the window closes.",
  },
  {
    title: "Attendance trend",
    body: "Catch shifts in visit frequency early, per plan and per hour.",
  },
  {
    title: "Retention signal",
    body: "Flag members whose behaviour looks like they're drifting away.",
  },
];

export const copilotDemo = {
  question: "How did memberships perform this month?",
  answer:
    "Membership revenue increased 12% compared with last month. 18 memberships are approaching renewal within the next 7 days.",
  signals: [
    { label: "Revenue", value: "₹4.82L", note: "▲ 12% MoM" },
    { label: "Renewals · 7d", value: "18", note: "opportunity" },
    { label: "Attendance", value: "+6%", note: "week trend" },
    { label: "Retention", value: "91%", note: "90-day" },
  ],
};
