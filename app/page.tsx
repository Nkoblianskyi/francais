import { HeroSection } from "@/components/hero-section"
import { BettingSitesList } from "@/components/betting-sites-list"
import { InfoSection } from "@/components/info-section"
import { SportsSection } from "@/components/sports-section"
import { CriteriaSection } from "@/components/criteria-section"

export default function HomePage() {
  return (
    <div className="min-h-screen ">


      <HeroSection />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          <BettingSitesList />
        </div>
      </section>

      <InfoSection />
      <SportsSection />
      <CriteriaSection />

    </div>
  )
}
