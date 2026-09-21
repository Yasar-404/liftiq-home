import { MiniAreaChart } from "@/components/product/MiniAreaChart";
import { MiniBars } from "@/components/product/MiniBars";
import { attendanceWeek, followUpQueue, memberRecords, revenueOverview } from "@/data/demo";
import type { TabVisualKind } from "@/types";

interface TableProps {
  title: string;
  rows: { name: string; note: string; tag: string }[];
}

function Table({ title, rows }: TableProps) {
  return (
    <div className="flex h-full flex-col">
      <span className="text-eyebrow mb-2 text-[0.6rem]">{title}</span>
      {rows.map((row) => (
        <div
          key={row.name}
          className="flex items-center justify-between border-b border-border py-2.5 text-[12px] last:border-0"
        >
          <span className="text-text">{row.name}</span>
          <span className="text-text-faint">{row.note}</span>
          <span className="rounded bg-white/6 px-1.5 py-0.5 text-[10px] text-text-muted">
            {row.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Sample visual shown beside each product tab. */
export function TabVisual({ kind }: { kind: TabVisualKind }) {
  switch (kind) {
    case "attendance":
      return (
        <div className="flex h-full flex-col gap-3">
          <span className="text-eyebrow text-[0.6rem]">Check-ins · this week</span>
          <MiniBars
            data={attendanceWeek.values}
            labels={attendanceWeek.labels}
            activeIndex={attendanceWeek.peakIndex}
            className="mt-2"
          />
          <p className="mt-auto text-[11px] text-text-muted">{attendanceWeek.summary}</p>
        </div>
      );

    case "revenue":
      return (
        <div className="flex h-full flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <span className="text-eyebrow text-[0.6rem]">Membership revenue</span>
            <span className="text-[11px] text-accent-dim">▲ 12%</span>
          </div>
          <MiniAreaChart data={revenueOverview.series} height={110} />
          <div className="mt-auto grid grid-cols-3 gap-2 text-[11px]">
            {revenueOverview.stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-border bg-surface/50 p-2">
                <div className="text-text-faint">{stat.label}</div>
                <div className="text-text">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "followUps":
      return <Table title="Follow-up queue" rows={followUpQueue} />;

    case "records":
      return <Table title="Member records" rows={memberRecords} />;
  }
}
