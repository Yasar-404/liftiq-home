/** Single source of truth for brand + contact details. */
export const site = {
  name: "LiftIQ",
  domain: "https://liftiq.in",
  tagline: "AI-powered gym management, built for modern fitness businesses.",
  description:
    "LiftIQ is a modern gym management platform for memberships, attendance, billing, CRM, communication, analytics, and AI-powered insights.",
  contact: {
    phone: "7397645660",
    phoneHref: "tel:7397645660",
    email: "hello@liftiq.in",
    emailHref: "mailto:hello@liftiq.in",
    location: "Sholinganallur, Chennai, Tamil Nadu, India",
    locationShort: "Sholinganallur, Chennai",
  },
  cta: {
    primary: { label: "Book a Demo", href: "#contact" },
    secondary: { label: "Explore LiftIQ", href: "#platform" },
    tertiary: { label: "Talk to Us", href: "#contact" },
  },
} as const;
