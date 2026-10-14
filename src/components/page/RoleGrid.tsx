import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { platformRoles } from "@/data/platformPage";

/** Who works in LiftIQ and what each of them does there. */
export function RoleGrid() {
  return (
    <Section spacing="lg" className="band" containerClassName="flex flex-col gap-14">
      <SectionHeading
        align="center"
        eyebrow="Who uses it"
        title="One workspace, a view for each role."
        description="The owner, the front desk and your members see the same records, each with the controls that fit their job."
      />
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {platformRoles.map((role, i) => (
          <Reveal
            as="li"
            key={role.title}
            delay={i * 70}
            className="flex flex-col gap-3 bg-[linear-gradient(180deg,#101114,#0c0d10)] p-6 sm:p-7"
          >
            <h3 className="flex flex-wrap items-center gap-2 text-[1.1rem] font-semibold tracking-tight text-text">
              {role.title}
              {role.status && (
                <span className="rounded-full border border-border-strong px-2 py-0.5 text-[11px] font-normal text-text-muted">
                  {role.status}
                </span>
              )}
            </h3>
            <p className="text-[0.925rem] leading-relaxed text-text-muted">{role.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
