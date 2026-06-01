import { EditorialPin } from "@/components/content/EditorialPin"
import { WorkVisual } from "@/components/content/WorkVisual"
import { editorialVisuals } from "@/data/homepage"
import { site } from "@/data/site"

export function HeroComposition() {
  return (
    <div className="hero-composition relative w-full max-w-[28rem] justify-self-start lg:justify-self-end">
      <div className="hero-composition-grid">
        <div className="hero-composition-portrait">
          <WorkVisual
            label={site.name}
            aspect="3/4"
            caption="UI/UX design · graphic craft · product ownership"
            imageSrc={editorialVisuals.hero.portrait.imageSrc}
            imageAlt={editorialVisuals.hero.portrait.imageAlt}
            loading="eager"
          />
        </div>
      </div>

      <EditorialPin align="right" className="mt-5">
        Design · Ownership · Product
      </EditorialPin>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-border/30 pt-5">
        {["UI/UX Design", "Graphic Design", "Product Ownership", "Product Management"].map(
          (discipline) => (
            <span key={discipline} className="micro-label">
              {discipline}
            </span>
          ),
        )}
      </div>
    </div>
  )
}
