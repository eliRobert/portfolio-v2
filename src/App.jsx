import { SiteLayout } from "@/components/layout/SiteLayout"
import { HeroSection } from "@/sections/HeroSection"
import { SelectedWorkSection } from "@/sections/SelectedWorkSection"
import { ProcessSection } from "@/sections/ProcessSection"
import { AboutSection } from "@/sections/AboutSection"
import { ContactSection } from "@/sections/ContactSection"

function App() {
  return (
    <SiteLayout>
      <HeroSection />
      <SelectedWorkSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </SiteLayout>
  )
}

export default App
