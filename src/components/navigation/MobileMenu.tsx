"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Close } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  /** Href of the section the reader is in, if any. */
  currentHref: string | null;
}

/**
 * Full-width menu for small screens. Always rendered so it can transition;
 * `inert` keeps it out of the tab order and accessibility tree while closed.
 */
export function MobileMenu({ open, onClose, items, currentHref }: MobileMenuProps) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      inert={!open}
      className={cn(
        "fixed inset-0 z-[70] md:hidden",
        open ? "visible" : "invisible delay-[var(--duration-base)]",
      )}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-bg/80 backdrop-blur-md transition-opacity duration-[var(--duration-base)]",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "absolute inset-x-0 top-0 flex flex-col gap-8 rounded-b-[var(--radius-lg)] border-b border-border bg-bg-subtle px-5 pt-4 pb-8",
          "transition-[transform,opacity] duration-[var(--duration-base)] ease-[var(--ease-spring)]",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-text-muted transition-colors hover:text-text"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {items.map((item) => {
              const current = currentHref === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    aria-current={current ? "location" : undefined}
                    className={cn(
                      "flex items-center justify-between border-b border-border py-4 text-lg font-medium",
                      current ? "text-accent-text" : "text-text",
                    )}
                  >
                    {item.label}
                    <span className="text-text-faint" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <Button
            href={site.cta.primary.href}
            size="lg"
            withArrow
            onClick={onClose}
            cta="menu-demo"
          >
            {site.cta.primary.label}
          </Button>
          {site.signInUrl && (
            <Button href={site.signInUrl} size="lg" variant="secondary">
              Sign in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
