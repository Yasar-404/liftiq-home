import { Sheen } from "@/components/ui/Sheen";
import type { Feature } from "@/types";

type FeatureCardProps = Omit<Feature, "span">;

export function FeatureCard({ title, description, icon: Icon, accent }: FeatureCardProps) {
  return (
    <article className="card card-interactive group relative flex h-full flex-col gap-4 overflow-hidden p-6 sm:p-7">
      <Sheen />
      {accent && (
        <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.28),transparent_70%)] opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      )}
      <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:border-[rgba(124,92,255,0.45)] group-hover:bg-[linear-gradient(160deg,rgba(124,92,255,0.35),rgba(47,128,255,0.15))] group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div className="relative flex flex-col gap-1.5">
        <h3 className="text-[1.15rem] font-semibold tracking-tight text-text">{title}</h3>
        <p className="max-w-md text-sm leading-relaxed text-text-muted transition-transform duration-300 group-hover:translate-x-0.5">
          {description}
        </p>
      </div>
    </article>
  );
}
