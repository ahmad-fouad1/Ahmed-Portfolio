import { Mail, Phone } from "lucide-react"
import { profile } from "../../data/profile.js"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../ui/BrandIcons.jsx"

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, Icon: WhatsappIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          <span className="font-mono text-[11px] tracking-tight text-muted-foreground">
            {profile.role} · {profile.location}
          </span>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex h-9 w-9 items-center justify-center rounded border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
