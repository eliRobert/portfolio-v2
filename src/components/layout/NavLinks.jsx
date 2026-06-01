import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"

export function NavLinks({ className, linkClassName, onNavigate }) {
  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex list-none flex-col gap-6 p-0 md:flex-row md:items-center md:gap-10">
        {navigation.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "editorial-link text-sm tracking-wide text-muted-foreground hover:text-foreground",
                linkClassName,
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
