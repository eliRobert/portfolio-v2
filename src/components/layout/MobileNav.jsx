import { useEffect } from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { NavLinks } from "@/components/layout/NavLinks"

export function MobileNav({ open, onClose }) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    const onChange = () => {
      if (mediaQuery.matches) onClose()
    }

    mediaQuery.addEventListener("change", onChange)

    return () => mediaQuery.removeEventListener("change", onChange)
  }, [onClose])

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-16 z-40 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        id="mobile-nav"
        className={cn(
          "relative border-b border-border/50 bg-background/95 backdrop-blur-md transition-all duration-300 ease-out",
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
        )}
      >
        <Container className="py-8">
          <NavLinks onNavigate={onClose} />
        </Container>
      </div>
    </div>
  )
}
