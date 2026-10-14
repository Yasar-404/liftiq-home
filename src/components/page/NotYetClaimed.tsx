import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { notYetClaimed } from "@/data/securityPage";
import { site } from "@/data/site";

/** What LiftIQ does not claim yet, and how to report a security issue. */
export function NotYetClaimed() {
  return (
    <Section spacing="sm">
      <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-8 rounded-[var(--radius-lg)] border border-border bg-surface/40 p-6 sm:p-9 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[1.05rem] font-semibold text-text">What we don&apos;t claim yet</h2>
          <ul className="flex flex-col gap-3">
            {notYetClaimed.map((line) => (
              <li key={line} className="text-[0.925rem] leading-relaxed text-text-muted">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <h2 className="text-[1.05rem] font-semibold text-text">Report a security issue</h2>
          <p className="text-[0.925rem] leading-relaxed text-text-muted">
            If you think you have found a vulnerability, email{" "}
            <a
              href={site.contact.emailHref}
              className="text-accent-text underline-offset-4 hover:underline"
            >
              {site.contact.email}
            </a>{" "}
            with the details. We&apos;ll reply as soon as we can.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
