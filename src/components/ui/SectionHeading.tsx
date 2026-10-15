import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Position in the page's story, shown beside the eyebrow ("01 / Product"). */
  index?: number;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      {eyebrow && (
        <Reveal as="p" variant="fade" className="text-eyebrow flex items-center gap-2.5">
          {index !== undefined && (
            <span className="text-text-faint tabular-nums" aria-hidden="true">
              {String(index).padStart(2, "0")}
              <span className="mx-2 inline-block h-px w-5 bg-border-strong align-middle" />
            </span>
          )}
          {eyebrow}
        </Reveal>
      )}

      <AnimatedText
        as="h2"
        className={cn("text-h2 max-w-3xl text-balance text-text", centered && "mx-auto")}
        wordClassName="text-sheen"
      >
        {title}
      </AnimatedText>

      {description && (
        <Reveal
          as="p"
          delay={150}
          className={cn("text-lead max-w-2xl text-pretty", centered && "mx-auto")}
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
