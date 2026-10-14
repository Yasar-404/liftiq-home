import { contactChannels } from "@/data/contact";

/** Email, phone and location: stacked on small screens, a row from md. */
export function ContactChannels() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
      {contactChannels.map(({ label, value, href, icon: Icon }) => {
        const content = (
          <>
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-text-faint" />
            <span className="min-w-0">
              <span className="block text-[11px] text-text-faint">{label}</span>
              <span className="block text-[0.95rem] break-words text-text">{value}</span>
            </span>
          </>
        );
        const row = "flex items-start gap-3 border-b border-border py-3.5 md:border-0";

        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                className={`${row} transition-colors duration-[var(--duration-fast)] hover:text-accent-text`}
              >
                {content}
              </a>
            ) : (
              <div className={row}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
