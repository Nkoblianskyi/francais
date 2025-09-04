"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/data/betting-sites"
import Link from "next/link"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
  isFirst?: boolean // Added isFirst prop to highlight first card
}

export function BettingSiteCard({ site, rank, isFirst = false }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (!site.badges || site.badges.length === 0) return null

    const badge = site.badges[0] // Take first badge as primary

    if (badge === "Meilleur Choix") return { text: "MEILLEUR CHOIX", color: "bg-amber-600 text-slate-900" }
    if (badge === "Populaire") return { text: "POPULAIRE", color: "bg-blue-600 text-white" }
    if (badge === "Nouveau") return { text: "NOUVEAU", color: "bg-red-600 text-white" }
    if (badge === "Recommandé") return { text: "RECOMMANDÉ", color: "bg-amber-600 text-slate-900" }
    if (badge === "Top Rating") return { text: "TOP RATING", color: "bg-amber-600 text-slate-900" }
    if (badge === "Top Line") return { text: "TOP LINE", color: "bg-red-600 text-white" }

    return null
  }

  const primaryBadge = getPrimaryBadge()

  return (
    <Link href={site.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block group">
      <div
        className={`relative rounded-lg p-6 transition-all duration-300 group-hover:scale-[1.02] shadow-sm bg-gradient-to-br from-slate-800/70 to-slate-700/60 backdrop-blur-sm ${
          isFirst ? "border-2 border-gold-accent shadow-lg shadow-gold-accent/20" : "border border-gray-700/50"
        }`} // Added golden border and glow effect for first card
      >
        {primaryBadge && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <div
              className={`${
                primaryBadge.color === "bg-amber-600 text-slate-900"
                  ? "bg-amber-600 text-slate-900 border-amber-400"
                  : primaryBadge.color === "bg-blue-600 text-white"
                    ? "bg-blue-600 text-white border-blue-400"
                    : primaryBadge.color === "bg-red-600 text-white"
                      ? "bg-red-600 text-white border-red-400"
                      : "bg-gray-700 text-white border-gray-500"
              } px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-md rounded-md border-2 backdrop-blur-sm`}
            >
              {primaryBadge.text}
            </div>
          </div>
        )}

        

        <div className="relative z-10">
          {/* Layout Desktop et Tablet */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[180px] h-[72px] lg:w-[200px] lg:h-[96px] object-contain"
              />
            </div>

            <div className="flex-1 text-center">
              <div className="text-amber-400 font-bold mb-1 text-xl">BONUS</div>
              <p className="text-blue-400 font-semibold leading-tight text-2xl">{site.bonus}</p>
            </div>

            {/* Note */}
            <div className="text-center flex-shrink-0">
              <div className="text-xl lg:text-2xl font-bold text-white mb-1">
                {site.rating.toFixed(1)}
                <span className="text-sm text-gray-400">/10</span>
              </div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 stroke-amber-400 stroke-[1.5px] ${
                      i < site.stars ? "text-amber-400 fill-amber-400" : "text-transparent"
                    }`}
                  />
                ))}
              </div>
              <div className="text-gray-400 text-xs">
                <span>({site.reviews} avis)</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base border border-blue-500">
                OBTENIR BONUS
              </Button>
            </div>
          </div>

          {/* Layout Mobile */}
          <div className="md:hidden pt-6">
            {/* Ligne supérieure: Logo à gauche, Bonus à droite */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-shrink-0 bg-gray-700/50 p-2 rounded-lg border border-gray-600">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[120px] h-[72px] object-contain"
                />
              </div>
              <div className="flex-1 text-center pl-4">
                <div className="text-amber-400 font-bold text-sm mb-1">BONUS</div>
                <p className="text-blue-400 font-semibold leading-tight text-lg">{site.bonus}</p>
              </div>
            </div>

            {/* Note - sur une ligne */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">
                  {site.rating.toFixed(1)}
                  <span className="text-sm text-gray-400">/10</span>
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 stroke-amber-400 stroke-[1.5px] ${
                        i < site.stars ? "text-amber-400 fill-amber-400" : "text-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                <span>({site.reviews} avis)</span>
              </div>
            </div>

            {/* Bouton */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-3 border border-blue-500">
              OBTENIR BONUS
            </Button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700/50 text-center">
          <p className="text-gray-400 text-xs leading-relaxed">
            <strong className="text-red-400">AVERTISSEMENT:</strong> Contenu éducatif uniquement.
            <strong className="text-white"> 18+ | Jeu responsable obligatoire</strong>
            <br />
            <strong className="text-red-400">RISQUES:</strong> Pertes financières, dépendance, problèmes familiaux
            <br />
            <strong className="text-amber-400">AIDE:</strong> 09 74 75 13 13 |
            <strong className="text-white"> Licence ANJ</strong> |
            <strong className="text-gray-300"> Ne pariez que ce que vous pouvez perdre</strong>
          </p>
        </div>
      </div>
    </Link>
  )
}
