import { Sparkles } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Badge from "../ui/Badge.jsx"
import { skillGroups, aiTools } from "../../data/skills.js"

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        label="02 — Skills"
        title="Competencies, grouped by what they let me build."
        description="Tools are listed where I have used them on a project or in a competition — not where I have only read the docs."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div key={group.id} className="flex flex-col gap-4 bg-background p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="-mt-2 text-[13px] leading-relaxed text-muted-foreground">{group.note}</p>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* AI tools subsection — the differentiator for AI-focused roles */}
      <div className="mt-14 rounded-lg border border-border bg-muted/40 p-6 sm:p-8">
        <div className="flex flex-col gap-2 border-b border-border pb-6">
          <span className="inline-flex items-center gap-2 label-mono">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            AI tools I use
          </span>
          <h3 className="text-pretty text-xl font-semibold tracking-tight sm:text-2xl">
            The stack I reach for when the problem is an AI problem.
          </h3>
          <p className="max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
            Each of these has been used inside a shipped project, an internship deliverable or a competition
            submission.
          </p>
        </div>

        <ul className="grid gap-x-8 sm:grid-cols-2">
          {aiTools.map((tool) => (
            <li
              key={tool.name}
              className="flex flex-col gap-1 border-b border-border py-4 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
            >
              <span className="font-mono text-[13px] font-medium tracking-tight text-foreground">{tool.name}</span>
              <span className="text-[13px] leading-relaxed text-muted-foreground">{tool.use}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
