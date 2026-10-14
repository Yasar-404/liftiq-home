import { Attendance, Billing, Grid, Insights, Leads, Members, Renew } from "@/components/ui/icons";
import { collections, dashboardKpis, demoGym, renewals } from "@/data/demo";
import { formatInr } from "@/lib/format";
import { cn } from "@/lib/cn";
import { BriefMock } from "./BriefMock";
import { MiniAreaChart } from "./MiniAreaChart";
import { MockHeading, MockPanel, MockRow, MockTag, SampleDataBadge } from "./Mock";
import { WindowFrame } from "./WindowFrame";

const nav = [
  { label: "Dashboard", icon: Grid, active: true },
  { label: "Members", icon: Members },
  { label: "Payments", icon: Billing },
  { label: "Attendance", icon: Attendance },
  { label: "Renewals", icon: Renew },
  { label: "Leads", icon: Leads },
  { label: "Reports", icon: Insights },
];

function dueLabel(days: number) {
  return days === 1 ? "Tomorrow" : `In ${days} days`;
}

/** The LiftIQ dashboard, rendered with the sample workspace in data/demo.ts. */
export function DashboardMock({ className }: { className?: string }) {
  return (
    <WindowFrame className={className}>
      <div className="flex bg-bg-subtle text-[13px]">
        <aside className="hidden w-[176px] shrink-0 flex-col gap-0.5 border-r border-border p-3 md:flex">
          <div className="mb-3 flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface/60 p-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-soft text-[10px] font-semibold text-accent-text">
              {demoGym.initials}
            </span>
            <span className="truncate text-[11.5px] text-text">{demoGym.name}</span>
          </div>
          {nav.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-2.5 rounded-[var(--radius-sm)] px-2.5 py-1.5 text-[12px]",
                active ? "bg-white/[0.06] text-text" : "text-text-faint",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
        </aside>

        <div className="min-w-0 flex-1 p-3.5 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-[14px] font-semibold text-text">Dashboard</div>
              <div className="mock-label">Today · all branches</div>
            </div>
            <SampleDataBadge />
          </div>

          <dl className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {dashboardKpis.map((kpi) => (
              <MockPanel key={kpi.label} className="flex flex-col p-3 sm:p-3.5">
                <dt className="mock-label">{kpi.label}</dt>
                <dd className="mt-1 text-[1.15rem] font-semibold tracking-tight text-text tabular-nums">
                  {kpi.value}
                </dd>
                <dd
                  className={cn(
                    "mt-0.5 text-[10.5px]",
                    kpi.positive ? "text-positive" : "text-text-faint",
                  )}
                >
                  {kpi.note}
                </dd>
              </MockPanel>
            ))}
          </dl>

          <BriefMock className="mt-2.5" />

          <div className="mt-2.5 grid grid-cols-1 gap-2.5 lg:grid-cols-[1.4fr_1fr]">
            <MockPanel>
              <MockHeading title="Collections" aside="Last 12 weeks" />
              <MiniAreaChart
                data={collections.weekly}
                height={104}
                label={`Weekly collections over the last 12 weeks, ${formatInr(collections.last4Weeks)} in the last 4 weeks`}
              />
            </MockPanel>

            <MockPanel>
              <MockHeading
                title="Expiring this week"
                aside={`${renewals.count} · ${formatInr(renewals.atStake)}`}
              />
              <ul>
                {renewals.rows.slice(0, 4).map((m) => (
                  <MockRow
                    key={m.name}
                    primary={m.name}
                    secondary={`${m.plan} · ${dueLabel(m.endsInDays)}`}
                    aside={
                      m.contacted ? (
                        <MockTag tone="positive">Contacted</MockTag>
                      ) : (
                        <MockTag tone="warning">Not reached</MockTag>
                      )
                    }
                  />
                ))}
              </ul>
            </MockPanel>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
