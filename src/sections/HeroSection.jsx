import { Button } from "@/components/ui/button"
import { HeroComposition } from "@/components/content/HeroComposition"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { heroContent } from "@/data/homepage"
import { site } from "@/data/site"

export function HeroSection() {
  return (
    <Section id="top" className="tone-warm relative flex min-h-[86vh] items-center overflow-hidden pt-18 md:pt-22">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-18">
          <div className="max-w-[38rem] lg:pt-4">
            <p className="text-eyebrow">[{heroContent.eyebrow}]</p>
            <h1 className="mt-7 text-balance text-[2.35rem] font-medium leading-[1.06] tracking-[-0.015em] md:text-[3rem] lg:text-[3.18rem] xl:text-[3.35rem]">
              {heroContent.title}
            </h1>
            <p className="mt-7 max-w-[34rem] text-lead">{heroContent.lead}</p>
            <p className="mt-6 max-w-lg text-caption leading-relaxed">{site.tagline}</p>
            <Button asChild variant="outline" className="mt-10">
              <a href={heroContent.ctaHref}>{heroContent.ctaLabel}</a>
            </Button>
          </div>

          <HeroComposition />
        </div>
      </Container>
    </Section>
  )
}
