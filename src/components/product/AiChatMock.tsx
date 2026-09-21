"use client";

import { motion } from "motion/react";
import { Sparkle } from "@/components/ui/icons";
import { copilotDemo } from "@/data/copilot";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTypedReply } from "@/hooks/useTypedReply";
import { easeSpring } from "@/lib/motion";

const { question, answer, signals } = copilotDemo;

export function AiChatMock() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const reducedMotion = useReducedMotion();
  const { typed, phase } = useTypedReply(answer, inView, reducedMotion);

  const showSignals = phase === "done";

  return (
    <div ref={ref} className="surface-card w-full max-w-xl overflow-hidden p-5 sm:p-6">
      <div className="flex items-center gap-2 border-b border-border pb-4">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-soft text-accent">
          <Sparkle className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-text">LiftIQ Copilot</span>
        <span className="ml-auto text-[11px] text-text-faint">Demo workspace</span>
      </div>

      <div className="flex flex-col gap-4 pt-5">
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-surface-elevated px-3.5 py-2.5 text-[13px] text-text">
            {question}
          </p>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-bg-subtle px-3.5 py-2.5 text-[13px] leading-relaxed text-text-muted">
            {phase === "thinking" && !typed ? (
              <span className="inline-flex gap-1 py-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-text-faint"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </span>
            ) : (
              <span>
                {typed}
                {phase === "answering" && (
                  <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-accent align-middle" />
                )}
              </span>
            )}
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: showSignals ? 1 : 0, height: showSignals ? "auto" : 0 }}
          transition={{ duration: 0.4, ease: easeSpring }}
          className="grid grid-cols-2 gap-2 overflow-hidden"
        >
          {signals.map((signal, i) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 8 }}
              animate={showSignals ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-lg border border-border bg-surface/50 p-2.5"
            >
              <div className="text-[10px] text-text-faint">{signal.label}</div>
              <div className="text-[13px] font-semibold text-text">{signal.value}</div>
              <div className="text-[10px] text-accent-dim">{signal.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
