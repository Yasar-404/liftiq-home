import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notYetClaimed, securityGroups } from "@/data/security";
import { site } from "@/data/site";
import { onboardingSteps, trustPoints } from "@/data/trust";

/**
 * Trust: the controls that matter most, the full detail on request, what is not
 * claimed yet, and what getting started looks like. Everything here describes
 * how LiftIQ is built today; there are no certifications, customers or logos.
 */
export function Trust() {
  return (
    <Section id="security" spacing="lg" className="band" containerClassName="flex flex-col gap-14">
      <SectionHeading
        index={7}
        align="center"
        eyebrow="Security"
        title="Built to be trusted with your members and your money."
        description="LiftIQ handles payments, receipts and personal details, so it is built to keep them safe, separate and accurate."
      />

      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map(({ title, body, icon: Icon }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 70}
            className="flex flex-col gap-3 bg-[linear-gradient(180deg,#101114,#0c0d10)] p-6 sm:p-7"
          >
            <Icon className="h-5 w-5 text-accent-text" />
            <h3 className="text-[1.05rem] font-semibold tracking-tight text-text">{title}</h3>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">{body}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <details className="group mx-auto max-w-5xl rounded-[var(--radius-lg)] border border-border bg-surface/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[var(--radius-lg)] px-5 py-4 text-[0.95rem] font-medium text-text sm:px-7 [&::-webkit-details-marker]:hidden">
            Every control, in detail
            <span
              aria-hidden="true"
              className="text-text-faint transition-transform duration-[var(--duration-base)] group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="grid grid-cols-1 gap-x-10 gap-y-9 border-t border-border px-5 py-7 sm:px-7 md:grid-cols-2">
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
        </details>
      </Reveal>

      <Reveal className="mx-auto grid max-w-5xl grid-cols-1 gap-8 rounded-[var(--radius-lg)] border border-border bg-surface/40 p-6 sm:p-9 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-[1.05rem] font-semibold text-text">What we don&apos;t claim yet</h3>
          <ul className="flex flex-col gap-3">
            {notYetClaimed.map((line) => (
              <li key={line} className="text-[0.925rem] leading-relaxed text-text-muted">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <h3 className="text-[1.05rem] font-semibold text-text">Report a security issue</h3>
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

      <Reveal delay={120} className="flex flex-col gap-6">
        <h3 className="text-center text-[0.8rem] font-medium tracking-[0.14em] text-text-faint uppercase">
          Getting started
        </h3>
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {onboardingSteps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3.5 text-[0.925rem] leading-relaxed text-text-muted md:flex-col md:items-center md:text-center"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border-strong bg-surface-elevated text-[12px] font-medium text-text tabular-nums">
                {i + 1}
              </span>
              <span className="max-w-xs">{step}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
