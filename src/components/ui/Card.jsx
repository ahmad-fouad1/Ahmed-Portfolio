import { cn } from "./Button.jsx"

export default function Card({ as = "div", className, children, ...props }) {
  const Tag = as
  return (
    <Tag
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground transition-colors duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
