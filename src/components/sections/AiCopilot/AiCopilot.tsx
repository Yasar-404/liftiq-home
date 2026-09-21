import { AiChatMock } from "@/components/product/AiChatMock";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copilotCapabilities } from "@/data/copilot";

export function AiCopilot() {
  return (
    <Section
      id="copilot"
      spacing="lg"
      className="relative overflow-hidden"
      containerClassName="flex flex-col gap-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: "radial-gradient(circle,var(--color-accent),transparent 70%)" }}
      />

      <SectionHeading
        eyebrow="AI Copilot"
        title="Your gym has data. LiftIQ makes it useful."
        description="Ask a question in plain language. The Copilot reads your live workspace and answers with the numbers behind it."
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <AiChatMock />
        </Reveal>

        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {copilotCapabilities.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70} className="py-5">
              <h3 className="text-[1.1rem] font-semibold tracking-tight text-text">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
