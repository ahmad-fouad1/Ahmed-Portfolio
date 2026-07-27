import { useState } from "react"
import { Check, CircleCheck, Copy, Loader2, Mail, Phone, Send, TriangleAlert } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Card from "../ui/Card.jsx"
import Button from "../ui/Button.jsx"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../ui/BrandIcons.jsx"
import { profile } from "../../data/profile.js"

// Web3Forms: create a free access key at https://web3forms.com, then put it in
// a `.env` file as VITE_WEB3FORMS_KEY=your-key (see .env.example).
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"

const fieldClass =
  "w-full rounded border border-border bg-background px-3 py-2.5 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/70 transition-colors duration-200 hover:border-foreground/30 focus:border-foreground focus:outline-none"

const directLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    copy: true,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    Icon: Phone,
    copy: true,
  },
  {
    label: "WhatsApp",
    value: "Message me directly",
    href: `https://wa.me/${profile.whatsapp}`,
    Icon: WhatsappIcon,
  },
  {
    label: "LinkedIn",
    value: "in/ahmed-mohammed",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "Code and experiments",
    href: profile.github,
    Icon: GithubIcon,
  },
]

export default function Contact() {
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [message, setMessage] = useState("")
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.log("[v0] clipboard unavailable:", error?.message)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("error")
      setMessage("The form is not connected yet — add your Web3Forms access key to enable sending.")
      return
    }

    setStatus("sending")
    setMessage("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setMessage("Thanks — your message is on its way. I usually reply within a day.")
        form.reset()
      } else {
        setStatus("error")
        setMessage(result.message || "Something went wrong. Please email me directly instead.")
      }
    } catch (error) {
      console.log("[v0] contact form error:", error?.message)
      setStatus("error")
      setMessage("Network error. Please email me directly instead.")
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        label="05 — Contact"
        title="Let's talk about your AI internship or project."
        description="Send a message below, or reach me on whichever channel you prefer. Both land with me directly."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <Card className="p-6 sm:p-8">
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input type="hidden" name="subject" value={`New portfolio message for ${profile.name}`} />
            <input type="hidden" name="from_name" value="Portfolio contact form" />
            {/* Web3Forms spam honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="label-mono">
                  Your name
                </label>
                <input id="name" name="name" type="text" required placeholder="Jane Doe" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="label-mono">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="topic" className="label-mono">
                Topic
              </label>
              <select id="topic" name="topic" className={fieldClass} defaultValue="Internship opportunity">
                <option>Internship opportunity</option>
                <option>Freelance / project work</option>
                <option>Collaboration or research</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="label-mono">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me a little about the role, team or problem you are working on."
                className={fieldClass}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
              <span className="font-mono text-[11px] text-muted-foreground">
                No backend, no database — handled by Web3Forms.
              </span>
            </div>

            <p aria-live="polite" className="min-h-5">
              {status === "success" ? (
                <span className="inline-flex items-start gap-2 text-[13px] leading-relaxed text-accent">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" />
                  {message}
                </span>
              ) : null}
              {status === "error" ? (
                <span className="inline-flex items-start gap-2 text-[13px] leading-relaxed text-muted-foreground">
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {message}
                </span>
              ) : null}
            </p>
          </form>
        </Card>

        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-px overflow-hidden rounded-lg border border-border bg-border">
            {directLinks.map(({ label, value, href, Icon, copy }) => (
              <li key={label} className="flex items-center justify-between gap-3 bg-background p-4">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex min-w-0 items-center gap-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-accent" />
                  <span className="flex min-w-0 flex-col">
                    <span className="label-mono">{label}</span>
                    <span className="truncate text-[13px] transition-colors duration-200 group-hover:text-accent">
                      {value}
                    </span>
                  </span>
                </a>
                {copy ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span className="sr-only">Copy email address</span>
                  </button>
                ) : null}
              </li>
            ))}
          </ul>

          <Card className="p-5">
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              Based in {profile.location} and comfortable working remotely across time zones. Available for a Summer
              2026 internship and open to part-time AI work before then.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
