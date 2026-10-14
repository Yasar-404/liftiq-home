import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { DashboardMock } from "@/components/product/DashboardMock";
import { Button } from "@/components/ui/Button";
import { heroFacts } from "@/data/loop";
import { site } from "@/data/site";

const previewMask = "linear-gradient(to bottom, #000 72%, transparent)";

const enterDelay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="spotlight absolute inset-x-0 top-0 h-[52rem]" />
        <div className="grid-texture radial-fade absolute inset-0 opacity-70" />
        <div className="glow top-[-16rem] left-1/2 h-[34rem] w-[60rem] max-w-[160vw] -translate-x-1/2" />
      </div>

      <Container size="wide">
        <div className="flex flex-col items-center text-center">
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-white/[0.03] py-1 pr-3.5 pl-1 text-[0.8rem] text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[0.72rem] font-medium text-accent-text">
              India
            </span>
            Gym management software
          </p>

          <h1 id="hero-title" className="text-display text-sheen pb-1">
            <span className="whitespace-nowrap">Run your gym.</span>{" "}
            <span className="text-gradient-soft block">Smarter.</span>
          </h1>

          <p className="text-lead mt-6 max-w-[36rem] text-pretty">
            Memberships, payments, attendance, leads and renewals in one workspace. Every morning,
            LiftIQ shows you what came in, what is due, and which task to do first.
          </p>

          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button href={site.cta.primary.href} size="lg" withArrow cta="hero-demo">
              {site.cta.primary.label}
            </Button>
            <Button href={site.cta.secondary.href} size="lg" variant="secondary" cta="hero-explore">
              {site.cta.secondary.label}
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.8rem] text-text-faint">
            {heroFacts.map((fact, i) => (
              <li key={fact} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="hidden h-3 w-px bg-border-strong sm:block" aria-hidden="true" />
                )}
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="enter relative mx-auto mt-14 max-w-[1120px] sm:mt-20"
          style={enterDelay(120)}
        >
          {/* A thin line of light along the top edge of the preview. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[12%] -top-px z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(196,181,255,0.9),transparent)]"
          />
          <div aria-hidden="true" className="glow inset-x-[-8%] -top-24 h-64 w-auto opacity-80" />
          <figure
            className="frame-lit max-h-[640px] overflow-hidden"
            style={{ maskImage: previewMask, WebkitMaskImage: previewMask }}
          >
            <DashboardMock />
            <figcaption className="sr-only">
              The LiftIQ dashboard for a sample gym: key figures, the morning brief, weekly
              collections and memberships expiring this week.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
