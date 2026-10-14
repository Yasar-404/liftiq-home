import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { availableNow, onTheRoadmap } from "@/data/intelligence";

/** A plain statement of what is rule-based today and what AI is planned. */
export function AiStatus() {
  return (
    <Section spacing="sm" containerClassName="flex justify-center">
      <Reveal className="frame-lit w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-8 rounded-[var(--radius-lg)] bg-[linear-gradient(180deg,#121318,#0b0c0e)] p-6 sm:p-9 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.05rem] font-semibold text-text">Available now</h2>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">
              Counted from your gym&apos;s own records by fixed, explainable rules. No AI model
              produces these numbers.
            </p>
            <ul className="flex flex-col gap-2.5">
              {availableNow.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-positive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <h2 className="text-[1.05rem] font-semibold text-text">Planned AI</h2>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">
              AI-assisted features we are designing. Not available yet, and every action will need a
              person&apos;s approval.
            </p>
            <ul className="flex flex-col gap-2.5">
              {onTheRoadmap.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-snug text-text-muted"
                >
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full border border-text-faint"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
