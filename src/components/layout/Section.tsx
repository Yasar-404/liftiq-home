import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: "page" | "wide" | "prose";
  /** Vertical rhythm. */
  spacing?: "sm" | "md" | "lg";
  bare?: boolean;
  children: ReactNode;
}

const spacingMap = {
  sm: "py-14 sm:py-18",
  md: "py-18 sm:py-24",
  lg: "py-24 sm:py-32",
} as const;

export function Section({
  id,
  className,
  containerClassName,
  size = "page",
  spacing = "md",
  bare = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24", spacingMap[spacing], className)}>
      {bare ? children : (
        <Container size={size} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
