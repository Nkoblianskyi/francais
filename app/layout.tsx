import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "MEILLEURS SITES DE PARIS SPORTIFS FRANCE | francaissport.com",
  description:
    "Découvrez les meilleurs sites de paris sportifs français avec licence ANJ. Comparaison des bonus, cotes et services des bookmakers légaux en France.",
  keywords: "paris sportifs, bookmakers France, ANJ, bonus paris, sites de paris légaux",
  generator: "francaissport.com",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
