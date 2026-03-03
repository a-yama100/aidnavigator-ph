import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"

export const metadata: Metadata = {
  metadataBase: new URL("https://aid.phtechai.com"),
  title: {
    default: "AidNavigator PH - Philippine Government Aid & Support Programs Database",
    template: "%s | AidNavigator PH",
  },
  description: "Comprehensive database of Philippine government subsidies, healthcare, education, housing, and financial aid programs. Eligibility checker, application checklists, and program change alerts.",
  keywords: ["Philippine government aid", "subsidy Philippines", "PhilHealth", "4Ps program", "DOLE assistance", "DSWD programs", "education scholarship Philippines", "housing program Philippines"],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://aid.phtechai.com",
    siteName: "AidNavigator PH",
    title: "AidNavigator PH - Philippine Government Aid & Support Programs",
    description: "Find and apply for Philippine government aid programs. Subsidies, healthcare, education, housing support.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
