import { Button } from "@/components/ui/Button";
import { Pin } from "@/components/ui/icons";
import { site } from "@/data/site";

export function DemoCard() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] p-px">
      <div className="animate-spin-slow absolute inset-[-140%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(47,128,255,0.9)_12%,rgba(182,75,255,0.9)_22%,transparent_38%,transparent_100%)]" />

      <div className="relative flex flex-col gap-6 rounded-[calc(var(--radius-lg)-1px)] bg-[linear-gradient(180deg,#131318,#0d0d10)] p-7 sm:p-8">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-eyebrow text-[0.6rem]">
            Taking demos now · replies within 1 business day
          </span>
        </div>

        <div className="relative flex flex-col gap-2">
          <p className="text-h3">See LiftIQ on your numbers.</p>
          <p className="text-sm leading-relaxed text-text-muted">
            A 20-minute walkthrough mapped to your memberships, attendance, and billing. No slides.
          </p>
        </div>

        <div className="relative flex flex-col gap-3 sm:flex-row">
          <Button href={site.contact.emailHref} size="lg" withArrow className="flex-1">
            Book a Demo
          </Button>
          <Button href={site.contact.phoneHref} size="lg" variant="secondary" className="flex-1">
            Talk to Us
          </Button>
        </div>

        <div className="relative flex items-center gap-2 border-t border-border pt-5 text-xs text-text-faint">
          <Pin className="h-3.5 w-3.5" />
          {site.contact.location}
        </div>
      </div>
    </div>
  );
}
