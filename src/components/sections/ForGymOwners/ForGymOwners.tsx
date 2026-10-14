import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonRows } from "@/data/owners";

const columns = "md:grid-cols-[minmax(140px,0.6fr)_1fr_1fr]";
const liftiqTint = "md:bg-[rgba(124,92,255,0.07)]";

export function ForGymOwners() {
  return (
    <Section id="compare" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        align="center"
        eyebrow="Why LiftIQ"
        title="The same jobs, without the paperwork."
        description="Most gyms run on a register, a payment app, a spreadsheet and WhatsApp. Each works on its own. LiftIQ connects them, so a payment, a visit and a renewal all land on the same member."
      />

      <Reveal className="mx-auto w-full max-w-5xl overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface/40">
        <div aria-hidden="true" className={`hidden border-b border-border md:grid ${columns}`}>
          <span className="px-6 py-4 text-[0.8rem] font-medium text-text-faint">Job</span>
          <span className="px-6 py-4 text-[0.8rem] font-medium text-text-faint">
            Registers and spreadsheets
          </span>
          <span className={`px-6 py-4 text-[0.8rem] font-semibold text-accent-text ${liftiqTint}`}>
            With LiftIQ
          </span>
        </div>

        <ul>
          {comparisonRows.map((row) => (
            <li
              key={row.task}
              className={`grid grid-cols-1 gap-2 border-b border-border px-5 py-5 last:border-0 md:gap-0 md:p-0 ${columns}`}
            >
              <h3 className="text-[0.95rem] font-semibold text-text md:px-6 md:py-5">{row.task}</h3>
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
    </Section>
  );
}
