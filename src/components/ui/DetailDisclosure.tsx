import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { DetailGroup } from "@/types";

interface DetailDisclosureProps {
  title: string;
  groups: DetailGroup[];
  /** Two columns from `md` up, for the longer list. */
  columns?: 1 | 2;
  children?: ReactNode;
}

/**
 * A compact "+" disclosure for reference detail. Native <details>, so it is
 * keyboard-operable and works without JavaScript. Group names are small caps
 * labels; items are a tight title and one line of muted text.
 */
export function DetailDisclosure({ title, groups, columns = 1, children }: DetailDisclosureProps) {
  return (
    <details className="group rounded-[var(--radius-md)] border border-border bg-surface/40 transition-colors duration-[var(--duration-base)] open:border-accent/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[var(--radius-md)] px-4 py-3 text-[0.9rem] font-medium text-text [&::-webkit-details-marker]:hidden">
        {title}
        <span
          aria-hidden="true"
          className="grid h-6 w-6 place-items-center text-lg leading-none text-accent-text transition-transform duration-[var(--duration-base)] group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="border-t border-border px-4 py-4">
        <div className={cn("grid grid-cols-1 gap-x-10 gap-y-5", columns === 2 && "md:grid-cols-2")}>
          {groups.map((group) => (
            <section key={group.title}>
              <h3 className="text-[11px] font-medium tracking-[0.12em] text-accent-text uppercase">
                {group.title}
              </h3>
              <dl className="mt-2 flex flex-col gap-2">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <dt className="text-[0.875rem] font-semibold text-text">{item.title}</dt>
                    <dd className="text-[0.8125rem] leading-snug text-text-muted">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
        {children}
      </div>
    </details>
  );
}
