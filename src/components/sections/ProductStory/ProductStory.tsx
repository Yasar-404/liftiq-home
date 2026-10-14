"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productTabs } from "@/data/productTabs";
import { cn } from "@/lib/cn";
import { TabVisual } from "./TabVisual";

const tabId = (id: string) => `product-tab-${id}`;
const panelId = (id: string) => `product-panel-${id}`;

export function ProductStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeTab = productTabs[activeIndex];

  const select = (index: number) => {
    const next = (index + productTabs.length) % productTabs.length;
    setActiveIndex(next);
    const tab = tabRefs.current[next];
    tab?.focus();
    tab?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  // Arrow keys move between tabs (WAI-ARIA tabs pattern, automatic activation).
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, () => void> = {
      ArrowRight: () => select(activeIndex + 1),
      ArrowLeft: () => select(activeIndex - 1),
      Home: () => select(0),
      End: () => select(productTabs.length - 1),
    };
    const action = keys[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <Section
      id="platform"
      spacing="lg"
      className="band"
      containerClassName="flex flex-col items-center gap-10"
    >
      <SectionHeading
        align="center"
        eyebrow="The platform"
        title="Everything the front desk and the owner work from."
        description="One workspace for the jobs a gym does every day. Each area answers a question you would otherwise piece together by hand."
      />

      <div
        role="tablist"
        aria-label="Product areas"
        onKeyDown={onKeyDown}
        className="-mx-5 flex max-w-[calc(100%+2.5rem)] [scrollbar-width:none] gap-1 overflow-x-auto px-5 pb-1 sm:mx-0 sm:max-w-full sm:rounded-full sm:border sm:border-border sm:bg-bg/60 sm:p-1 sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
      >
        {productTabs.map((tab, i) => {
          const selected = i === activeIndex;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={tabId(tab.id)}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId(tab.id)}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-10 shrink-0 rounded-full border px-4 text-sm transition-[color,background-color,border-color,box-shadow] duration-[var(--duration-fast)]",
                selected
                  ? "border-border-strong bg-surface-elevated text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.4)]"
                  : "border-transparent text-text-muted hover:text-text",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={panelId(activeTab.id)}
        role="tabpanel"
        aria-labelledby={tabId(activeTab.id)}
        className="frame-lit w-full"
      >
        <div className="grid grid-cols-1 gap-8 rounded-[var(--radius-lg)] bg-[linear-gradient(180deg,var(--color-surface-elevated),var(--color-surface))] p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-10">
          <div key={activeTab.id} className="enter flex flex-col justify-center gap-6">
            <h3 className="text-h3 text-balance">{activeTab.headline}</h3>

            <div className="flex flex-col gap-4 text-[0.95rem] leading-relaxed">
              <p className="text-text-muted">
                <span className="font-medium text-text">The problem. </span>
                {activeTab.problem}
              </p>
              <p className="text-text-muted">
                <span className="font-medium text-text">With LiftIQ. </span>
                {activeTab.solution}
              </p>
            </div>

            <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
              {activeTab.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-text">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-text">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <figure
            key={`${activeTab.id}-visual`}
            className="enter flex flex-col justify-center rounded-[var(--radius-md)] border border-border bg-bg-subtle p-3 sm:p-5"
            style={{ "--enter-delay": "80ms" } as React.CSSProperties}
          >
            <TabVisual kind={activeTab.id} />
            <figcaption className="mt-3 text-center text-[11px] text-text-faint">
              Sample gym and figures, for illustration
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
