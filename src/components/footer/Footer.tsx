import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { contactChannels } from "@/data/contact";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

const linkClass =
  "text-sm text-text-muted transition-colors duration-[var(--duration-fast)] hover:text-text";

const headingClass = "text-[11px] font-medium tracking-[0.14em] text-text-faint uppercase";

/**
 * Site footer: brand and demo link, the same section links as the header, the
 * contact details, then an oversized wordmark that fades into the page. A lit
 * hairline and a faint glow tie it to the product frames above.
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg-subtle">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent),transparent)] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(50%_100%_at_50%_0%,var(--color-accent-soft),transparent)]"
      />

      <Container className="relative pt-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-14 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">{site.tagline}</p>
            <Button
              href={site.cta.primary.href}
              withArrow
              size="md"
              className="self-start"
              cta="footer-demo"
            >
              {site.cta.primary.label}
            </Button>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-4">
              <h2 className={headingClass}>{group.title}</h2>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`${linkClass} inline-block hover:translate-x-0.5`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
            <h2 className={headingClass}>Contact</h2>
            <address className="flex flex-col gap-3 not-italic">
              {contactChannels.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <>
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-[var(--radius-xs)] border border-accent/20 bg-accent-soft text-accent-text"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="break-words">
                      <span className="sr-only">{label}: </span>
                      {value}
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className={`flex items-center gap-3 ${linkClass}`}>
                    {content}
                  </a>
                ) : (
                  <span key={label} className="flex items-center gap-3 text-sm text-text-muted">
                    {content}
                  </span>
                );
              })}
            </address>
          </div>
        </div>

        <div className="relative select-none" aria-hidden="true">
          <span className="block bg-[linear-gradient(180deg,color-mix(in_oklch,var(--color-accent)_32%,transparent),transparent_88%)] bg-clip-text text-center text-[24vw] leading-[0.8] font-semibold tracking-tighter text-transparent lg:text-[18rem]">
            {site.name}
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-7 text-xs text-text-faint sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 transition-colors duration-[var(--duration-fast)] hover:text-text"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full border border-border-strong transition-[transform,border-color] duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:border-accent/50">
              <ArrowRight className="h-3 w-3 -rotate-90" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
