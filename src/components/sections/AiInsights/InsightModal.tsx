"use client";

import { useRef } from "react";
import { Close } from "@/components/ui/icons";
import type { DetailGroup } from "@/types";

/**
 * "How insights work": a native modal dialog, so the browser supplies focus
 * trapping, Escape to close and the inert page behind it. The header stays put
 * while a long body scrolls. Clicking the backdrop closes it.
 */
export function InsightModal({ groups }: { groups: DetailGroup[] }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-haspopup="dialog"
        className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-border-strong px-5 text-sm font-medium text-text transition-colors duration-[var(--duration-fast)] hover:border-accent/60 hover:bg-accent-soft"
      >
        How each insight is counted
      </button>

      <dialog
        ref={ref}
        aria-labelledby="insight-modal-title"
        onClick={(e) => {
          // A click on the dialog element itself (not its content) is a backdrop click.
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="insight-dialog m-auto max-h-[min(85vh,40rem)] w-[calc(100%-2rem)] max-w-[34rem] overflow-hidden rounded-[var(--radius-lg)] border border-accent/30 bg-surface-elevated p-0 text-text shadow-[var(--shadow-lg),0_0_0_1px_var(--color-accent-soft)] backdrop:bg-black/60 open:flex open:flex-col"
      >
        <header className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3.5">
          <h2 id="insight-modal-title" className="text-[0.95rem] font-semibold tracking-tight">
            How insights work
          </h2>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center rounded-full text-text-muted transition-colors duration-[var(--duration-fast)] hover:bg-white/[0.06] hover:text-text"
          >
            <Close className="h-4 w-4" />
          </button>
        </header>

        <div className="overflow-y-auto overscroll-contain px-5 py-4">
          {groups.map((group, i) => (
            <section key={group.title} className={i > 0 ? "mt-4 border-t border-border pt-4" : ""}>
              <h3 className="text-[11px] font-medium tracking-[0.12em] text-accent-text uppercase">
                {group.title}
              </h3>
              <dl className="mt-2.5 flex flex-col gap-2">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <dt className="text-[0.9rem] font-semibold text-text">{item.title}</dt>
                    <dd className="text-[0.8125rem] leading-snug text-text-muted">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </dialog>
    </>
  );
}
