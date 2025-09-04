"use client"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/data/betting-sites"
import { BettingSiteCard } from "./betting-site-card"

export function BettingSitesList() {
  const sites = bettingSites
  const loading = false
  const error = null

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold-accent border-r-transparent"></div>
          <p className="mt-2 text-muted-foreground">Chargement des sites de paris...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center text-destructive">
          <p>{error}</p>
          <Button onClick={() => window.location.reload()} className="mt-4 bg-gold-accent hover:bg-gold-accent/90">
            Réessayer
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-1">
      <div className="mx-auto px-2 sm:px-4 max-w-[1200px]">
        <div className="w-full space-y-4">
          {sites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BettingSitesList
