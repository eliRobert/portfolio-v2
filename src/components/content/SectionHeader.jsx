import { cn } from "@/lib/utils"

export function SectionHeader({ eyebrow, title, lead, align = "left", className }) {
  const isCenter = align === "center"

  return (
    <header className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-eyebrow">[{eyebrow}]</p>
      ) : null}
      <h2 className="mt-5 text-balance text-title">{title}</h2>
      {lead ? <p className="mt-6 text-lead">{lead}</p> : null}
    </header>
  )
}
