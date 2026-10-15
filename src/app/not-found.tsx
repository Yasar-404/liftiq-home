import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { Contact } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page doesn't exist."
        lead="The link may be old or mistyped. Everything about LiftIQ is on the homepage:"
      >
        <Button href="/" size="lg" withArrow>
          Go to the homepage
        </Button>
        <nav
          aria-label="Sections"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:ml-3"
        >
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </PageHero>
      {/* Keeps the header's Book a Demo button working on this page too. */}
      <Contact />
    </>
  );
}
