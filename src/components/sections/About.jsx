import { Brain, Eye, Workflow } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Card from "../ui/Card.jsx"
import { profile } from "../../data/profile.js"

const brings = [
  {
    Icon: Eye,
    title: "Computer vision that runs",
    body: "Detection, tracking and image pipelines built with OpenCV and YOLO — optimised until they hold real-time frame rates, not just good notebook metrics.",
  },
  {
    Icon: Brain,
    title: "Models understood, not copied",
    body: "I implement architectures from RNNs and LSTMs to Siamese trackers so I can debug them, compare them fairly and explain the trade-offs.",
  },
  {
    Icon: Workflow,
    title: "LLM systems with guardrails",
    body: "LangChain chains, prompt evaluation and RAG grounding, wired into backends and automation so the output is useful rather than impressive.",
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        label="01 — About"
        title="An engineer who treats AI as a system, not a demo."
        description="I care about the whole path: the data, the model, the latency, and the interface a human actually touches."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            I am a third-year B.Sc. Computer Science student in the Intelligent Systems department at Alexandria
            University, working at the intersection of artificial intelligence, data science and computer vision.
          </p>
          <p>
            Most of what I know came from building things end to end. A multilingual translation app that switches
            between LLMs on the fly. A real-time detection and tracking system that estimates distance at over 10 FPS.
            A computer vision library written from primitives, covering segmentation, panorama stitching, HDR and depth
            estimation. A competitive tracking submission that placed 21st after weeks of comparative analysis between
            SiamFC, OSTrack and YOLO.
          </p>
          <p>
            Alongside the modelling work I keep one foot in software engineering — design patterns, Node.js and Django
            backends, SQL, Git workflows and Agile delivery — because a model that nobody can deploy is a model that
            nobody uses.
          </p>
          <p>
            <span className="text-foreground">What I want next:</span> a Summer 2026 AI / Data Science internship on a
            team shipping intelligent systems to real users, where I can contribute to computer vision, LLM
            applications and intelligent automation while learning from engineers further down the road than me.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* The photo only renders once you set `photo` in src/data/profile.js */}
          {profile.photo ? (
            <img
              src={profile.photo || "/placeholder.svg"}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full rounded-lg border border-border object-cover"
            />
          ) : null}

          {brings.map(({ Icon, title, body }) => (
            <Card key={title} className="p-5">
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
