import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { AnimatedText } from "./AnimatedText";
import { ArrowRight } from "./icons";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** A link to the page that covers this section in depth. */
  link?: { href: string; label: string };
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
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

      {link && (
        <Reveal delay={200}>
          <Link
            href={link.href}
            className="group inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-accent-text transition-colors duration-[var(--duration-fast)] hover:text-text"
          >
            {link.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      )}
    </div>
  );
}
