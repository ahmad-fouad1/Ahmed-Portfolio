import { ArrowDown, Mail, MapPin } from "lucide-react"
import Button from "../ui/Button.jsx"
import { profile } from "../../data/profile.js"

const stats = [
  { value: "3.18", label: "CGPA / 4.00" },
  { value: "21st", label: "AIC SOT competition" },
  { value: "10+", label: "FPS live tracking" },
  { value: "8", label: "AI projects shipped" },
]

export default function Hero() {
  const scrollTo = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="top" className="mx-auto max-w-content px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
      <div className="animate-fade-up">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
            </span>
            Open to Summer 2026 internships
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-tight text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {profile.location}
          </span>
        </div>

        <h1 className="mt-8 max-w-3xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">
          {profile.name} — {profile.role}.{" "}
          <span className="text-muted-foreground">
            I build AI systems that see, read and decide: computer vision pipelines, deep learning models and LLM
            applications grounded in real data.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Third-year Computer Science student (Intelligent Systems) at Alexandria University. Currently looking for a{" "}
          <span className="text-foreground">Summer 2026 AI / Data Science internship</span> where I can ship
          production-grade intelligent systems.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button as="a" href="#projects" onClick={(event) => scrollTo(event, "projects")}>
            View projects
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button as="a" variant="outline" href="#contact" onClick={(event) => scrollTo(event, "contact")}>
            <Mail className="h-4 w-4" />
            Get in touch
          </Button>
          <Button as="a" variant="ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Résumé-download
          </Button>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 bg-background p-5">
            <dt className="order-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="order-1 text-2xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
