import { SiteFooter } from "@/components/common/site-footer"
import { SiteHeader } from "@/components/common/site-header"
import { BookingSection } from "@/features/landing-page/components/booking-section"
import { FleetStatsSection } from "@/features/landing-page/components/fleet-stats-section"
import { HeroSection } from "@/features/landing-page/components/hero-section"
import { ServicesSection } from "@/features/landing-page/components/services-section"
import { DifferentialsSection } from "@/features/landing-page/components/differentials-section"
import { FaqSection } from "@/features/landing-page/components/faq-section"
import { ProcessSection } from "@/features/landing-page/components/process-section"
import { TestimonialsSection } from "@/features/landing-page/components/testimonials-section"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-[var(--brand-purple)] selection:text-[#09090b]">
      {/* Glow de fundo global e fixo */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(136,63,224,0.11),transparent_28%),radial-gradient(circle_at_0%_45%,rgba(183,135,60,0.06),transparent_24%)]" 
        aria-hidden="true" 
      />

      {/* Cabeçalho fixo/absoluto */}
      <SiteHeader />

      {/* Conteúdo Principal com ID para ancoragem do "voltar ao topo" */}
      <main id="top" className="relative z-10 overflow-hidden">
        <HeroSection />
        <FleetStatsSection />
        <ServicesSection />
        <DifferentialsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <BookingSection />
      </main>

      {/* Rodapé da aplicação */}
      <SiteFooter />
    </div>
  )
}