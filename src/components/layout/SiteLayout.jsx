import { CustomCursor } from "@/components/cursor/CustomCursor"
import { Header } from "@/components/layout/Header"

export function SiteLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <CustomCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  )
}
