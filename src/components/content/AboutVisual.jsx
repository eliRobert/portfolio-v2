import { EditorialPin } from "@/components/content/EditorialPin"
import { WorkVisual } from "@/components/content/WorkVisual"
import { editorialVisuals } from "@/data/homepage"

const disciplines = [
  { label: "Product Design", pin: "01" },
  { label: "Graphic & Illustration", pin: "02" },
  { label: "UX/UI Systems", pin: "03" },
  { label: "AI-assisted exploration", pin: "04" },
]

export function AboutVisual() {
  return (
    <div className="about-visual relative">
      <div className="about-visual-stack">
        <div className="about-visual-item about-visual-back">
          <WorkVisual
            label="Visual references"
            aspect="16/10"
            caption="Composition studies informing interface hierarchy."
            figure="Fig. A"
            imageSrc={editorialVisuals.about.references.imageSrc}
            imageAlt={editorialVisuals.about.references.imageAlt}
          />
        </div>

        <div className="about-visual-item about-visual-mid">
          <WorkVisual
            label="Early wireframe"
            aspect="4/3"
            imageSrc={editorialVisuals.about.wireframe.imageSrc}
            imageAlt={editorialVisuals.about.wireframe.imageAlt}
          />
          <EditorialPin className="absolute -left-2 top-4 z-10 md:-left-4">
            Process
          </EditorialPin>
        </div>

        <div className="about-visual-item about-visual-front">
          <WorkVisual
            label="Interface composition"
            aspect="4/5"
            caption="Operational UX shaped through layout, type, and flow."
            figure="Fig. B"
            imageSrc={editorialVisuals.about.composition.imageSrc}
            imageAlt={editorialVisuals.about.composition.imageAlt}
          />
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border/30 pt-6 md:grid-cols-2">
        {disciplines.map((item) => (
          <li key={item.label} className="flex gap-2">
            <span className="text-caption tabular-nums text-muted-foreground/60">{item.pin}</span>
            <span className="text-caption text-muted-foreground">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
