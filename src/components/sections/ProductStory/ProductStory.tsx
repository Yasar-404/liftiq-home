"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Check } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sheen } from "@/components/ui/Sheen";
import { productTabs } from "@/data/productTabs";
import { cn } from "@/lib/cn";
import { easeSpring } from "@/lib/motion";
import { TabVisual } from "./TabVisual";

export function ProductStory() {
  const [activeId, setActiveId] = useState(productTabs[0].id);
  const activeTab = productTabs.find((tab) => tab.id === activeId) ?? productTabs[0];

  return (
    <Section id="platform" spacing="lg" containerClassName="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Product"
        title="Everything your gym needs. Nothing it doesn't."
        description="One workspace, organised around how gyms actually operate. Switch context without switching tools."
      />

      <div
        role="tablist"
        aria-label="Product areas"
        className="-mx-5 flex [scrollbar-width:none] gap-1 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {productTabs.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors",
                selected ? "text-text" : "text-text-faint hover:text-text-muted",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-border-strong bg-surface-elevated"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="surface-card group relative grid grid-cols-1 gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
        <Sheen />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: easeSpring }}
            className="flex flex-col justify-center gap-5"
          >
            <h3 className="text-h3 text-balance">{activeTab.headline}</h3>
            <p className="text-text-muted">{activeTab.description}</p>
            <ul className="flex flex-col gap-2.5">
              {activeTab.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-text">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab.id}-visual`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: easeSpring }}
            className="relative min-h-[240px] rounded-[var(--radius-md)] border border-border bg-bg-subtle p-5"
          >
            <TabVisual kind={activeTab.visual} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
