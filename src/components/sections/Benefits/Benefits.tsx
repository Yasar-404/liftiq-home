import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessOutcomes, comparisonRows } from "@/data/benefits";

const columns = "md:grid-cols-[minmax(140px,0.6fr)_1fr_1fr]";
const liftiqTint = "md:bg-[rgba(124,92,255,0.07)]";

/** What running a gym on LiftIQ changes, then the same jobs side by side with the tools it replaces. */
export function Benefits() {
  return (
    <Section id="benefits" spacing="lg" containerClassName="flex flex-col gap-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <SectionHeading
          index={6}
          eyebrow="Benefits"
          title="A gym that runs on records, not memory."
          description="LiftIQ doesn't promise a number. It gives you the clear, current picture most gyms are missing, and the habits that follow from it."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <ul className="flex flex-col">
          {businessOutcomes.map((outcome, i) => (
            <Reveal
              as="li"
              key={outcome.title}
              delay={i * 70}
              className="flex gap-5 border-t border-border py-7 first:border-t-0 first:pt-0"
            >
              <span className="mt-1 w-6 shrink-0 text-[0.75rem] font-medium text-text-faint tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.2rem] font-semibold tracking-tight text-text">
                  {outcome.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-text-muted">{outcome.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-10">
        <Reveal className="flex flex-col gap-2">
          <h3 className="text-h3">The same jobs, without the paperwork.</h3>
          <p className="max-w-2xl text-[0.95rem] leading-relaxed text-text-muted">
            Most gyms run on a register, a payment app, a spreadsheet and WhatsApp. Each works on
            its own. LiftIQ connects them, so a payment, a visit and a renewal all land on the same
            member.
          </p>
        </Reveal>

        <Reveal
          variant="scale"
          className="w-full overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface/40"
        >
          <div aria-hidden="true" className={`hidden border-b border-border md:grid ${columns}`}>
            <span className="px-6 py-4 text-[0.8rem] font-medium text-text-faint">Job</span>
            <span className="px-6 py-4 text-[0.8rem] font-medium text-text-faint">
              Registers and spreadsheets
            </span>
            <span
              className={`px-6 py-4 text-[0.8rem] font-semibold text-accent-text ${liftiqTint}`}
            >
              With LiftIQ
            </span>
          </div>

          <ul>
            {comparisonRows.map((row) => (
              <li
                key={row.task}
                className={`grid grid-cols-1 gap-2 border-b border-border px-5 py-5 last:border-0 md:gap-0 md:p-0 ${columns}`}
              >
                <h4 className="text-[0.95rem] font-semibold text-text md:px-6 md:py-5">
                  {row.task}
                </h4>
                <p className="text-sm text-text-muted md:px-6 md:py-5">
                  <span className="font-medium text-text-faint md:sr-only">Without LiftIQ: </span>
                  {row.before}
                </p>
                <p
                  className={`flex items-start gap-2 text-sm text-text md:px-6 md:py-5 ${liftiqTint}`}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" aria-hidden="true" />
                  <span>
                    <span className="sr-only">With LiftIQ: </span>
                    {row.withLiftIQ}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
