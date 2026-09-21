"use client";

import { useEffect, useState } from "react";

export type ReplyPhase = "idle" | "thinking" | "answering" | "done";

const THINKING_MS = 900;
const CHARS_PER_TICK = 2;
const TICK_MS = 18;

/**
 * Simulates a streamed reply: a short "thinking" pause, then the text typed
 * out. Starts when `active` becomes true; with `instant` the full text is
 * shown immediately.
 */
export function useTypedReply(text: string, active: boolean, instant: boolean) {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<ReplyPhase>("idle");

  useEffect(() => {
    if (!active) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    later(() => {
      if (instant) {
        setTyped(text);
        setPhase("done");
        return;
      }

      setPhase("thinking");
      later(() => {
        setPhase("answering");
        let length = 0;
        const tick = () => {
          length += CHARS_PER_TICK;
          setTyped(text.slice(0, length));
          if (length < text.length) later(tick, TICK_MS);
          else setPhase("done");
        };
        tick();
      }, THINKING_MS);
    }, 0);

    return () => timers.forEach(clearTimeout);
  }, [active, instant, text]);

  return { typed, phase };
}
