import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Aurora } from "@/components/ui/Aurora";
import { Phone, Mail, Pin, ArrowRight } from "@/components/ui/icons";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

const contactRows = [
  { icon: Phone, value: site.contact.phone, href: site.contact.phoneHref },
  { icon: Mail, value: site.contact.email, href: site.contact.emailHref },
  { icon: Pin, value: site.contact.locationShort, href: undefined },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-subtle">
      <Aurora variant="footer" />
      {/* top edge light */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(124,92,255,0.5),transparent)]" />

      <Container className="relative pt-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-border pb-14 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div className="col-span-2 flex flex-col gap-5 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              {site.tagline}
            </p>
            <Button href={site.cta.primary.href} withArrow size="md" className="self-start">
              {site.cta.primary.label}
            </Button>
          </div>

          {/* link columns */}
          {footerNav.map((group) => (
            <nav key={group.title} className="flex flex-col gap-3.5">
              <span className="text-eyebrow text-[0.6rem]">{group.title}</span>
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text"
                >
                  {item.label}
                  <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          ))}

          {/* contact column */}
          <div className="flex flex-col gap-3.5">
            <span className="text-eyebrow text-[0.6rem]">Contact</span>
            {contactRows.map(({ icon: Icon, value, href }) => {
              const row = (
                <span className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-text-faint" />
                  {value}
                </span>
              );
              return href ? (
                <a key={value} href={href}>
                  {row}
                </a>
              ) : (
                <span key={value}>{row}</span>
              );
            })}
          </div>
        </div>

        {/* oversized ghost wordmark */}
        <div className="relative select-none pt-10" aria-hidden="true">
          <span className="block bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent)] bg-clip-text text-[19vw] font-semibold leading-[0.78] tracking-tighter text-transparent lg:text-[12.5rem]">
            LiftIQ
          </span>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-8 text-xs text-text-faint sm:flex-row">
          <span>© 2026 LiftIQ. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#contact" className="transition-colors hover:text-text">
              Privacy
            </a>
            <a href="#contact" className="transition-colors hover:text-text">
              Terms
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
            >
              Back to top
              <ArrowRight className="h-3 w-3 -rotate-90" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
