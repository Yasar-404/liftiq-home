import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { securityGroups, trustPoints } from "@/data/security";
import { site } from "@/data/site";

/**
 * What the product protects, stated briefly, with the full list of controls on
 * request. Everything here describes how LiftIQ is built today; there are no
 * certifications, customers or logos to show.
 */
export function TrustStrip() {
  return (
    <div id="security" className="scroll-mt-24 border-t border-border pt-16">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Built for trust"
          title="Your gym's data. Your control."
          description="Clear access controls, accountable transactions, and numbers you can trace back to their source."
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <Reveal as="li" key={point.title} delay={i * 80} className="flex">
              <div className="group flex w-full flex-col gap-3 rounded-[var(--radius-md)] border border-border bg-[image:var(--gradient-panel)] p-6 transition-[transform,border-color,background-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-accent/40">
                <span className="text-[11px] font-medium tracking-[0.14em] text-accent-text tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1rem] font-semibold tracking-tight text-text">
                  {point.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-text-muted">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <details className="group rounded-[var(--radius-lg)] border border-border bg-surface/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[var(--radius-lg)] px-5 py-3.5 text-[0.925rem] font-medium text-text [&::-webkit-details-marker]:hidden">
              Every control, in detail
              <span
                aria-hidden="true"
                className="text-text-faint transition-transform duration-[var(--duration-base)] group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="flex flex-col gap-8 border-t border-border px-5 py-6">
              <div className="grid grid-cols-1 gap-x-10 gap-y-9 md:grid-cols-2">
                {securityGroups.map((group) => (
                  <div key={group.title} className="flex flex-col gap-3">
                    <div>
                      <h3 className="text-[1rem] font-semibold text-text">{group.title}</h3>
                      {group.summary && (
                        <p className="text-[0.85rem] leading-relaxed text-text-faint">
                          {group.summary}
                        </p>
                      )}
                    </div>
                    <dl className="flex flex-col gap-3 border-l border-border pl-4">
                      {group.items.map((item) => (
                        <div key={item.title}>
                          <dt className="text-[0.9rem] font-medium text-text">{item.title}</dt>
                          <dd className="text-[0.85rem] leading-relaxed text-text-muted">
                            {item.body}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
              <p className="border-t border-border pt-5 text-[0.9rem] text-text-muted">
                Found a vulnerability? Email{" "}
                <a
                  href={site.contact.emailHref}
                  className="text-accent-text underline-offset-4 hover:underline"
                >
                  {site.contact.email}
                </a>{" "}
                with the details.
              </p>
            </div>
          </details>
        </Reveal>
      </div>
    </div>
  );
}
