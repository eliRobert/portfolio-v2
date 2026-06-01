import { ProjectVisual } from "@/components/content/ProjectVisual"
import { cn } from "@/lib/utils"

function ProjectMeta({ domain, role, index, showIndex = true }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
      {showIndex ? (
        <>
          <span className="tabular-nums text-muted-foreground/65">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-border/80">/</span>
        </>
      ) : null}
      <span>{domain}</span>
      <span className="text-border/80">·</span>
      <span>{role}</span>
    </div>
  )
}

function ProjectTitle({ title, href, large = false }) {
  return (
    <h3
      className={cn(
        "mt-4 font-medium tracking-tight text-foreground",
        large ? "text-2xl md:text-[2rem]" : "text-xl md:text-2xl",
      )}
    >
      <a href={href} className="editorial-link decoration-border/60 group-hover:underline">
        {title}
      </a>
    </h3>
  )
}

function ProjectTags({ tags }) {
  return (
    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
      {tags.slice(0, 3).map((tag) => (
        <span key={tag} className="micro-label">
          {tag}
        </span>
      ))}
    </div>
  )
}

function Outcome({ impact, className }) {
  return (
    <blockquote className={cn("border-l border-primary/25 pl-4", className)}>
      <p className="text-caption text-muted-foreground">Outcome</p>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/88">{impact}</p>
    </blockquote>
  )
}

export function ProjectCard({
  title,
  summary,
  impact,
  tags,
  href,
  domain,
  role,
  visuals,
  presentation,
  index = 0,
  className,
}) {
  const card = presentation?.card ?? "image-led"
  const visual = presentation?.visual ?? "horizontal-sequence"

  if (card === "cinematic") {
    return (
      <article className={cn("group relative", className)} data-cursor="hover">
        <div className="overflow-hidden rounded-xl border border-border/35 bg-card/[0.08]">
          <div className="p-4 pb-5 md:p-6 md:pb-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="annotation-label">Featured Project</p>
              <p className="text-caption tabular-nums text-muted-foreground/60">01 / Selected Work</p>
            </div>
            <ProjectVisual visuals={visuals} layout={visual} />
          </div>

          <div className="grid gap-8 border-t border-border/25 px-6 py-8 md:px-9 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:py-10">
            <div>
              <ProjectMeta domain={domain} role={role} index={index} showIndex={false} />
              <ProjectTitle title={title} href={href} large />
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {summary}
              </p>
              <ProjectTags tags={tags} />
            </div>
            <Outcome impact={impact} className="self-end lg:mb-1" />
          </div>
        </div>
      </article>
    )
  }

  if (card === "text-led") {
    return (
      <article
        className={cn("group relative border-t border-border/30 pt-8 md:pt-10", className)}
        data-cursor="hover"
      >
        <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="flex flex-col lg:py-3">
            <ProjectMeta domain={domain} role={role} index={index} />
            <ProjectTitle title={title} href={href} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>
            <ProjectTags tags={tags} />
            <Outcome impact={impact} className="mt-8" />
          </div>
          <ProjectVisual visuals={visuals} layout={visual} />
        </div>
      </article>
    )
  }

  if (card === "folio") {
    return (
      <article
        className={cn("group relative border-y border-border/30 py-9 md:py-11", className)}
        data-cursor="hover"
      >
        <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div>
            <ProjectMeta domain={domain} role={role} index={index} />
            <ProjectTitle title={title} href={href} />
            <ProjectTags tags={tags} />
          </div>
          <div className="max-w-2xl">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">{summary}</p>
            <Outcome impact={impact} className="mt-6 max-w-xl" />
          </div>
        </div>
        <div className="mt-9 md:mt-11">
          <ProjectVisual visuals={visuals} layout={visual} />
        </div>
      </article>
    )
  }

  if (card === "dossier") {
    return (
      <article className={cn("group relative lg:ml-auto lg:w-[92%]", className)} data-cursor="hover">
        <div className="grid overflow-hidden rounded-xl border border-border/25 bg-card/[0.06] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="order-2 flex flex-col justify-center border-t border-border/25 p-6 md:p-8 lg:order-1 lg:border-t-0 lg:border-r">
            <ProjectMeta domain={domain} role={role} index={index} />
            <ProjectTitle title={title} href={href} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>
            <ProjectTags tags={tags} />
            <Outcome impact={impact} className="mt-7" />
          </div>
          <div className="order-1 p-4 md:p-5 lg:order-2">
            <ProjectVisual visuals={visuals} layout={visual} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className={cn("group relative", className)} data-cursor="hover">
      <div className="grid gap-8 rounded-xl border border-border/25 bg-card/[0.06] p-4 md:p-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
        <ProjectVisual visuals={visuals} layout={visual} />
        <div className="p-2 pb-3 md:p-4">
          <ProjectMeta domain={domain} role={role} index={index} />
          <ProjectTitle title={title} href={href} />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>
          <ProjectTags tags={tags} />
          <Outcome impact={impact} className="mt-7" />
        </div>
      </div>
    </article>
  )
}
