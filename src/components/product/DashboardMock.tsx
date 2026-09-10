"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { viewportOnce } from "@/lib/motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  Grid,
  Members,
  Attendance,
  Billing,
  Insights,
  Sparkle,
} from "@/components/ui/icons";
import { MiniAreaChart } from "./MiniAreaChart";
import { MiniBars } from "./MiniBars";
import { WindowFrame } from "./WindowFrame";

const revenueSeries = [22, 26, 24, 30, 28, 34, 33, 40, 44, 42, 52, 58];
const attendance = [58, 72, 65, 80, 91, 74, 40];
const days = ["M", "T", "W", "T", "F", "S", "S"];

const nav = [
  { icon: Grid, label: "Dashboard", active: true },
  { icon: Members, label: "Members" },
  { icon: Attendance, label: "Attendance" },
  { icon: Billing, label: "Billing" },
  { icon: Insights, label: "Insights" },
];

const renewals = [
  { name: "Priya N.", plan: "Annual · Strength", days: "2d" },
  { name: "Arjun M.", plan: "Quarterly", days: "4d" },
  { name: "Kavya S.", plan: "Monthly · PT", days: "6d" },
];

const activity = [
  { who: "Rahul V.", what: "checked in", when: "now" },
  { who: "Meera K.", what: "renewed Annual plan", when: "6m" },
  { who: "Dev A.", what: "booked assessment", when: "18m" },
];

function Panel({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
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
        {/* sidebar */}
        <aside className="hidden w-[168px] shrink-0 flex-col gap-1 border-r border-border p-3 sm:flex">
          <div className="px-2 pb-3 pt-1 text-eyebrow text-[0.6rem]">Workspace</div>
          {nav.map(({ icon: Icon, label, active }) => (
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

        {/* main */}
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

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue · MTD", value: 4.82, prefix: "₹", suffix: "L", d: 0.05 },
              { label: "Active members", value: 612, d: 0.12 },
              { label: "Check-ins today", value: 148, d: 0.19 },
            ].map((k) => (
              <Panel key={k.label} delay={k.d} className="p-3">
                <div className="text-[10.5px] text-text-faint">{k.label}</div>
                <div className="mt-1 text-[1.15rem] font-semibold tracking-tight text-text">
                  <AnimatedCounter
                    value={k.value}
                    decimals={k.prefix ? 2 : 0}
                    prefix={k.prefix ?? ""}
                    suffix={k.suffix ?? ""}
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
                Revenue is up{" "}
                <span className="text-accent">12%</span> this month.{" "}
                <span className="text-text-muted">
                  18 memberships renew within 7 days.
                </span>
              </p>
            </Panel>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
            <Panel delay={0.34}>
              <div className="mb-2 flex items-center justify-between text-[11px] text-text-muted">
                <span>Attendance</span>
                <span className="text-text-faint">This week</span>
              </div>
              <MiniBars data={attendance} labels={days} activeIndex={4} />
            </Panel>

            <Panel delay={0.38}>
              <div className="mb-2 text-[11px] text-text-muted">Upcoming renewals</div>
              <ul className="flex flex-col gap-1.5">
                {renewals.map((r) => (
                  <li key={r.name} className="flex items-center justify-between text-[11px]">
                    <span className="text-text">{r.name}</span>
                    <span className="text-text-faint">{r.plan}</span>
                    <span className="rounded bg-white/6 px-1.5 py-0.5 text-[10px] text-text-muted">
                      {r.days}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          <Panel delay={0.42} className="mt-3">
            <div className="mb-2 text-[11px] text-text-muted">Recent activity</div>
            <ul className="flex flex-col gap-1.5">
              {activity.map((a, i) => (
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
