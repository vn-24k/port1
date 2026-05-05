import { NavBar } from "@/components/portfolio/NavBar"
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader"
import { VisionSection } from "@/components/portfolio/VisionSection"
import { PrinciplesSection } from "@/components/portfolio/PrinciplesSection"
import { ExecutionSection } from "@/components/portfolio/ExecutionSection"
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <NavBar />

      <main>
        {/* Hero / Header */}
        <div className="relative bg-grid overflow-hidden">
          {/* Radial vignette over grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 15% 50%, oklch(0.62 0.19 255 / 0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 85% 20%, oklch(0.62 0.19 255 / 0.04) 0%, transparent 65%)",
            }}
          />
          <PortfolioHeader />
        </div>

        {/* Section 01 */}
        <VisionSection />

        {/* Section 02 */}
        <PrinciplesSection />

        {/* Section 03 */}
        <ExecutionSection />
      </main>

      {/* Footer / Contact */}
      <div id="contact">
        <PortfolioFooter />
      </div>
    </div>
  )
}

