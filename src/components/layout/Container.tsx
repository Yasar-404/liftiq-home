import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  as?: ElementType;
  size?: "page" | "wide" | "prose";
  className?: string;
  children: ReactNode;
}

const sizeMap = {
  page: "max-w-[var(--container-page)]",
  wide: "max-w-[var(--container-wide)]",
  prose: "max-w-[var(--container-prose)]",
} as const;

export function Container({
  as: Tag = "div",
  size = "page",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8", sizeMap[size], className)}>
      {children}
    </Tag>
  );
}
