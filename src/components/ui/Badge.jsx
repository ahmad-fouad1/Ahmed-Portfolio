import { cn } from "./Button.jsx"

const tones = {
  default: "border-border bg-muted text-muted-foreground",
  solid: "border-transparent bg-primary text-primary-foreground",
  accent: "border-accent/30 bg-accent/10 text-accent",
}

export default function Badge({ children, tone = "default", className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] leading-5 tracking-tight",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
