import { cn } from "@/lib/utils"

export function EditorialCaption({ figure, children, className }) {
  return (
    <figcaption className={cn("flex gap-3 pt-3", className)}>
      {figure ? (
        <span className="text-caption shrink-0 tabular-nums text-muted-foreground/70">{figure}</span>
      ) : null}
      <span className="text-caption text-muted-foreground">{children}</span>
    </figcaption>
  )
}
