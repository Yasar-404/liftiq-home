"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { useScrolled } from "@/hooks/useScrolled";
import { primaryNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Menu } from "@/components/ui/icons";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex justify-center px-4 pt-3 sm:pt-4">
        <div
          className={cn(
            "flex w-full max-w-[var(--container-wide)] items-center justify-between gap-6 rounded-full border px-4 transition-all duration-300 ease-[var(--ease-spring)]",
            scrolled
              ? "h-13 border-border bg-bg/70 py-1.5 shadow-[var(--shadow-md)] backdrop-blur-xl"
              : "h-15 border-transparent bg-transparent py-2",
          )}
        >
          <a href="#top" aria-label="LiftIQ home" className="shrink-0">
            <Logo />
          </a>

          <div className="hidden items-center gap-1.5 md:flex">
            <nav className="flex items-center gap-0.5">
              {primaryNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-text-muted transition-colors hover:text-text"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <span className="mx-1.5 h-5 w-px bg-border-strong" aria-hidden="true" />

            <a
              href="#contact"
              className="group relative inline-flex overflow-hidden rounded-full p-px"
            >
              <span
                aria-hidden="true"
                className="absolute inset-[-150%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,#7c5cff_12%,#2f80ff_22%,transparent_38%,transparent_100%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative rounded-full bg-bg-subtle px-4 py-1.5 text-sm text-text-muted transition-colors duration-200 group-hover:text-text">
                Sign In
              </span>
            </a>

            <Button href={site.cta.primary.href} size="md" withArrow className="ml-1">
              {site.cta.primary.label}
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition-colors hover:text-text md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={primaryNav} />
    </>
  );
}
