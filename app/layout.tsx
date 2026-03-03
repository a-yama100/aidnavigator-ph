import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL("https://aid.phtechai.com"),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "AidNavigator PH - Philippine Government Aid & Support Programs Database",
    template: "%s | AidNavigator PH",
  },
  description: "Comprehensive database of Philippine government subsidies, healthcare, education, housing, and financial aid programs. Eligibility checker, application checklists, and program change alerts.",
  keywords: ["Philippine government aid", "subsidy Philippines", "PhilHealth", "4Ps program", "DOLE assistance", "DSWD programs", "education scholarship Philippines", "housing program Philippines", "SSS benefits", "Pag-IBIG fund", "senior citizen benefits Philippines", "PWD benefits Philippines", "TUPAD program", "government financial assistance"],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://aid.phtechai.com",
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
