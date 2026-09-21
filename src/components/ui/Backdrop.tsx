import { cn } from "@/lib/cn";

/** Decorative hero background: grid, drifting aurora blobs and film grain. */
export function Backdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("grain pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="grid-texture radial-fade absolute inset-0 opacity-80" />
      <span className="aurora aurora--blue animate-drift -top-72 left-1/2 h-[40rem] w-[52rem] -translate-x-1/2" />
      <span className="aurora aurora--violet animate-drift-slow top-[-10rem] -right-40 h-[34rem] w-[34rem]" />
    </div>
  );
}
