import NavBar from "@/components/portfolio/NavBar"
import PortfolioHeader from "@/components/portfolio/PortfolioHeader"
import VisionSection from "@/components/portfolio/VisionSection"
import PrinciplesSection from "@/components/portfolio/PrinciplesSection"
import ExecutionSection from "@/components/portfolio/ExecutionSection"
import PortfolioFooter from "@/components/portfolio/PortfolioFooter"

export default function PortfolioPage() {
  return (
    // Removido o uso manual de var() por classes do Tailwind
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <NavBar />

      <main>
        {/* Hero / Header Section */}
        <section className="relative bg-grid overflow-hidden border-b border-border/40">
          {/* Vinheta Radial: Background decorativo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 15% 50%, oklch(0.62 0.19 255 / 0.08) 0%, transparent 70%), 
                radial-gradient(ellipse 60% 80% at 85% 20%, oklch(0.62 0.19 255 / 0.05) 0%, transparent 65%)
              `,
            }}
          />
          
          <div className="relative z-10">
            <PortfolioHeader />
          </div>
        </section>

        {/* As seções abaixo devem preferencialmente usar a tag <section> 
            dentro de seus respectivos componentes para melhor SEO.
        */}
        <VisionSection />
        <PrinciplesSection />
        <ExecutionSection />
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-border/40">
        <PortfolioFooter />
      </footer>
    </div>
  )
}
