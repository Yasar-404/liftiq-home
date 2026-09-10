"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "@/components/ui/icons";
import { Sheen } from "@/components/ui/Sheen";
import { cn } from "@/lib/cn";
import { productTabs } from "@/data/productTabs";
import { MiniAreaChart } from "@/components/product/MiniAreaChart";
import { MiniBars } from "@/components/product/MiniBars";

export function ProductStory() {
  const [active, setActive] = useState(productTabs[0].id);
  const tab = productTabs.find((t) => t.id === active) ?? productTabs[0];

  return (
    <Section id="platform" spacing="lg" containerClassName="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Product"
        title="Everything your gym needs. Nothing it doesn't."
        description="One workspace, organised around how gyms actually operate. Switch context without switching tools."
      />

      {/* tab bar */}
      <div
        role="tablist"
        aria-label="Product areas"
        className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {productTabs.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(t.id)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors",
                on ? "text-text" : "text-text-faint hover:text-text-muted",
              )}
            >
              {on && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-border-strong bg-surface-elevated"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="surface-card group relative grid grid-cols-1 gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
        <Sheen />
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center gap-5"
          >
            <h3 className="text-h3 text-balance">{tab.headline}</h3>
            <p className="text-text-muted">{tab.description}</p>
            <ul className="flex flex-col gap-2.5">
              {tab.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-text">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab.id}-visual`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[240px] rounded-[var(--radius-md)] border border-border bg-bg-subtle p-5"
          >
            <TabVisual id={tab.id} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

function Row({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-2.5 text-[12px] last:border-0">
      <span className="text-text">{a}</span>
      <span className="text-text-faint">{b}</span>
      <span className="rounded bg-white/6 px-1.5 py-0.5 text-[10px] text-text-muted">{c}</span>
    </div>
  );
}

function TabVisual({ id }: { id: string }) {
  switch (id) {
    case "attendance":
      return (
        <div className="flex h-full flex-col gap-3">
          <span className="text-eyebrow text-[0.6rem]">Check-ins · this week</span>
          <MiniBars
            data={[62, 78, 70, 88, 96, 74, 44]}
            labels={["M", "T", "W", "T", "F", "S", "S"]}
            activeIndex={4}
            className="mt-2"
          />
          <p className="mt-auto text-[11px] text-text-muted">
            Friday peak · 96 check-ins · avg 0.4s each
          </p>
        </div>
      );
    case "billing":
    case "overview":
    case "insights":
    case "ai":
      return (
        <div className="flex h-full flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <span className="text-eyebrow text-[0.6rem]">Membership revenue</span>
            <span className="text-[11px] text-accent-dim">▲ 12%</span>
          </div>
          <MiniAreaChart data={[24, 28, 26, 33, 31, 38, 41, 46, 44, 53, 58, 64]} height={110} />
          <div className="mt-auto grid grid-cols-3 gap-2 text-[11px]">
            {[
              ["Collected", "₹4.82L"],
              ["Pending", "₹52k"],
              ["Renewals", "18"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-border bg-surface/50 p-2">
                <div className="text-text-faint">{k}</div>
                <div className="text-text">{v}</div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return (
        <div className="flex h-full flex-col">
          <span className="text-eyebrow mb-2 text-[0.6rem]">
            {id === "crm" ? "Follow-up queue" : "Member records"}
          </span>
          <Row a="Priya N." b={id === "crm" ? "Trial ending" : "Annual · Strength"} c="Open" />
          <Row a="Arjun M." b={id === "crm" ? "No-show 7d" : "Quarterly"} c="Due" />
          <Row a="Kavya S." b={id === "crm" ? "Renewal call" : "Monthly · PT"} c="New" />
          <Row a="Rahul V." b={id === "crm" ? "Won back" : "Annual"} c="Active" />
        </div>
      );
  }
}
