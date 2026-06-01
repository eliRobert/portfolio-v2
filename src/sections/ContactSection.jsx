import { SectionHeader } from "@/components/content/SectionHeader"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { contactContent } from "@/data/homepage"
import { site } from "@/data/site"

export function ContactSection() {
  return (
    <Section id="contact" className="pt-16 pb-12 md:pt-20 md:pb-14">
      <Container>
        <SectionHeader
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          lead={contactContent.lead}
        />

        <footer className="mt-12 border-t border-border/40 pt-10 md:mt-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-eyebrow">[Connect]</p>
              <a
                href={`mailto:${site.email}`}
                className="editorial-link mt-3 block text-lg font-medium tracking-tight text-foreground hover:opacity-80"
              >
                {site.email}
              </a>
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link mt-2 block text-sm text-muted-foreground hover:text-foreground"
              >
                {site.linkedInLabel}
              </a>
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm font-medium text-foreground">{site.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {site.role} · {site.location}
              </p>
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                © {new Date().getFullYear()} {site.name}
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  )
}
