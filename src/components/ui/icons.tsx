import type { SVGProps } from "react";

/** Line icons on a 24px grid with a 1.5 stroke. */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const Members = (p: IconProps) => (
  <Base {...p}>
    <path d="M16 19c0-2.8-2-4.5-4-4.5S8 16.2 8 19" />
    <circle cx="12" cy="9" r="3" />
    <path d="M20 19c0-2-1-3.4-2.5-4" />
    <path d="M4 19c0-2 1-3.4 2.5-4" />
  </Base>
);

export const Attendance = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="m9 15 2 2 4-4" />
  </Base>
);

export const Billing = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <path d="M2.5 10h19" />
    <path d="M6 14.5h4" />
  </Base>
);

export const Insights = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 19V5M4 19h16" />
    <path d="m7 15 3-4 3 2 4-6" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12 5 5L20 7" />
  </Base>
);

export const Grid = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </Base>
);

export const Pin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const Renew = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 12a8 8 0 0 1-14.3 4.9" />
    <path d="M4 12a8 8 0 0 1 14.3-4.9" />
    <path d="M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2" />
  </Base>
);

export const Leads = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 5h18l-7 8v5l-4 2v-7z" />
  </Base>
);
