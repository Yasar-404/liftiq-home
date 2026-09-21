"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fits an SVG's viewBox to its measured content plus `padding`. Estimating the
 * box by hand drifts with font metrics, which leaves uneven margins on some
 * devices. Re-measures after fonts load and on resize.
 */
export function useFittedViewBox(padding: number, fallback: string) {
  const ref = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState(fallback);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    let cancelled = false;

    const fit = () => {
      if (cancelled) return;
      const box = svg.getBBox();
      if (box.width > 0 && box.height > 0) {
        setViewBox(
          `${box.x - padding} ${box.y - padding} ${box.width + padding * 2} ${box.height + padding * 2}`,
        );
      }
    };

    fit();
    const settleTimer = window.setTimeout(fit, 250);
    window.addEventListener("resize", fit);
    document.fonts?.ready?.then(fit).catch(() => {});

    return () => {
      cancelled = true;
      window.clearTimeout(settleTimer);
      window.removeEventListener("resize", fit);
    };
  }, [padding]);

  return { ref, viewBox };
}
