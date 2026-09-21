import { cn } from "@/lib/cn";

interface AuroraProps {
  variant: "contact" | "footer";
  dots?: boolean;
  className?: string;
}

/** Decorative background: aurora blobs, optional dot field and film grain. */
export function Aurora({ variant, dots = false, className }: AuroraProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("grain pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      {dots && <div className="bg-dots absolute inset-0 opacity-70" />}

      {variant === "contact" && (
        <>
          <span className="aurora aurora--violet animate-drift bottom-[-25%] left-[-12%] h-[36rem] w-[36rem]" />
          <span className="aurora aurora--blue animate-drift-slow top-[-20%] right-[-10%] h-[34rem] w-[34rem]" />
        </>
      )}

      {variant === "footer" && (
        <span className="aurora aurora--accent top-[-60%] left-1/2 h-[30rem] w-[72rem] -translate-x-1/2" />
      )}
    </div>
  );
}
