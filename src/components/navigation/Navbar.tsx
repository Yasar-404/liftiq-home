"use client";

import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/data/navigation";
import { site } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButton.current?.focus();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex justify-center px-3 pt-3 sm:px-4">
        <div
          className={cn(
            "flex h-14 w-full max-w-[var(--container-wide)] items-center justify-between gap-6 rounded-full border px-3 pl-4 transition-[background-color,border-color,box-shadow] duration-[var(--duration-base)]",
            scrolled
              ? "border-border bg-bg/75 shadow-[var(--shadow-md)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#top" aria-label={`${site.name} home`} className="shrink-0 rounded-md">
            <Logo />
          </a>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm text-text-muted transition-colors duration-[var(--duration-fast)] hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {site.signInUrl && (
              <Button href={site.signInUrl} variant="ghost" size="md" className="px-3">
                Sign in
              </Button>
            )}
            <Button href={site.cta.primary.href} size="md" withArrow cta="nav-demo">
              {site.cta.primary.label}
            </Button>
          </div>

          <button
            ref={menuButton}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-text-muted transition-colors hover:text-text md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} items={primaryNav} />
    </>
  );
}
