import { contactChannels } from "@/data/contact";
import { cn } from "@/lib/cn";

/**
 * Email, phone and location as three tiles: stacked on small screens, a row
 * from md. Email and phone are links and tint on hover; the location is not.
 */
export function ContactChannels() {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {contactChannels.map(({ label, value, href, icon: Icon }) => {
        const tile = cn(
          "flex h-full items-center gap-3.5 rounded-[var(--radius-md)] border border-border bg-white/[0.02] px-4 py-3.5",
          href &&
            "transition-[transform,border-color,background-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft",
        );
        const content = (
          <>
            <span
              aria-hidden="true"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-accent/20 bg-accent-soft text-accent-text"
            >
              <Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-medium tracking-[0.12em] text-text-faint uppercase">
                {label}
              </span>
              <span className="block text-[0.95rem] font-medium break-words text-text">
                {value}
              </span>
            </span>
          </>
        );

        return (
          <li key={label}>
            {href ? (
              <a href={href} className={tile}>
                {content}
              </a>
            ) : (
              <div className={tile}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
