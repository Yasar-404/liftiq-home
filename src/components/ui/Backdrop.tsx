import { cn } from "@/lib/cn";

/**
 * Atmospheric background layer: fine grid, drifting aurora blobs and film grain.
 * Purely decorative, pointer-events none.
 */
export function Backdrop({
  className,
  glow = "top",
}: {
  className?: string;
  glow?: "top" | "center" | "none";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "grain pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="grid-texture radial-fade absolute inset-0 opacity-80" />

      {glow !== "none" && (
        <>
          <span
            className={cn(
              "aurora aurora--blue animate-drift h-[40rem] w-[52rem]",
              glow === "top"
                ? "left-1/2 -top-72 -translate-x-1/2"
                : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            )}
          />
          <span className="aurora aurora--violet animate-drift-slow -right-40 top-[-10rem] h-[34rem] w-[34rem] opacity-30" />
        </>
      )}
    </div>
  );
}
