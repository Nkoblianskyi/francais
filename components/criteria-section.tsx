import { Card } from "@/components/ui/card"

export function CriteriaSection() {
  const criteria = [
    {
      title: "Licence ANJ",
      description: "Vérification rigoureuse de la licence officielle française et conformité réglementaire complète.",
    },
    {
      title: "Qualité du Service",
      description: "Évaluation approfondie de l'expérience utilisateur, interface et fonctionnalités disponibles.",
    },
    {
      title: "Bonus et Promotions",
      description: "Analyse détaillée des offres de bienvenue, conditions de mise et promotions régulières.",
    },
    {
      title: "Support Client",
      description: "Test complet de la réactivité, compétence et disponibilité du service clientèle français.",
    },
    {
      title: "Sécurité",
      description: "Vérification des mesures de protection des données et sécurisation des transactions financières.",
    },
    {
      title: "Rapidité des Retraits",
      description: "Test pratique des délais de traitement et méthodes de retrait disponibles pour les joueurs.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Nos Critères de Sélection</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Méthodologie rigoureuse d'évaluation basée sur des tests pratiques et une analyse objective de chaque
          opérateur.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((criterion, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-french-blue/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">{criterion.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{criterion.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
