import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { DashboardMock } from "@/components/product/DashboardMock";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const previewMask = "linear-gradient(to bottom, #000 70%, transparent)";

const enterDelay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-texture radial-fade absolute inset-0" />
        <div className="glow top-[-14rem] left-1/2 h-[36rem] w-[64rem] max-w-[160vw] -translate-x-1/2" />
      </div>

      <Container size="wide">
        <div className="flex flex-col items-center text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-3.5 py-1.5 text-[0.8rem] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Gym management software for India
          </p>

          <h1 id="hero-title" className="text-display text-text">
            <span className="whitespace-nowrap">Run your gym.</span>{" "}
            <span className="text-gradient block">Smarter.</span>
          </h1>

          <p className="text-lead mt-6 max-w-[38rem] text-pretty">
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

          <p className="mt-5 text-[0.8rem] text-text-faint">
            For single gyms and multi-branch studios
          </p>
        </div>

        <div
          className="enter relative mx-auto mt-14 max-w-[1080px] sm:mt-16"
          style={enterDelay(120)}
        >
          <div
            aria-hidden="true"
            className="glow -inset-x-24 -top-20 bottom-0 h-auto w-auto opacity-70"
          />
          <figure
            className="relative max-h-[620px] overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-[linear-gradient(180deg,rgba(124,92,255,0.45),rgba(255,255,255,0.06)_30%,rgba(255,255,255,0.02))] p-px sm:max-h-[640px]"
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
