"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { Check } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import type { AreaId, PlatformArea } from "@/types";

interface PlatformTabsProps {
  areas: PlatformArea[];
  /** Server-rendered preview for each area, rendered once. */
  previews: Record<AreaId, ReactNode>;
}

/**
 * Tabs for the platform areas. Every panel is rendered by the server and only
 * their visibility changes here, so each preview exists once in the page.
 * Without JavaScript the tab list is hidden and all panels read in sequence
 * (see `.tab-*` in styles/motion.css). Arrow keys, Home and End move between
 * tabs, per the WAI-ARIA tabs pattern.
 */
export function PlatformTabs({ areas, previews }: PlatformTabsProps) {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Replay the panel's chart animations each time it is shown.
  useEffect(() => {
    if (!interacted) return;
    const charts = panelRefs.current[active]?.querySelectorAll<HTMLElement>(".chart") ?? [];
    charts.forEach((chart) => chart.classList.remove("is-visible"));
    const frame = window.requestAnimationFrame(() => {
      charts.forEach((chart) => chart.classList.add("is-visible"));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [active, interacted]);

  const select = (index: number, focus = false) => {
    const next = (index + areas.length) % areas.length;
    setInteracted(true);
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: areas.length - 1,
    };
    if (event.key in moves) {
      event.preventDefault();
      select(moves[event.key], true);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Platform areas"
        onKeyDown={onKeyDown}
        className="tab-list mx-auto grid w-full max-w-full grid-cols-4 gap-1 rounded-full border border-border bg-bg/60 p-1 sm:flex sm:w-fit sm:justify-center"
      >
        {areas.map((area, i) => {
          const selected = i === active;
          return (
            <button
              key={area.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`platform-tab-${area.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`platform-panel-${area.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              className={cn(
                "h-10 rounded-full border px-1 text-[0.8125rem] transition-[color,background-color,border-color] duration-[var(--duration-fast)] sm:px-4 sm:text-sm",
                selected
                  ? "border-border-strong bg-surface-elevated text-text"
                  : "border-transparent text-text-muted hover:text-text",
              )}
            >
              {area.label}
            </button>
          );
        })}
      </div>

      {areas.map((area, i) => {
        const selected = i === active;
        return (
          <div
            key={area.id}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            id={`platform-panel-${area.id}`}
            role="tabpanel"
            aria-labelledby={`platform-tab-${area.id}`}
            hidden={!selected}
            className={cn(
              "tab-panel grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16",
              selected && interacted && "tab-enter",
            )}
          >
            <div className="flex flex-col gap-5">
              <h3 className="text-h3 text-balance">{area.headline}</h3>
              <p className="text-[1rem] leading-relaxed text-text-muted">{area.summary}</p>
              <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
                {area.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-text">
                    <Check className="h-4 w-4 shrink-0 text-accent-text" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="frame-lit">
              <div className="rounded-[var(--radius-lg)] bg-[image:var(--gradient-panel)] p-3 sm:p-5">
                {previews[area.id]}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
