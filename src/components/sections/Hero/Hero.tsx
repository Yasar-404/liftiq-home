import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { DashboardMock } from "@/components/product/DashboardMock";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const previewMask = "linear-gradient(to bottom, #000 72%, transparent)";

const delay = (ms: number, extra?: Record<string, string>) =>
  ({ "--enter-delay": `${ms}ms`, ...extra }) as CSSProperties;

/**
 * The opening. Text is on screen from the first frame and only settles upward
 * (transform, no opacity), so the message is never withheld; buttons and the
 * product preview fade in within the first half second, and the dashboard's
 * panels land in sequence (see DashboardMock).
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="spotlight light-swell absolute inset-x-0 top-0 h-[52rem]" />
        <div className="grid-texture radial-fade absolute inset-0 opacity-70" />
        <div className="glow top-[-16rem] left-1/2 h-[34rem] w-[60rem] max-w-[160vw] -translate-x-1/2" />
      </div>

      <Container size="wide">
        <div className="flex flex-col items-center text-center">
          <h1 id="hero-title" className="text-display text-sheen pb-1">
            <span className="settle block whitespace-nowrap" style={delay(0)}>
              Run your gym.
            </span>
            <span className="settle text-gradient-soft block" style={delay(110)}>
              Smarter.
            </span>
          </h1>

          <p
            className="text-lead settle mt-6 max-w-[36rem] text-pretty"
            style={delay(220, { "--settle-from": "14px" })}
          >
            Memberships, payments, attendance and renewals in one workspace, with a morning brief
            that tells you what to do first.
          </p>

          <div
            className="enter mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
            style={delay(180)}
          >
            <Button href={site.cta.primary.href} size="lg" withArrow cta="hero-demo">
              {site.cta.primary.label}
            </Button>
            <Button href={site.cta.secondary.href} size="lg" variant="secondary" cta="hero-explore">
              {site.cta.secondary.label}
            </Button>
          </div>
        </div>

        <div className="enter relative mx-auto mt-14 max-w-[1120px] sm:mt-20" style={delay(320)}>
          {/* A thin line of light along the top edge of the preview. */}
          <div
            aria-hidden="true"
            className="bg-[linear-gradient(90deg,transparent,oklch(0.85 0.08 292 / 0.85),transparent)] absolute inset-x-[12%] -top-px z-10 h-px"
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
