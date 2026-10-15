import { MiniAreaChart } from "@/components/product/MiniAreaChart";
import { MiniBars } from "@/components/product/MiniBars";
import { MockHeading, MockPanel, MockRow, MockTag } from "@/components/product/Mock";
import {
  atRiskMembers,
  attendance,
  collections,
  dues,
  expiringThisWeek,
  leadPipeline,
  overdueLeads,
  paymentRows,
  plans,
  renewals,
  revenueByPlan,
} from "@/data/demo";
import { formatInr, plural } from "@/lib/format";
import type { WorkflowId } from "@/types";

function dueLabel(days: number) {
  return days === 1 ? "Ends tomorrow" : `Ends in ${days} days`;
}

function MemberProfile() {
  const member = expiringThisWeek[0];
  const price = plans[member.plan];
  const stats = [
    { label: "Visits this month", value: String(member.visitsThisMonth) },
    { label: "Last paid", value: formatInr(price) },
    { label: "Balance", value: formatInr(0) },
  ];
  const timeline = [
    { what: "Checked in", when: "Today" },
    { what: "Note: prefers the morning batch", when: "3 weeks ago" },
    { what: `${member.plan} plan renewed · ${formatInr(price)} by UPI`, when: "12 months ago" },
  ];

  return (
    <MockPanel className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-[12px] font-semibold text-accent-text">
            PN
          </span>
          <div>
            <div className="text-[13px] font-semibold text-text">{member.name}</div>
            <div className="mock-label">
              {member.plan} · {dueLabel(member.endsInDays)}
            </div>
          </div>
        </div>
        <MockTag tone="warning">Renewal due</MockTag>
      </div>

      <dl className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-[var(--radius-sm)] border border-border bg-bg/40 p-2.5"
          >
            <dt className="text-[10.5px] text-text-faint">{s.label}</dt>
            <dd className="text-[13px] font-semibold text-text tabular-nums">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div>
        <div className="mb-1.5 text-[11px] text-text-muted">Timeline</div>
        <ul>
          {timeline.map((t) => (
            <MockRow
              key={t.what}
              primary={t.what}
              aside={<span className="mock-label">{t.when}</span>}
            />
          ))}
        </ul>
      </div>

      <div className="flex gap-2 text-[11.5px]" aria-hidden="true">
        <span className="rounded-[var(--radius-sm)] bg-accent-strong px-3 py-1.5 font-medium text-white">
          Renew
        </span>
        <span className="rounded-[var(--radius-sm)] border border-border-strong px-3 py-1.5 text-text">
          Call
        </span>
        <span className="rounded-[var(--radius-sm)] border border-border-strong px-3 py-1.5 text-text">
          WhatsApp
        </span>
      </div>
    </MockPanel>
  );
}

function Payments() {
  return (
    <div className="flex flex-col gap-2.5">
      <MockPanel>
        <MockHeading title="Payments yesterday" aside={formatInr(collections.yesterday)} />
        <ul>
          {paymentRows.map((p) => (
            <MockRow
              key={p.receipt}
              primary={p.name}
              secondary={`${p.plan} · ${p.method} · ${p.receipt}`}
              aside={
                <span className="text-[12px] text-text tabular-nums">{formatInr(p.amount)}</span>
              }
            />
          ))}
        </ul>
      </MockPanel>
      <MockPanel>
        <MockHeading
          title="Outstanding"
          aside={`${formatInr(dues.total)} · ${plural(dues.members, "member")}`}
        />
        <ul>
          {dues.rows.slice(0, 3).map((d) => (
            <MockRow
              key={d.name}
              primary={d.name}
              secondary={formatInr(d.amount)}
              aside={<MockTag tone="negative">{d.daysLate} days late</MockTag>}
            />
          ))}
        </ul>
      </MockPanel>
    </div>
  );
}

function AttendanceView() {
  const slipping = atRiskMembers.slice(0, 2);
  return (
    <div className="flex flex-col gap-2.5">
      <MockPanel>
        <MockHeading title="Check-ins" aside="Last 7 days" />
        <MiniBars
          data={attendance.days}
          labels={attendance.labels}
          activeIndex={attendance.days.length - 1}
          label={`Daily check-ins over the last 7 days. ${attendance.today} so far today.`}
        />
        <dl className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
          {[
            { label: "Today so far", value: attendance.today },
            { label: "In the gym now", value: attendance.inGymNow },
            { label: "Busiest day", value: attendance.peak },
          ].map((s) => (
            <div key={s.label}>
              <dt className="text-text-faint">{s.label}</dt>
              <dd className="text-[13px] font-semibold text-text tabular-nums">{s.value}</dd>
            </div>
          ))}
        </dl>
      </MockPanel>
      <MockPanel>
        <MockHeading title="Slipping away" aside={plural(atRiskMembers.length, "member")} />
        <ul>
          {slipping.map((m) => (
            <MockRow
              key={m.name}
              primary={m.name}
              secondary={m.reason}
              aside={<MockTag tone="warning">{m.band}</MockTag>}
            />
          ))}
        </ul>
      </MockPanel>
    </div>
  );
}

function RenewalsBoard() {
  return (
    <MockPanel>
      <MockHeading
        title="Due this week"
        aside={`${renewals.count} · ${formatInr(renewals.atStake)} at stake`}
      />
      <ul>
        {renewals.rows.slice(0, 6).map((m) => (
          <MockRow
            key={m.name}
            primary={m.name}
            secondary={`${m.plan} · ${formatInr(plans[m.plan])} · ${dueLabel(m.endsInDays)}`}
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
      <p className="mt-3 text-[11px] text-text-faint">
        {renewals.notContactedCount} of {renewals.count} not reached yet
      </p>
    </MockPanel>
  );
}

function LeadsView() {
  const max = Math.max(...leadPipeline.map((s) => s.count));
  return (
    <div className="flex flex-col gap-2.5">
      <MockPanel>
        <MockHeading title="Pipeline" />
        <dl className="flex flex-col gap-2">
          {leadPipeline.map((s) => (
            <div
              key={s.stage}
              className="grid grid-cols-[96px_1fr_24px] items-center gap-2 text-[11.5px]"
            >
              <dt className="text-text-muted">{s.stage}</dt>
              <span className="h-1.5 rounded-full bg-white/[0.06]" aria-hidden="true">
                <span
                  className="block h-full rounded-full bg-accent"
                  style={{ width: `${(s.count / max) * 100}%` }}
                />
              </span>
              <dd className="text-right text-text tabular-nums">{s.count}</dd>
            </div>
          ))}
        </dl>
      </MockPanel>
      <MockPanel>
        <MockHeading title="Follow-ups due" aside={plural(overdueLeads.length, "lead")} />
        <ul>
          {overdueLeads.slice(0, 3).map((l) => (
            <MockRow
              key={l.name}
              primary={`${l.name} · ${l.source}`}
              secondary={l.note}
              aside={<span className="mock-label">{l.due}</span>}
            />
          ))}
        </ul>
      </MockPanel>
    </div>
  );
}

function Reports() {
  const max = Math.max(...revenueByPlan.map((r) => r.amount));
  return (
    <div className="flex flex-col gap-2.5">
      <MockPanel>
        <MockHeading title="Collections" aside="Last 12 weeks" />
        <MiniAreaChart
          data={collections.weekly}
          height={96}
          label="Weekly collections over the last 12 weeks"
        />
      </MockPanel>
      <MockPanel>
        <MockHeading
          title="Revenue by plan"
          aside={`${formatInr(collections.last4Weeks)} · last 4 weeks`}
        />
        <dl className="flex flex-col gap-2">
          {revenueByPlan.map((r) => (
            <div
              key={r.plan}
              className="grid grid-cols-[84px_1fr_64px] items-center gap-2 text-[11.5px]"
            >
              <dt className="text-text-muted">{r.plan}</dt>
              <span className="h-1.5 rounded-full bg-white/[0.06]" aria-hidden="true">
                <span
                  className="block h-full rounded-full bg-accent"
                  style={{ width: `${(r.amount / max) * 100}%` }}
                />
              </span>
              <dd className="text-right text-text tabular-nums">{formatInr(r.amount)}</dd>
            </div>
          ))}
        </dl>
      </MockPanel>
    </div>
  );
}

/** Sample visual shown beside each product tab. */
export function WorkflowPreview({ kind }: { kind: WorkflowId }) {
  switch (kind) {
    case "members":
      return <MemberProfile />;
    case "payments":
      return <Payments />;
    case "attendance":
      return <AttendanceView />;
    case "renewals":
      return <RenewalsBoard />;
    case "leads":
      return <LeadsView />;
    case "reports":
      return <Reports />;
  }
}
