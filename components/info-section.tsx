import { Card } from "@/components/ui/card"

export function InfoSection() {
  const infoCards = [
    {
      title: "Licence ANJ Vérifiée",
      description:
        "Tous nos partenaires détiennent une licence officielle de l'Autorité Nationale des Jeux, garantissant la légalité et la sécurité de vos paris en France.",
    },
    {
      title: "Analyse Comparative",
      description:
        "Notre équipe d'experts analyse quotidiennement les cotes, bonus et services pour vous offrir une comparaison objective et actualisée.",
    },
    {
      title: "Support Client Français",
      description:
        "Assistance disponible 24h/24 et 7j/7 en langue française avec des conseillers spécialisés dans les paris sportifs.",
    },
    {
      title: "Transactions Sécurisées",
      description:
        "Processus de dépôt et retrait optimisés avec chiffrement bancaire et délais de traitement transparents pour tous les opérateurs.",
    },
    {
      title: "Offres Négociées",
      description:
        "Bonus de bienvenue et promotions exclusives négociés directement avec les bookmakers pour maximiser vos gains potentiels.",
    },
    {
      title: "Jeu Responsable",
      description:
        "Outils de contrôle et ressources d'aide pour maintenir une pratique saine du pari sportif avec limites personnalisables.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Pourquoi Nous Faire Confiance</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Notre expertise dans l'industrie des paris sportifs français nous permet de vous guider vers les meilleures
          opportunités du marché.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
