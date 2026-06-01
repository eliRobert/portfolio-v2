import { WorkVisual } from "@/components/content/WorkVisual"
import { cn } from "@/lib/utils"

function Visual({ item, aspect, className }) {
  return (
    <WorkVisual
      label={item.label}
      caption={item.caption}
      figure={item.figure}
      aspect={aspect ?? item.aspect ?? "16/10"}
      imageSrc={item.imageSrc}
      imageAlt={item.imageAlt}
      imagePosition={item.imagePosition}
      className={className}
    />
  )
}

export function ProjectVisual({ visuals, layout = "horizontal-sequence" }) {
  if (!visuals) return null

  const { hero, supporting = [], annotation } = visuals

  if (layout === "cinematic") {
    return (
      <div className="project-visual-featured">
        <Visual item={hero} className="w-full" />

        {supporting.length > 0 ? (
          <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-[1.14fr_0.88fr_0.98fr]">
            {supporting.map((item, index) => (
              <Visual
                key={item.label ?? index}
                item={item}
                aspect="4/3"
                className={index === 0 ? "md:-translate-y-3" : undefined}
              />
            ))}
          </div>
        ) : null}

        {annotation ? (
          <p className="annotation-label mt-4">{annotation}</p>
        ) : null}
      </div>
    )
  }

  if (layout === "portrait-duet") {
    return (
      <div className="grid items-end gap-3 sm:grid-cols-[0.78fr_1.22fr]">
        <Visual item={hero} />
        <div className="flex flex-col gap-3 pb-3 sm:pb-8">
          {supporting.map((item, index) => (
            <Visual
              key={item.label ?? index}
              item={item}
              className={index === 1 ? "sm:ml-9" : undefined}
            />
          ))}
        </div>
      </div>
    )
  }

  if (layout === "folio") {
    return (
      <div>
        <Visual item={hero} />
        <div className="mt-3 grid gap-3 sm:grid-cols-[0.86fr_1.14fr] sm:pl-[14%]">
          {supporting.map((item, index) => (
            <Visual key={item.label ?? index} item={item} />
          ))}
        </div>
      </div>
    )
  }

  if (layout === "dossier") {
    return (
      <div className="grid gap-3 sm:grid-cols-[1.16fr_0.84fr]">
        <Visual item={hero} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          {supporting.map((item, index) => (
            <Visual key={item.label ?? index} item={item} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Visual item={hero} />
      <div className={cn("mt-3 grid gap-3 sm:grid-cols-2", supporting.length > 0 && "md:ml-[22%]")}>
        {supporting.map((item, index) => (
          <Visual key={item.label ?? index} item={item} />
        ))}
      </div>
    </div>
  )
}
