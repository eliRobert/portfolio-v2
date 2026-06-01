import { EditorialCaption } from "@/components/content/EditorialCaption"
import { cn } from "@/lib/utils"

export function WorkVisual({
  label,
  caption,
  figure,
  className,
  aspect = "16/10",
  imageSrc,
  imageAlt = "",
  imagePosition = "object-center",
  loading = "lazy",
}) {
  const aspectClass =
    aspect === "4/5"
      ? "aspect-[4/5]"
      : aspect === "4/3"
        ? "aspect-[4/3]"
        : aspect === "3/4"
          ? "aspect-[3/4]"
          : aspect === "16/9"
            ? "aspect-[16/9]"
            : "aspect-[16/10]"

  return (
    <figure className={cn("work-visual group/figure", className)}>
      <div className={cn("figure-frame", aspectClass)}>
        <img
          src={imageSrc}
          alt={imageAlt || label || "Project visual"}
          loading={loading}
          decoding="async"
          className={cn("h-full w-full object-cover", imagePosition)}
        />
        {label ? (
          <span className="figure-label">{label}</span>
        ) : null}
      </div>
      {caption ? <EditorialCaption figure={figure}>{caption}</EditorialCaption> : null}
    </figure>
  )
}
