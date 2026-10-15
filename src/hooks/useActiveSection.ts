"use client";

import { useEffect, useState } from "react";

/**
 * The id of the section the reader is in: the last listed section whose top has
 * passed `line` (a fraction of the viewport height). Scroll-based, rAF-throttled
 * and passive, so it costs a handful of rect reads per frame while scrolling and
 * nothing otherwise. Returns null above the first section.
 */
export function useActiveSection(ids: readonly string[], line = 0.4): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const threshold = window.innerHeight * line;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [ids, line]);

  return active;
}
