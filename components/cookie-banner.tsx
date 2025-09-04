"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-french-blue/20 rounded-full flex items-center justify-center mt-1">
                <span className="text-french-blue text-sm">🍪</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Nous utilisons des cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et
                  personnaliser le contenu. En continuant à naviguer, vous acceptez notre utilisation des cookies.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link href="/politique-cookies" className="text-xs text-french-blue hover:underline">
                    Politique des cookies
                  </Link>
                  <span className="text-xs text-muted-foreground">•</span>
                  <Link href="/politique-confidentialite" className="text-xs text-french-blue hover:underline">
                    Politique de confidentialité
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="border-border hover:bg-muted bg-transparent"
            >
              Refuser
            </Button>
            <Button size="sm" onClick={acceptCookies} className="bg-french-blue hover:bg-french-blue/90 text-white">
              Accepter
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="p-2">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
