import Link from "next/link"
export function Footer() {
  const organizations = [
    { name: "ANJ", logo: "/logo-anj.svg", href: "https://anj.fr" },
    { name: "Joueurs Info Service", logo: "/jouers-info-service.png", href: "https://www.joueurs-info-service.fr" },
    { name: "GambleAware", logo: "/gamble.webp", href: "https://www.gambleaware.org" },
    { name: "GamCare", logo: "/gamecare.svg", href: "https://www.gamcare.org.uk" },
    { name: "SOS Joueurs", logo: "/logo-sos-joueurs.svg", href: "https://www.sosjoueurs.org/" },
    { name: "GamStop", logo: "/gamstop.svg", href: "https://www.gamstop.co.uk/" },
  ]

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex-shrink-0 bg-white rounded-full p-1">
                <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
              </div>
              <div className="text-xl font-bold tracking-tight">
                <span className="text-french-blue">Francais</span>
                <span className="text-french-red">Sport</span>
              </div>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Votre guide de référence pour les paris sportifs en France. Nous analysons et comparons les meilleurs
              sites de paris pour vous aider à faire des choix éclairés et responsables.
            </p>
            <div className="flex space-x-4">
              <div className="bg-slate-800/50 px-4 py-2 rounded-lg">
                <span className="text-amber-400 font-semibold">100%</span>
                <span className="text-slate-300 text-sm ml-2">Gratuit</span>
              </div>
              <div className="bg-slate-800/50 px-4 py-2 rounded-lg">
                <span className="text-blue-400 font-semibold">24/7</span>
                <span className="text-slate-300 text-sm ml-2">Mis à jour</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Organizations */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6 text-white text-center">Organismes de Régulation et Partenaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {organizations.map((org, index) => (
              <a
                key={index}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-slate-500/30 rounded-xl border border-slate-700/30 hover:bg-slate-800/50 transition-colors"
              >
                <img
                  src={org.logo || "/placeholder.svg"}
                  alt={org.name}
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Responsible Gaming */}
        <div className="bg-gradient-to-r from-red-900/20 to-slate-800/20 rounded-xl p-6 mb-8 border border-red-800/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-red-300">Jeu Responsable</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Les paris sportifs peuvent être addictifs. Jouez de manière responsable et dans la limite de vos moyens.
                Ne pariez jamais plus que ce que vous pouvez vous permettre de perdre.
              </p>
              <p className="text-red-300 text-sm font-medium">
                Aide: Joueurs Info Service - 09 74 75 13 13 (appel non surtaxé)
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-amber-400 font-semibold text-sm mb-1">Rappel Important</p>
                <p className="text-slate-300 text-xs">
                  Interdit aux mineurs. Jouer comporte des risques: endettement, isolement, dépendance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2025 FrancaisSport.com - Tous droits réservés. Informations fournies à titre informatif uniquement.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Mentions Légales
              </a>
              <a href="/politique-confidentialite" className="text-slate-400 hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="/politique-cookies" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
