import { Fragment } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface AnimatedTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms before the first word starts */
  delay?: number;
  /** ms between words */
  stagger?: number;
}

/**
 * Word-by-word heading reveal, triggered by the RevealObserver in the root
 * layout. Styles live in styles/motion.css and only apply once the `.js` flag
 * is set, so the text is always visible without scripting. Non-string
 * children render as-is.
 */
export function AnimatedText({
  children,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 36,
}: AnimatedTextProps) {
  if (typeof children !== "string") {
    return <Tag className={className}>{children}</Tag>;
  }

  const words = children.split(" ");

  return (
    <Tag className={cn("lq-words", className)}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 && " "}
          <span
            className="lq-word"
            style={{ "--word-delay": `${delay + i * stagger}ms` } as CSSProperties}
          >
            <span className="lq-word-inner">{word}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
