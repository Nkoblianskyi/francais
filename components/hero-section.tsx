export function HeroSection() {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="relative py-20 px-4 text-center max-w-[1250px] mx-auto ">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          <span className="text-french-blue">Meilleurs Sites</span> <span className="text-foreground">de</span>{" "}
          <span className="text-french-red">Paris Sportifs</span> <span className="text-gold-accent">France</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Découvrez notre sélection des meilleurs bookmakers français avec licence ANJ. Comparaison objective des bonus,
          cotes et services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full border border-border/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Mis à jour le {getCurrentDate()}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-french-blue/20 border border-french-blue/30 rounded-full">
              <span className="text-xs font-semibold text-white">LICENCE SÉCURISÉ</span>
            </div>
            <div className="px-3 py-1 bg-french-red/20 border border-french-red/30 rounded-full">
              <span className="text-xs font-semibold text-french-red">18+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
