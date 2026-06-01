import { AboutVisual } from "@/components/content/AboutVisual"
import { SectionHeader } from "@/components/content/SectionHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { aboutContent } from "@/data/homepage"
import { site } from "@/data/site"

export function AboutSection() {
  return (
    <Section id="about" className="tone-warm pt-16 md:pt-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader eyebrow={aboutContent.eyebrow} title={aboutContent.title} />

            <div className="mt-10 space-y-6 lg:max-w-md">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <div className="border-t border-border/30 pt-6">
                <p className="text-caption">{site.name}</p>
                <p className="mt-1 text-caption text-muted-foreground">
                  {site.role} · {site.location}
                </p>
              </div>
            </div>
          </div>

          <AboutVisual />
        </div>
      </Container>
    </Section>
  )
}
