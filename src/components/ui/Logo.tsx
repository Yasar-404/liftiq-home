import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  markOnly?: boolean;
}

const BLADE =
  "M27.5 19 Q27.5 14 32.5 14 L41 14 Q44.4 14 44.5 18.2 " +
  "Q45.2 31 44.8 43 Q44.2 57 42 67 L52.8 82.2 Q55.4 85 51.8 85.6 " +
  "L33 80.2 Q27.5 78.6 27.5 72.6 Z";

/** LiftIQ mark: an "L" blade beside two stacked tiles. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id="lq-mark" x1="30" y1="6" x2="46" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1f7bff" />
          <stop offset="0.42" stopColor="#4d5bff" />
          <stop offset="0.7" stopColor="#8b3bf0" />
          <stop offset="1" stopColor="#bb27e8" />
        </linearGradient>
        <linearGradient id="lq-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={BLADE} fill="url(#lq-mark)" />
      <rect x="54.5" y="32" width="20.5" height="20" rx="4.6" fill="url(#lq-mark)" />
      <rect x="54.5" y="57.5" width="20.5" height="22" rx="4.6" fill="url(#lq-mark)" />

      {/* subtle top light */}
      <path d={BLADE} fill="url(#lq-sheen)" />
      <rect x="54.5" y="32" width="20.5" height="20" rx="4.6" fill="url(#lq-sheen)" />
      <rect x="54.5" y="57.5" width="20.5" height="22" rx="4.6" fill="url(#lq-sheen)" />
    </svg>
  );
}

export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <LogoMark className="h-[27px] w-[27px]" />
      {!markOnly && (
        <span className="text-[1.1rem] font-semibold tracking-[-0.02em] text-text">
          Lift<span className="text-text-muted">IQ</span>
        </span>
      )}
    </span>
  );
}
