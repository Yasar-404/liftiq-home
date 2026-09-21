"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Sparkle } from "@/components/ui/icons";
import {
  dashboardKpis,
  dashboardNav,
  recentActivity,
  revenueSeries,
  upcomingRenewals,
  weeklyCheckIns,
} from "@/data/demo";
import { cn } from "@/lib/cn";
import { easeSpring, viewportOnce } from "@/lib/motion";
import { MiniAreaChart } from "./MiniAreaChart";
import { MiniBars } from "./MiniBars";
import { WindowFrame } from "./WindowFrame";

interface PanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function Panel({ children, className, delay = 0 }: PanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: easeSpring, delay }}
      className={cn(
        "rounded-[var(--radius-md)] border border-border bg-surface-elevated/70 p-4",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function DashboardMock({ className }: { className?: string }) {
  return (
    <WindowFrame className={className}>
      <div className="flex bg-bg-subtle text-[13px]">
        <aside className="hidden w-[168px] shrink-0 flex-col gap-1 border-r border-border p-3 sm:flex">
          <div className="text-eyebrow px-2 pt-1 pb-3 text-[0.6rem]">Workspace</div>
          {dashboardNav.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px]",
                active ? "bg-white/6 text-text" : "text-text-faint",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
          <div className="mt-auto flex items-center gap-2 rounded-lg border border-border bg-surface/60 p-2.5">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-[10px] font-semibold text-accent">
              DL
            </span>
            <span className="text-[11px] text-text-muted">Downtown Lift</span>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-text">Dashboard</div>
              <div className="text-[11px] text-text-faint">Tuesday, 9 Sep · Demo data</div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[11px] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Live
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {dashboardKpis.map((kpi, i) => (
              <Panel key={kpi.label} delay={0.05 + i * 0.07} className="p-3">
                <div className="text-[10.5px] text-text-faint">{kpi.label}</div>
                <div className="mt-1 text-[1.15rem] font-semibold tracking-tight text-text">
                  <AnimatedCounter
                    value={kpi.value}
                    decimals={kpi.decimals}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                  />
                </div>
                <div className="mt-0.5 text-[10px] text-accent-dim">▲ 12% vs last month</div>
              </Panel>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr]">
            <Panel delay={0.24}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] text-text-muted">Membership revenue</span>
                <span className="text-[10px] text-text-faint">Last 12 weeks</span>
              </div>
              <MiniAreaChart data={revenueSeries} height={92} />
            </Panel>

            <Panel delay={0.3}>
              <div className="mb-2 flex items-center gap-1.5">
                <Sparkle className="h-3.5 w-3.5 text-accent" />
                <span className="text-[11px] text-text-muted">AI insight</span>
              </div>
              <p className="text-[11.5px] leading-relaxed text-text">
                Revenue is up <span className="text-accent">12%</span> this month.{" "}
                <span className="text-text-muted">18 memberships renew within 7 days.</span>
              </p>
            </Panel>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
            <Panel delay={0.34}>
              <div className="mb-2 flex items-center justify-between text-[11px] text-text-muted">
                <span>Attendance</span>
                <span className="text-text-faint">This week</span>
              </div>
              <MiniBars
                data={weeklyCheckIns.values}
                labels={weeklyCheckIns.labels}
                activeIndex={weeklyCheckIns.peakIndex}
              />
            </Panel>

            <Panel delay={0.38}>
              <div className="mb-2 text-[11px] text-text-muted">Upcoming renewals</div>
              <ul className="flex flex-col gap-1.5">
                {upcomingRenewals.map((r) => (
                  <li key={r.name} className="flex items-center justify-between text-[11px]">
                    <span className="text-text">{r.name}</span>
                    <span className="text-text-faint">{r.plan}</span>
                    <span className="rounded bg-white/6 px-1.5 py-0.5 text-[10px] text-text-muted">
                      {r.due}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          <Panel delay={0.42} className="mt-3">
            <div className="mb-2 text-[11px] text-text-muted">Recent activity</div>
            <ul className="flex flex-col gap-1.5">
              {recentActivity.map((a, i) => (
                <motion.li
                  key={a.who}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-2 text-[11px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                  <span className="text-text">{a.who}</span>
                  <span className="text-text-muted">{a.what}</span>
                  <span className="ml-auto text-text-faint">{a.when}</span>
                </motion.li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </WindowFrame>
  );
}
