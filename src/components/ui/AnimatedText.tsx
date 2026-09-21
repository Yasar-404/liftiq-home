"use client";

import { Fragment, useEffect, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface AnimatedTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms before the first word starts */
  delay?: number;
  /** ms between words */
  stagger?: number;
  /** words (case-insensitive, punctuation ignored) to style differently */
  emphasize?: string[];
  emphasisClassName?: string;
}

const norm = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Word-by-word heading reveal. Styles live in styles/motion.css and only apply
 * once the `.js` flag is set, so the text is always visible without scripting.
 * A timer reveals the text regardless if the observer never fires.
 */
export function AnimatedText({
  children,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 42,
  emphasize,
  emphasisClassName,
}: AnimatedTextProps) {
  const { ref, inView } = useInViewOnce<HTMLElement>();
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const show = inView || fallback;

  if (typeof children !== "string") {
    return (
      <Tag ref={ref} className={cn("lq-reveal-block", show && "is-visible", className)}>
        {children}
      </Tag>
    );
  }

  const emphasisSet = new Set((emphasize ?? []).map(norm));
  const words = children.split(" ");

  return (
    <Tag ref={ref} className={cn("lq-words", show && "is-visible", className)}>
      {words.map((word, i) => {
        const isEmphasis = emphasisSet.has(norm(word));
        return (
          <Fragment key={`${word}-${i}`}>
            {i > 0 && " "}
            <span
              className="lq-word"
              style={{ "--word-delay": `${delay + i * stagger}ms` } as CSSProperties}
            >
              <span className={cn("lq-word-inner", isEmphasis && emphasisClassName)}>{word}</span>
            </span>
          </Fragment>
        );
      })}
    </Tag>
  );
}
