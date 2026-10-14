import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { DetailGroup } from "@/types";

interface DetailGroupsProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  groups: DetailGroup[];
  band?: boolean;
}

/**
 * Grouped detail, laid out editorially: each group's name and summary on the
 * left, its items on the right. Used for modules, feature areas and security
 * controls on the dedicated pages.
 */
export function DetailGroups({ id, eyebrow, title, description, groups, band }: DetailGroupsProps) {
  return (
    <Section
      id={id}
      spacing="lg"
      className={band ? "band" : undefined}
      containerClassName="flex flex-col gap-16"
    >
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="flex flex-col">
        {groups.map((group) => (
          <Reveal
            key={group.title}
            className="grid grid-cols-1 gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:gap-12"
          >
            <div className="flex flex-col gap-2 lg:sticky lg:top-28 lg:self-start">
              <h3 className="text-[1.25rem] font-semibold tracking-tight text-text">
                {group.title}
              </h3>
              {group.summary && (
                <p className="text-[0.925rem] leading-relaxed text-text-muted">{group.summary}</p>
              )}
            </div>

            <ul className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.title} className="flex flex-col gap-1.5">
                  <h4 className="flex flex-wrap items-center gap-2 text-[0.975rem] font-semibold text-text">
                    {item.title}
                    {item.status && (
                      <span className="rounded-full border border-border-strong px-2 py-0.5 text-[11px] font-normal text-text-muted">
                        {item.status}
                      </span>
                    )}
                  </h4>
                  <p className="text-[0.925rem] leading-relaxed text-text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
