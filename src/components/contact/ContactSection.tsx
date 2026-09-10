import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Aurora } from "@/components/ui/Aurora";
import { Phone, Mail, Pin, ArrowRight } from "@/components/ui/icons";
import { site } from "@/data/site";

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: site.contact.phone,
    href: site.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: site.contact.emailHref,
  },
  {
    icon: Pin,
    label: "Studio",
    value: site.contact.location,
    href: undefined,
  },
];

export function ContactSection() {
  return (
    <Section id="contact" spacing="lg" className="relative overflow-hidden">
      <Aurora variant="contact" dots />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* left — pitch + channels */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="text-eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-h2 max-w-lg text-balance">
                Book a demo, or just <span className="text-gradient">talk to us</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-[1.05rem] leading-relaxed text-text-muted">
                Tell us about your gym and we&apos;ll show you how LiftIQ fits the way
                you already run it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <ul className="flex flex-col border-t border-border">
              {channels.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <span className="group flex items-center gap-4 border-b border-border py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-300 group-hover:border-[rgba(124,92,255,0.45)] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-eyebrow text-[0.6rem]">{c.label}</span>
                      <span className="block text-[0.95rem] text-text">{c.value}</span>
                    </span>
                    {c.href && (
                      <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-text group-hover:opacity-100" />
                    )}
                  </span>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a href={c.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* right — highlighted demo card with animated ring */}
        <Reveal delay={120} className="lg:pt-2">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] p-px">
            <div className="absolute inset-[-140%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,rgba(47,128,255,0.9)_12%,rgba(182,75,255,0.9)_22%,transparent_38%,transparent_100%)]" />
            <div className="relative flex flex-col gap-6 rounded-[calc(var(--radius-lg)-1px)] bg-[linear-gradient(180deg,#131318,#0d0d10)] p-7 sm:p-8">
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />

              <div className="relative flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-eyebrow text-[0.6rem]">
                  Taking demos now · replies within 1 business day
                </span>
              </div>

              <div className="relative flex flex-col gap-2">
                <p className="text-h3">See LiftIQ on your numbers.</p>
                <p className="text-sm leading-relaxed text-text-muted">
                  A 20-minute walkthrough mapped to your memberships, attendance, and
                  billing — no slides.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 sm:flex-row">
                <Button href={site.contact.emailHref} size="lg" withArrow className="flex-1">
                  Book a Demo
                </Button>
                <Button
                  href={site.contact.phoneHref}
                  size="lg"
                  variant="secondary"
                  className="flex-1"
                >
                  Talk to Us
                </Button>
              </div>

              <div className="relative flex items-center gap-2 border-t border-border pt-5 text-xs text-text-faint">
                <Pin className="h-3.5 w-3.5" />
                {site.contact.location}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
