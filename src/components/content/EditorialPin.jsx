import { cn } from "@/lib/utils"

export function EditorialPin({ children, className, align = "left" }) {
  return (
    <div
      className={cn(
        "pin-label",
        align === "right" && "text-right",
        className,
      )}
    >
      {children}
    </div>
  )
}
