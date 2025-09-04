import type { BettingSite } from "@/data/betting-sites"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BettingCardProps {
  site: BettingSite
  rank: number
}

export function BettingCard({ site, rank }: BettingCardProps) {
  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < stars ? "text-gold-accent" : "text-muted-foreground"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-primary/50 transition-all duration-300 animate-fade-in">
      {site.badge && (
        <div
          className={`absolute top-4 left-0 px-3 py-1 text-xs font-bold text-white ${site.badge.color} rounded-r-full z-10`}
        >
          {site.badge.text}
        </div>
      )}

      <div className="p-6 pt-12">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
              {rank}
            </div>
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{site.rating.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">Note</div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{site.name}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex">{renderStars(site.stars)}</div>
            <span className="text-sm text-muted-foreground">({site.reviews.toLocaleString()} avis)</span>
          </div>
          <div className="text-sm font-medium text-gold-accent mb-3">{site.bonus}</div>
        </div>

        <div className="space-y-2 mb-4">
          {site.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-muted-foreground">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3" asChild>
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            VISITER SITE
          </a>
        </Button>

        <div className="text-xs text-muted-foreground mt-2 text-center">Licence: {site.license}</div>
      </div>
    </Card>
  )
}
