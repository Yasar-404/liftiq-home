const groupedInr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

/**
 * Rupees the way the LiftIQ app shows them: full Indian grouping below a lakh,
 * compact lakh and crore from a lakh up (₹9,400 · ₹2.5L · ₹1.2Cr).
 */
export function formatInr(rupees: number): string {
  const sign = rupees < 0 ? "−" : "";
  const value = Math.abs(rupees);
  if (value >= 1_00_00_000) return `${sign}₹${trim(value / 1_00_00_000)}Cr`;
  if (value >= 1_00_000) return `${sign}₹${trim(value / 1_00_000)}L`;
  return `${sign}₹${groupedInr.format(value)}`;
}

/** One decimal place, without a trailing ".0". */
function trim(n: number) {
  return (Math.round(n * 10) / 10).toString();
}

/** Whole-number percentage change from `previous` to `current`. */
export function percentChange(current: number, previous: number): number {
  if (previous === 0) return 0;
  return Math.round(((current - previous) / previous) * 100);
}

/** "▲ 11%" or "▼ 4%". */
export function formatChange(pct: number): string {
  return `${pct >= 0 ? "▲" : "▼"} ${Math.abs(pct)}%`;
}

export function plural(count: number, one: string, many = `${one}s`) {
  return `${count} ${count === 1 ? one : many}`;
}

export function sum(values: readonly number[]) {
  return values.reduce((total, v) => total + v, 0);
}
