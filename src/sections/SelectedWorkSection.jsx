import { SectionHeader } from "@/components/content/SectionHeader"
import { ProjectCard } from "@/components/content/ProjectCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { selectedWork } from "@/data/homepage"

export function SelectedWorkSection() {
  const featured = selectedWork.find((p) => p.featured)
  const secondary = selectedWork.filter((p) => !p.featured)

  return (
    <Section id="work" className="tone-shift bg-muted/[0.04] pt-14 pb-24 md:pt-20 md:pb-28">
      <Container>
        <SectionHeader
          eyebrow="Selected Work"
          title="Curated product work across systems, interfaces, and operational design"
          lead="Each project presented as interface composition, workflow logic, and visual narrative—not generic case documentation."
        />

        <div className="mt-14 space-y-16 md:mt-16 md:space-y-20">
          {featured ? <ProjectCard {...featured} index={0} /> : null}

          {secondary.length > 0 ? (
            <div>
              <p className="annotation-label border-t border-border/30 pt-10">
                Additional Projects
              </p>
              {secondary.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index + 1}
                  className={
                    index === 0
                      ? "mt-10 md:mt-14"
                      : index === 1
                        ? "mt-16 md:mt-24"
                        : index === 2
                          ? "mt-14 md:mt-20"
                          : "mt-16 md:mt-28"
                  }
                />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  )
}
