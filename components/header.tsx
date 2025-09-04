import Link from "next/link"

export function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex-shrink-0 bg-white rounded-full p-1">
              <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
            </div>
            <div className="text-xl font-bold tracking-tight">
              <span className="text-french-blue">Francais</span>
              <span className="text-french-red">Sport</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            
            <Link href="/politique-cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Politique cookies
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Confidentialité
            </Link>
          </nav>

     
        </div>
      </div>
    </header>
  )
}
