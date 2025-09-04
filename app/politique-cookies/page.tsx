export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Politique des Cookies</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez
              notre site web. Les cookies nous permettent de reconnaître votre navigateur et de capturer et mémoriser
              certaines informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Comment utilisons-nous les cookies ?</h2>
            <div className="space-y-4">
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-2 text-french-red">Cookies essentiels</h3>
                <p className="text-muted-foreground">
                  Ces cookies sont nécessaires au fonctionnement de notre site web et ne peuvent pas être désactivés.
                  Ils sont généralement définis en réponse à des actions que vous effectuez.
                </p>
              </div>

              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-2 text-french-red">Cookies analytiques</h3>
                <p className="text-muted-foreground">
                  Ces cookies nous permettent de compter les visites et les sources de trafic afin d'améliorer les
                  performances de notre site.
                </p>
              </div>

              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="text-lg font-medium mb-2 text-french-red">Cookies de préférence</h3>
                <p className="text-muted-foreground">
                  Ces cookies permettent au site web de mémoriser vos choix et de fournir des fonctionnalités améliorées
                  et personnalisées.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Gestion des cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les
              cookies déjà présents sur votre ordinateur et configurer la plupart des navigateurs pour qu'ils les
              bloquent.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
              <p className="text-amber-200 text-sm">
                <strong>Note :</strong> Si vous supprimez les cookies ou refusez de les accepter, certaines
                fonctionnalités de notre site peuvent ne pas fonctionner correctement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-french-blue">Contact</h2>
            <p className="text-muted-foreground">
              Si vous avez des questions concernant notre politique des cookies, veuillez nous contacter à :{" "}
              <span className="text-french-blue">contact@francaissport.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
