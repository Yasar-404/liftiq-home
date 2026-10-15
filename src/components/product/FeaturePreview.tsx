import { MockPanel, MockTag } from "@/components/product/Mock";
import { branches, cashClose, discountRequest } from "@/data/demo";
import { formatInr } from "@/lib/format";
import type { FeatureVisualKind } from "@/types";

function BranchComparison() {
  return (
    <MockPanel className="overflow-hidden p-0 sm:p-0">
      <table className="w-full text-left text-[12px]">
        <caption className="sr-only">Sample branch comparison</caption>
        <thead>
          <tr className="text-[11px] text-text-faint">
            <th scope="col" className="px-4 py-2.5 font-normal">
              Branch
            </th>
            <th scope="col" className="px-4 py-2.5 text-right font-normal">
              Members
            </th>
            <th scope="col" className="px-4 py-2.5 text-right font-normal">
              Collected<span className="hidden sm:inline"> · 4 wks</span>
            </th>
            <th scope="col" className="hidden px-4 py-2.5 text-right font-normal sm:table-cell">
              Check-ins today
            </th>
          </tr>
        </thead>
        <tbody className="tabular-nums">
          {branches.map((b) => (
            <tr key={b.name} className="border-t border-border">
              <th scope="row" className="px-4 py-2.5 font-medium text-text">
                {b.name}
              </th>
              <td className="px-4 py-2.5 text-right text-text">{b.members}</td>
              <td className="px-4 py-2.5 text-right text-text">{formatInr(b.collected)}</td>
              <td className="hidden px-4 py-2.5 text-right text-text sm:table-cell">
                {b.checkInsToday}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MockPanel>
  );
}

function ApprovalRequest() {
  const r = discountRequest;
  return (
    <MockPanel className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[12.5px] font-medium text-text">
            {r.member} · {r.plan}
          </div>
          <div className="mock-label">{r.requestedBy}</div>
        </div>
        <MockTag tone="warning">Needs approval</MockTag>
      </div>
      <dl className="grid grid-cols-3 gap-2 text-[11px]">
        <div>
          <dt className="text-text-faint">Price</dt>
          <dd className="text-text tabular-nums">{formatInr(r.price)}</dd>
        </div>
        <div>
          <dt className="text-text-faint">Discount</dt>
          <dd className="text-text tabular-nums">
            {r.discountPct}% <span className="text-text-faint">(limit {r.deskLimitPct}%)</span>
          </dd>
        </div>
        <div>
          <dt className="text-text-faint">Pays</dt>
          <dd className="font-semibold text-text tabular-nums">{formatInr(r.finalPrice)}</dd>
        </div>
      </dl>
      <p className="text-[11.5px] text-text-muted">Reason: {r.reason}</p>
      <div className="flex gap-2 text-[11.5px]" aria-hidden="true">
        <span className="rounded-[var(--radius-sm)] bg-accent-strong px-3 py-1.5 font-medium text-white">
          Approve
        </span>
        <span className="rounded-[var(--radius-sm)] border border-border-strong px-3 py-1.5 text-text">
          Decline
        </span>
      </div>
    </MockPanel>
  );
}

function CashClose() {
  const c = cashClose;
  const difference = c.counted - c.expected;
  return (
    <MockPanel className="flex flex-col gap-2 text-[11.5px]">
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-text">{c.branch} · yesterday</span>
        <MockTag tone={difference === 0 ? "positive" : "warning"}>
          {difference === 0 ? "Balanced" : `Off by ${formatInr(Math.abs(difference))}`}
        </MockTag>
      </div>
      <dl className="grid grid-cols-2 gap-2 tabular-nums">
        <div>
          <dt className="text-text-faint">Expected</dt>
          <dd className="text-text">{formatInr(c.expected)}</dd>
        </div>
        <div>
          <dt className="text-text-faint">Counted</dt>
          <dd className="text-text">{formatInr(c.counted)}</dd>
        </div>
      </dl>
    </MockPanel>
  );
}

/** Sample product visual shown on a feature card. */
export function FeaturePreview({ kind }: { kind: FeatureVisualKind }) {
  switch (kind) {
    case "branches":
      return <BranchComparison />;
    case "approval":
      return <ApprovalRequest />;
    case "cashClose":
      return <CashClose />;
  }
}
