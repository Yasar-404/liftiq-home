import { ArrowRight } from "@/components/ui/icons";
import { contactChannels } from "@/data/contact";

export function ContactChannels() {
  return (
    <ul className="flex flex-col border-t border-border">
      {contactChannels.map(({ label, value, href, icon: Icon }) => {
        const row = (
          <span className="group flex items-center gap-4 border-b border-border py-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-300 group-hover:border-[rgba(124,92,255,0.45)] group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="text-eyebrow block text-[0.6rem]">{label}</span>
              <span className="block text-[0.95rem] text-text">{value}</span>
            </span>
            {href && (
              <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-text group-hover:opacity-100" />
            )}
          </span>
        );

        return (
          <li key={label}>
            {href ? (
              <a href={href} className="block">
                {row}
              </a>
            ) : (
              row
            )}
          </li>
        );
      })}
    </ul>
  );
}
