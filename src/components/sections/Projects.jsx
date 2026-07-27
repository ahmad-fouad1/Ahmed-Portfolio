import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Card from "../ui/Card.jsx"
import Badge from "../ui/Badge.jsx"
import { GithubIcon } from "../ui/BrandIcons.jsx"
import { projects, categories } from "../../data/projects.js"
import { cn } from "../ui/Button.jsx"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  const countFor = (id) => (id === "all" ? projects.length : projects.filter((p) => p.category === id).length)

  return (
    <section id="projects" className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        label="03 — Projects"
        title="Selected work."
        description="Internship deliverables, competition submissions and academic systems. Filter by the kind of problem they solve."
      />

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {categories.map((category) => {
          const isActive = filter === category.id
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(category.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded border px-3 py-1.5 text-[13px] transition-colors duration-200",
                isActive
                  ? "border-foreground bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {category.label}
              <span className={cn("font-mono text-[11px]", isActive ? "opacity-70" : "opacity-60")}>
                {countFor(category.id)}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {visible.map((project) => (
          <Card
            as="article"
            key={project.id}
            className="group flex flex-col overflow-hidden hover:border-foreground/30"
          >
            {/* Screenshots are optional: set `image` in src/data/projects.js to render one here. */}
            {project.image ? (
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} interface`}
                className="aspect-[16/9] w-full border-b border-border object-cover"
                loading="lazy"
              />
            ) : null}

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-pretty text-base font-semibold leading-snug tracking-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] tracking-tight text-muted-foreground">
                    {project.context}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">{project.year}</span>
              </div>

              <p className="text-[13px] leading-relaxed text-muted-foreground">{project.description}</p>

              <ul className="flex flex-col gap-1.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge>{tag}</Badge>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 border-t border-border pt-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 hover:text-accent"
                  >
                    Live demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Repository
                  </a>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">No projects in this category yet.</p>
      ) : null}
    </section>
  )
}
