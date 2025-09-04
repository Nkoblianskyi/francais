import { Card } from "@/components/ui/card"

export function SportsSection() {
  const sportsCategories = [
    {
      title: "Football",
      description:
        "Ligue 1, Ligue 2, Coupes nationales et compétitions européennes avec les meilleures cotes du marché français.",
      markets: ["1N2", "Handicap", "Plus/Moins", "Buteurs"],
    },
    {
      title: "Tennis",
      description: "Roland-Garros, ATP, WTA et tournois internationaux avec paris en direct et cotes compétitives.",
      markets: ["Vainqueur", "Sets", "Jeux", "Live"],
    },
    {
      title: "Basketball",
      description: "NBA, Euroleague, Betclic Elite et championnats européens avec large choix de paris.",
      markets: ["Handicap", "Totaux", "Quart-temps", "Joueurs"],
    },
    {
      title: "Rugby",
      description: "Top 14, Pro D2, Coupe du Monde et Tournoi des 6 Nations avec expertise française.",
      markets: ["Handicap", "Totaux", "Mi-temps", "Essais"],
    },
    {
      title: "Sports Mécaniques",
      description: "Formule 1, MotoGP, rallyes et courses avec paris ante-post et en direct.",
      markets: ["Podium", "Qualifications", "Tours rapides", "Championnats"],
    },
    {
      title: "Sports d'Hiver",
      description: "Ski alpin, biathlon, patinage et sports olympiques d'hiver avec cotes spécialisées.",
      markets: ["Médailles", "Classements", "Temps", "Compétitions"],
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Sports et Marchés Disponibles</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Large sélection de sports et marchés de paris pour satisfaire tous les profils de parieurs, des débutants aux
          experts.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsCategories.map((sport, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-gold-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">{sport.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{sport.description}</p>
              <div className="flex flex-wrap gap-2 text-white">
                {sport.markets.map((market, marketIndex) => (
                  <span
                    key={marketIndex}
                    className="px-3 py-1 bg-primary/10 text-xs rounded-full border border-primary/20 text-white"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
