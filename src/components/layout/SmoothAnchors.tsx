"use client";

import { useEffect } from "react";

/** How long smooth scrolling stays enabled after a click on an in-page link. */
const SMOOTH_WINDOW_MS = 2500;

/**
 * Makes in-page link clicks scroll smoothly, and nothing else.
 *
 * Navigation itself is native: links are plain `href="/#section"` anchors, so
 * the browser updates the URL hash, handles back and forward, and jumps
 * straight to the section on a direct load or refresh, with or without
 * JavaScript. All this does is switch on `scroll-behavior: smooth` (see
 * `.smooth-anchor` in styles/motion.css, which is off for reduced motion)
 * for a moment after a click on a link to this page, so that only clicks
 * animate and a visitor opening \`/#ai\` is not swept down the whole page.
 * It never calls preventDefault. Renders nothing.
 */
export function SmoothAnchors() {
  useEffect(() => {
    const root = document.documentElement;
    let timer: number | undefined;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!link || !link.hash) return;
      if (link.origin !== window.location.origin || link.pathname !== window.location.pathname)
        return;

      root.classList.add("smooth-anchor");
      window.clearTimeout(timer);
      timer = window.setTimeout(() => root.classList.remove("smooth-anchor"), SMOOTH_WINDOW_MS);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(timer);
      root.classList.remove("smooth-anchor");
    };
  }, []);

  return null;
}
