import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  size?: "page" | "wide";
  className?: string;
  children: ReactNode;
}

const sizeClass = {
  page: "max-w-[var(--container-page)]",
  wide: "max-w-[var(--container-wide)]",
} as const;

export function Container({ size = "page", className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", sizeClass[size], className)}>{children}</div>
  );
}
