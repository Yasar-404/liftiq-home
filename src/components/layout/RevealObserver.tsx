"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".reveal:not(.is-visible), .lq-words:not(.is-visible)";

/**
 * One IntersectionObserver for every scroll reveal on the page (Reveal and
 * AnimatedText), instead of a hook per element. Marks each element
 * `is-visible` once it nears the viewport. A throttled scroll/resize check
 * backs the observer up, so content still appears where observer callbacks
 * are delayed or dropped, and everything is revealed before printing. Runs
 * again after each client-side navigation, for the new page's elements.
 * Renders nothing.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = new Set(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (pending.size === 0) return;

    const show = (el: HTMLElement) => {
      el.classList.add("is-visible");
      pending.delete(el);
      observer?.unobserve(el);
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) show(entry.target as HTMLElement);
              }
            },
            { rootMargin: "0px 0px -6% 0px" },
          )
        : null;

    const check = () => {
      const bottom = window.innerHeight * 0.94;
      for (const el of pending) {
        if (el.getBoundingClientRect().top < bottom) show(el);
      }
      if (pending.size === 0) cleanup();
    };

    let timer: number | undefined;
    const onScroll = () => {
      if (timer === undefined) {
        timer = window.setTimeout(() => {
          timer = undefined;
          check();
        }, 120);
      }
    };
    const revealAll = () => pending.forEach(show);

    function cleanup() {
      observer?.disconnect();
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("beforeprint", revealAll);
    }

    pending.forEach((el) => observer?.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("beforeprint", revealAll);
    check();

    return cleanup;
  }, [pathname]);

  return null;
}
