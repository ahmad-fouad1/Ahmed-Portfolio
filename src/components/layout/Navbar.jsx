import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { profile, navLinks } from "../../data/profile.js"
import { cn } from "../ui/Button.jsx"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("about")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const go = (event, id) => {
    event.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a
          href="#top"
          onClick={(event) => go(event, "top")}
          className="flex flex-col leading-tight"
        >
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          <span className="font-mono text-[11px] tracking-tight text-muted-foreground">{profile.role}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(event) => go(event, link.id)}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "rounded px-3 py-1.5 text-sm transition-colors duration-200",
                  active === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "mt-0.5 block h-px origin-left bg-accent transition-transform duration-300",
                    active === link.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center rounded border border-border px-3 text-[13px] font-medium transition-colors duration-200 hover:bg-muted"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-border md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-5 py-2 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-border last:border-b-0">
                <a
                  href={`#${link.id}`}
                  onClick={(event) => go(event, link.id)}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  {link.label}
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(navLinks.indexOf(link) + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
