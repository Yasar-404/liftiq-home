import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { platformModules, platformRoles } from "@/data/platform";
import { workflows } from "@/data/workflows";
import { WorkflowRows } from "./WorkflowRows";
import type { WorkflowRow } from "./WorkflowRows";
import { WorkflowPreview } from "@/components/product/WorkflowPreview";

const steps: WorkflowRow[] = workflows.map((tab) => ({
  id: tab.id,
  label: tab.label,
  headline: tab.headline,
  problem: tab.problem,
  solution: tab.solution,
  points: tab.points,
  visual: <WorkflowPreview kind={tab.id} />,
}));

/**
 * The platform, told as a scroll-linked story (one step per area of the gym),
 * followed by a compact index of every module and who uses LiftIQ.
 */
export function Workflows() {
  return (
    <Section id="workflows" spacing="lg" containerClassName="flex flex-col gap-20 lg:gap-28">
      <div className="flex flex-col gap-14">
        <SectionHeading
          index={3}
          eyebrow="Platform"
          title="Everything the front desk and the owner work from."
          description="One workspace for the jobs a gym does every day. Scroll through the areas: each answers a question you would otherwise piece together by hand."
        />
        <WorkflowRows steps={steps} />
      </div>

      <div className="flex flex-col gap-10 border-t border-border pt-14">
        <Reveal className="flex flex-col gap-2">
          <h3 className="text-h3">Every module, at a glance.</h3>
          <p className="max-w-2xl text-[0.95rem] leading-relaxed text-text-muted">
            Each module works on the same records, so nothing has to be copied between tools or
            added up by hand.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {platformModules.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 70} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-[1rem] font-semibold tracking-tight text-text">
                  {group.title}
                </h4>
                {group.summary && (
                  <p className="text-[0.85rem] leading-relaxed text-text-faint">{group.summary}</p>
                )}
              </div>
              <dl className="flex flex-col gap-3.5 border-l border-border pl-4">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <dt className="text-[0.9rem] font-medium text-text">{item.title}</dt>
                    <dd className="text-[0.85rem] leading-relaxed text-text-muted">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {platformRoles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-2 bg-[linear-gradient(180deg,#101114,#0c0d10)] p-5 sm:p-6"
            >
              <h4 className="flex flex-wrap items-center gap-2 text-[0.975rem] font-semibold text-text">
                {role.title}
                {role.status && (
                  <span className="rounded-full border border-border-strong px-2 py-0.5 text-[11px] font-normal text-text-muted">
                    {role.status}
                  </span>
                )}
              </h4>
              <p className="text-[0.875rem] leading-relaxed text-text-muted">{role.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
