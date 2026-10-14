import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      {eyebrow && (
        <Reveal as="p" className="text-eyebrow">
          {eyebrow}
        </Reveal>
      )}

      <AnimatedText
        as="h2"
        className={cn("text-h2 max-w-3xl text-balance text-text", centered && "mx-auto")}
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
