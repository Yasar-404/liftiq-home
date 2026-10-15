"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Menu } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/data/navigation";
import { navSections } from "@/data/sections";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";

const sectionIds = navSections.map((section) => section.id);

export function Navbar() {
  const scrolled = useScrolled(16);
  const activeId = useActiveSection(sectionIds);
  const onHome = usePathname() === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButton.current?.focus();
  }, []);
  const closeForNavigation = useCallback(() => setMenuOpen(false), []);

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
          {/* On the homepage the logo returns to the top; elsewhere (404) it goes home. */}
          {onHome ? (
            <a href="#top" aria-label={`${site.name} home`} className="shrink-0 rounded-md">
              <Logo />
            </a>
          ) : (
            <Link href="/" aria-label={`${site.name} home`} className="shrink-0 rounded-md">
              <Logo />
            </Link>
          )}

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item, i) => {
                const current = activeId === navSections[i].id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={current ? "location" : undefined}
                      className={cn(
                        "block rounded-full px-3.5 py-2 text-sm transition-colors duration-[var(--duration-fast)]",
                        current
                          ? "bg-white/[0.07] text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                          : "text-text-muted hover:bg-white/[0.04] hover:text-text",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
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

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        onNavigate={closeForNavigation}
        items={primaryNav}
        currentHref={activeId ? `/#${activeId}` : null}
      />
    </>
  );
}
