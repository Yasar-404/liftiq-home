import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EcosystemDiagram } from "./EcosystemDiagram";

export function Ecosystem() {
  return (
    <Section id="ecosystem" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Platform ecosystem"
        title="Everything in the gym, connected through one core."
        description="Each part of the operation feeds the same system, so the whole business stays in sync."
        align="center"
      />
      <EcosystemDiagram />
    </Section>
  );
}
