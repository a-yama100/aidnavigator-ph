import Script from "next/script"
import type { Lang } from "@/lib/content"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const gaId = process.env.NEXT_PUBLIC_GA_ID || ""

// 日本語（app/(ja)）と英語（app/(en)）のルートレイアウトに共通の html と body
export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
        {gaId && (
          <>
            <Script src={"https://www.googletagmanager.com/gtag/js?id=" + gaId} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" + gaId + "');"}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
