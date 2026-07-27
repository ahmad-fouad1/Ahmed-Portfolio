import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "bg-transparent text-foreground border border-border hover:bg-muted",
  accent: "bg-accent text-accent-foreground hover:opacity-90",
  ghost: "bg-transparent text-muted-foreground hover:text-foreground",
}

const sizes = {
  sm: "h-9 px-3 text-[13px]",
  md: "h-11 px-5 text-sm",
}

export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const Tag = as
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
