export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Politique de Confidentialité</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              FrancaisSport s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment
              nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site
              web francaissport.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Informations que nous collectons</h2>
            <div className="space-y-4">
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-2 text-french-red">Informations fournies volontairement</h3>
                <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Adresse e-mail lors de l'inscription à notre newsletter</li>
                  <li>Commentaires et retours d'expérience</li>
                  <li>Informations de contact lors de demandes de support</li>
                </ul>
              </div>

              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-2 text-french-red">Informations collectées automatiquement</h3>
                <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Adresse IP et informations sur l'appareil</li>
                  <li>Type de navigateur et système d'exploitation</li>
                  <li>Pages visitées et temps passé sur le site</li>
                  <li>Données de géolocalisation approximative</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Comment nous utilisons vos informations</h2>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Fournir et améliorer nos services de comparaison</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Envoyer des newsletters et communications marketing (avec votre consentement)</li>
              <li>Analyser l'utilisation du site pour améliorer nos services</li>
              <li>Répondre à vos demandes de support client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Partage des informations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons
              partager vos informations uniquement dans les cas suivants :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Avec votre consentement explicite</li>
              <li>Pour se conformer aux obligations légales</li>
              <li>Avec nos partenaires de services (hébergement, analytics) sous contrat de confidentialité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Vos droits (RGPD)</h2>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">Conformément au RGPD, vous avez le droit de :</p>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier des données inexactes</li>
                <li>Supprimer vos données (droit à l'oubli)</li>
                <li>Limiter le traitement de vos données</li>
                <li>Portabilité de vos données</li>
                <li>Vous opposer au traitement</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Sécurité des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles
              contre l'accès non autorisé, la modification, la divulgation ou la destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
              contactez-nous à : <span className="text-french-blue">privacy@francaissport.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
