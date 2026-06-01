import { cn } from "@/lib/utils"

export function Container({ className, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[88rem] px-5 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}
