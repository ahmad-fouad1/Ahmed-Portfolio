import { Award, Briefcase, GraduationCap } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Badge from "../ui/Badge.jsx"
import Card from "../ui/Card.jsx"
import { experience, education, certifications } from "../../data/experience.js"

function TimelineItem({ item, isLast }) {
  return (
    <li className="relative pl-8 sm:pl-10">
      {/* connector */}
      {!isLast ? <span className="absolute left-[5px] top-4 h-full w-px bg-border" aria-hidden="true" /> : null}
      <span
        className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-background bg-accent"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2 pb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {item.period} · {item.location}
        </span>
        <h4 className="text-pretty text-base font-semibold tracking-tight">{item.role || item.degree}</h4>
        <span className="text-[13px] text-accent">{item.org}</span>
        <ul className="mt-1 flex flex-col gap-1.5">
          {item.points.map((point) => (
            <li key={point} className="text-[13px] leading-relaxed text-muted-foreground">
              {point}
            </li>
          ))}
        </ul>
        {item.tags?.length ? (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  )
}

function Block({ Icon, title, children }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="inline-flex items-center gap-2 border-b border-border pb-3 text-sm font-semibold tracking-tight">
        <Icon className="h-4 w-4 text-accent" />
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        label="04 — Track record"
        title="Experience, education and certifications."
        description="Internships, competitions and coursework that produced something I can point at."
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <Block Icon={Briefcase} title="Experience">
          <ol className="flex flex-col">
            {experience.map((item, index) => (
              <TimelineItem key={item.id} item={item} isLast={index === experience.length - 1} />
            ))}
          </ol>
        </Block>

        <div className="flex flex-col gap-14">
          <Block Icon={GraduationCap} title="Education">
            <ol className="flex flex-col">
              {education.map((item, index) => (
                <TimelineItem key={item.id} item={item} isLast={index === education.length - 1} />
              ))}
            </ol>
          </Block>

          <Block Icon={Award} title="Certifications">
            <ul className="flex flex-col gap-px overflow-hidden rounded-lg border border-border bg-border">
              {certifications.map((cert) => (
                <li key={cert.id} className="flex flex-col gap-1 bg-background p-4">
                  <span className="text-[13px] font-medium leading-snug tracking-tight">{cert.name}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Card className="p-5">
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              <span className="text-foreground">Currently:</span> senior undergraduate at Alexandria University,
              Intelligent Systems department, building AI systems while preparing for a Summer 2026 internship.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
