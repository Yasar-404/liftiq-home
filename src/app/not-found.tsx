import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { Contact } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { primaryPages } from "@/data/pages";

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
        lead="The link may be old or mistyped. These pages might help:"
      >
        <Button href="/" size="lg" withArrow>
          Go to the homepage
        </Button>
        <nav aria-label="Pages" className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:ml-3">
          {primaryPages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </PageHero>
      {/* Keeps the header's Book a Demo button working on this page too. */}
      <Contact />
    </>
  );
}
