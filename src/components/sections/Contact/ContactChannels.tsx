import { contactChannels } from "@/data/contact";

export function ContactChannels() {
  return (
    <ul className="flex flex-col">
      {contactChannels.map(({ label, value, href, icon: Icon }) => {
        const content = (
          <>
            <Icon className="h-4 w-4 shrink-0 text-text-faint" />
            <span className="min-w-0">
              <span className="block text-[11px] text-text-faint">{label}</span>
              <span className="block text-[0.95rem] break-words text-text">{value}</span>
            </span>
          </>
        );
        const row = "flex items-center gap-3.5 border-b border-border py-3.5";

        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                className={`${row} transition-colors duration-[var(--duration-fast)] hover:bg-white/[0.02]`}
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
