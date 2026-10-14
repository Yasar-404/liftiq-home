import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { ArrowRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { primaryPages } from "@/data/pages";

/** Links to the other dedicated pages, shown near the end of each one. */
export function ExplorePages({ current }: { current: string }) {
  const others = primaryPages.filter((page) => page.path !== current);

  return (
    <Section spacing="md" containerClassName="flex flex-col gap-6">
      <h2 className="text-[0.8rem] font-medium tracking-[0.14em] text-text-faint uppercase">
        Keep exploring
      </h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {others.map((page, i) => (
          <Reveal as="li" key={page.path} delay={i * 60}>
            <Link
              href={page.path}
              className="card group relative flex h-full flex-col gap-2 p-6 transition-shadow duration-[var(--duration-base)] hover:shadow-[var(--shadow-glow)]"
            >
              <span className="flex items-center justify-between text-[1.05rem] font-semibold text-text">
                {page.label}
                <ArrowRight className="h-4 w-4 text-text-faint transition-[transform,color] duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:text-accent-text" />
              </span>
              <span className="text-[0.9rem] leading-relaxed text-text-muted">
                {page.description}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
