export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 4,
    name: "Winamax",
    logo: "/winamax.png",
    bonus: "1er Pari Remboursé En Cash Jusqu'à 100 €",
    url: "https://winamax.fr/",
    rating: 9.8,
    stars: 5,
    reviews: 7000,
    badges: ["TOP RATING"],
    isTopRating: true,
  },
  {
    id: 1,
    name: "PMU.FR",
    logo: "/pmu.svg",
    bonus: "100% Jusqu'à 100€ Remboursés",
    url: "https://www.pmu.fr/",
    rating: 9.7,
    stars: 5,
    reviews: 6847,
    badges: ["TOP LINE", "POPULAIRE"],
    isTopLine: true,
    isPopular: true,
  },
  {
    id: 3,
    name: "CircusBet",
    logo: "/circus-bet.png",
    bonus: "Booste Automatiquement 3 éléments dans Votre Pari Combiné",
    url: "https://www.circusbet.fr/",
    rating: 9.6,
    stars: 5,
    reviews: 4456,
    badges: ["TENDANCE"],
    isTrending: true,
  },
  {
    id: 2,
    name: "Parions Sport En Ligne",
    logo: "/psel.svg",
    bonus: "100% Jusqu'à 100€ de Bonus 1er Pari Doublé",
    url: "https://www.enligne.parionssport.fdj.fr",
    rating: 9.5,
    stars: 4,
    reviews: 5923,
    badges: ["POPULAIRE"],
    isPopular: true,
  },
  {
    id: 5,
    name: "NetBet",
    logo: "/netbet.png",
    bonus: "100% Jusqu'à 100€ + 100 Paris Gratuits",
    url: "https://www.netbet.fr/",
    rating: 9.4,
    stars: 4,
    reviews: 3987,
    badges: [],
  },
]
