import { cn } from "./Button.jsx"

export default function SectionHeading({ label, title, description, className }) {
  return (
    <div className={cn("flex flex-col gap-3 border-t border-border pt-6", className)}>
      {label ? <span className="label-mono">{label}</span> : null}
      <h2 className="max-w-2xl text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
