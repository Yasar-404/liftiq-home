import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
}

/** The opening of a dedicated page: its h1, a lead and optional actions, under the site's light cone. */
export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="spotlight absolute inset-x-0 top-0 h-[40rem]" />
        <div className="grid-texture radial-fade absolute inset-0 opacity-60" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <p className="text-eyebrow">{eyebrow}</p>
        <h1 id="page-title" className="text-display text-sheen mt-5 max-w-4xl pb-1 text-balance">
          {title}
        </h1>
        <p className="text-lead mt-6 max-w-2xl text-pretty">{lead}</p>
        {children && (
          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
