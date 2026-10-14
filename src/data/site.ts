const email = "hello@liftiq.in";

const demoRequestBody = [
  "Hi LiftIQ team,",
  "",
  "I'd like to book a demo.",
  "",
  "Gym name:",
  "City:",
  "Number of branches:",
  "Approximate active members:",
  "How we manage memberships today (software, spreadsheet, register):",
  "Best time to call:",
].join("\n");

/** Builds a mailto: link with a prefilled subject and body. */
function mailto(subject: string, body?: string) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}?${params.join("&")}`;
}

/** Brand, contact and call-to-action settings shared across the site. */
export const site = {
  name: "LiftIQ",
  domain: "https://liftiq.in",
  title: "LiftIQ: Gym Management Software for Memberships, Payments and Renewals",
  tagline: "Gym management software for memberships, payments, attendance and renewals.",
  description:
    "LiftIQ is gym management software for gyms in India. Sell memberships, collect payments with GST receipts, track attendance, follow up leads and win renewals from one workspace, on the web and on your phone.",
  contact: {
    phone: "+91 73976 45660",
    phoneHref: "tel:+917397645660",
    email,
    emailHref: `mailto:${email}`,
    demoEmailHref: mailto("Demo request: LiftIQ", demoRequestBody),
    location: "Sholinganallur, Chennai, Tamil Nadu, India",
  },
  demo: {
    length: "20-minute",
    replyTime: "within 1 business day",
  },
  /**
   * Customer sign-in: the central sign-in for every web role. Set to "" to hide the Sign in
   * link in the header and mobile menu.
   */
  signInUrl: "https://app.liftiq.in/signin" as string,
  cta: {
    primary: { label: "Book a Demo", href: "#demo" },
    secondary: { label: "Explore the Platform", href: "#platform" },
  },
} as const;
