"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element is at (or near) the viewport. Uses an
 * IntersectionObserver plus a scroll/resize rect-check fallback, so content
 * is revealed reliably even in environments where observer callbacks are
 * delayed or dropped. Content can never stay permanently hidden.
 */
export function useInViewOnce<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "0px 0px 20% 0px",
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    let done = false;

    const reveal = () => {
      if (done) return;
      done = true;
      cleanup();
      setInView(true);
    };

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 1.15 && r.bottom > vh * -0.15) reveal();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { rootMargin, threshold: 0.01 },
    );

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }

    observer.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();

    return cleanup;
  }, [inView, rootMargin]);

  return { ref, inView };
}
