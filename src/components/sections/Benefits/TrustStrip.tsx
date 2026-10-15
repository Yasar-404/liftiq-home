import { Reveal } from "@/components/ui/Reveal";
import { notYetClaimed, securityGroups, trustPoints } from "@/data/security";
import { site } from "@/data/site";

/**
 * What the product protects, stated briefly, with the full list of controls on
 * request. Everything here describes how LiftIQ is built today; there are no
 * certifications, customers or logos to show.
 */
export function TrustStrip() {
  return (
    <div id="security" className="scroll-mt-24 border-t border-border pt-14">
      <Reveal className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-h3 max-w-2xl text-balance">
            Built to be trusted with your members and your money.
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <li key={point.title} className="flex flex-col gap-1">
              <h3 className="text-[0.975rem] font-semibold text-text">{point.title}</h3>
              <p className="text-[0.9rem] leading-relaxed text-text-muted">{point.body}</p>
            </li>
          ))}
        </ul>

        <p className="text-sm text-text-faint">{notYetClaimed}</p>

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
  );
}
