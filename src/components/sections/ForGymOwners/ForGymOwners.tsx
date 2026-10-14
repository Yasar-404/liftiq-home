import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonRows } from "@/data/owners";

export function ForGymOwners() {
  return (
    <Section id="compare" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Why LiftIQ"
        title="The same jobs, without the paperwork."
        description="Most gyms run on a register, a payment app, a spreadsheet and WhatsApp. Each works on its own. LiftIQ connects them, so a payment, a visit and a renewal all land on the same member."
      />

      <Reveal className="overflow-hidden rounded-[var(--radius-lg)] border border-border">
        <div
          aria-hidden="true"
          className="hidden grid-cols-[160px_1fr_1fr] gap-6 border-b border-border bg-surface/60 px-7 py-4 md:grid"
        >
          <span className="text-eyebrow text-text-muted">Job</span>
          <span className="text-eyebrow text-text-muted">Registers and spreadsheets</span>
          <span className="text-eyebrow">With LiftIQ</span>
        </div>

        <ul>
          {comparisonRows.map((row) => (
            <li
              key={row.task}
              className="grid grid-cols-1 gap-2 border-b border-border px-5 py-5 last:border-0 sm:px-7 md:grid-cols-[160px_1fr_1fr] md:items-center md:gap-6"
            >
              <h3 className="text-[0.95rem] font-semibold text-text">{row.task}</h3>
              <p className="text-sm text-text-muted">
                <span className="font-medium text-text-faint md:sr-only">Without LiftIQ: </span>
                {row.before}
              </p>
              <p className="flex items-start gap-2 text-sm text-text">
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
