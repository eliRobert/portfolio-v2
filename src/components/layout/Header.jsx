import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { site } from "@/data/site"
import { useScrolled } from "@/hooks/useScrolled"
import { Container } from "@/components/layout/Container"
import { NavLinks } from "@/components/layout/NavLinks"
import { MobileNav } from "@/components/layout/MobileNav"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="editorial-link text-sm font-medium tracking-[0.01em] text-foreground hover:opacity-80"
          >
            {site.brand}
          </a>

          <NavLinks
            className="hidden md:block"
            linkClassName="text-[0.72rem] font-medium uppercase tracking-[0.16em]"
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
