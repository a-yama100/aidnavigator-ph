import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL("https://aid.phaiworks.com"),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "AidNavigator PH - Philippine Government Aid & Support Programs Database",
    template: "%s | AidNavigator PH",
  },
  description: "A guide to Philippine government aid programs for cash assistance, healthcare, education, and housing. Eligibility checks and application checklists are coming soon.",
  keywords: ["Philippine government aid", "subsidy Philippines", "PhilHealth", "4Ps program", "DOLE assistance", "DSWD programs", "education scholarship Philippines", "housing program Philippines", "SSS benefits", "Pag-IBIG fund", "senior citizen benefits Philippines", "PWD benefits Philippines", "TUPAD program", "government financial assistance"],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://aid.phaiworks.com",
    siteName: "AidNavigator PH",
    title: "AidNavigator PH - Philippine Government Aid & Support Programs",
    description: "Find and apply for Philippine government aid programs. Subsidies, healthcare, education, housing support.",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: 'summary_large_image',
    title: 'AidNavigator PH - Philippine Government Aid & Support Programs',
    description: 'Find and apply for Philippine government aid programs. Subsidies, healthcare, education, housing, and financial assistance.',
  },
}

const gaId = process.env.NEXT_PUBLIC_GA_ID || ''

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
        {gaId && (
          <>
            <Script
              src={"https://www.googletagmanager.com/gtag/js?id=" + gaId}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" + gaId + "');"}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
