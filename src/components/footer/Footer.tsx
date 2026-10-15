import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { contactChannels } from "@/data/contact";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

const linkClass =
  "text-sm text-text-muted transition-colors duration-[var(--duration-fast)] hover:text-text";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-subtle">
      <Container className="relative pt-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-border pb-14 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
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
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3.5">
              <h2 className="text-[0.8rem] font-medium text-text">{group.title}</h2>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 flex flex-col gap-3.5 lg:col-span-1">
            <h2 className="text-[0.8rem] font-medium text-text">Contact</h2>
            <address className="flex flex-col gap-3 not-italic">
              {contactChannels.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-text-faint" />
                    <span className="break-words">
                      <span className="sr-only">{label}: </span>
                      {value}
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className={`flex items-start gap-2.5 ${linkClass}`}>
                    {content}
                  </a>
                ) : (
                  <span key={label} className="flex items-start gap-2.5 text-sm text-text-muted">
                    {content}
                  </span>
                );
              })}
            </address>
          </div>
        </div>

        <div className="relative pt-10 select-none" aria-hidden="true">
          <span className="block bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)] bg-clip-text text-[19vw] leading-[0.78] font-semibold tracking-tighter text-transparent lg:text-[12.5rem]">
            {site.name}
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-8 text-xs text-text-faint sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
          >
            Back to top
            <ArrowRight className="h-3 w-3 -rotate-90" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
