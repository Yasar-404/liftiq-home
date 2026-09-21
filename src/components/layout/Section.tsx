import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  spacing?: "sm" | "md" | "lg";
  /** Render children without the width-constraining container. */
  bare?: boolean;
  children: ReactNode;
}

const spacingClass = {
  sm: "py-14 sm:py-18",
  md: "py-18 sm:py-24",
  lg: "py-24 sm:py-32",
} as const;

export function Section({
  id,
  className,
  containerClassName,
  spacing = "md",
  bare = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24", spacingClass[spacing], className)}>
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
