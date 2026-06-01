import { WorkVisual } from "@/components/content/WorkVisual"
import { SectionHeader } from "@/components/content/SectionHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { editorialVisuals, processContent } from "@/data/homepage"

export function ProcessSection() {
  return (
    <Section id="process" className="pt-20 md:pt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:items-start">
          <SectionHeader
            eyebrow={processContent.eyebrow}
            title={processContent.title}
            lead={processContent.lead}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <WorkVisual
              label="Early exploration"
              aspect="4/3"
              caption="Sketch and wireframe framing before interface direction."
              figure="P.1"
              imageSrc={editorialVisuals.process.exploration.imageSrc}
              imageAlt={editorialVisuals.process.exploration.imageAlt}
            />
            <WorkVisual
              label="Workflow mapping"
              aspect="4/3"
              caption="Operational paths defined before visual design."
              figure="P.2"
              imageSrc={editorialVisuals.process.workflow.imageSrc}
              imageAlt={editorialVisuals.process.workflow.imageAlt}
            />
          </div>
        </div>

        <ol className="mt-14 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {processContent.steps.map((step) => (
            <li key={step.title} className="border-l border-primary/20 pl-5">
              <h3 className="text-base font-medium tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
