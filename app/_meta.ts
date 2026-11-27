import type { Metadata } from "next"
import { KEYWORDS, META, PAGE_PATH, SITE_URL, localePath, type Lang, type PageKey } from "@/lib/content"

// 両方の言語のルートレイアウトに共通の設定（題名の型・アイコン）
export const layoutMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/favicon.svg" },
  title: { default: "AidNavigator PH", template: "%s | AidNavigator PH" },
}

// ページの題名・説明・正規の URL・言語の対応（hreflang）・SNS の文
export function pageMetadata(lang: Lang, key: PageKey): Metadata {
  const m = META[lang][key]
  const path = PAGE_PATH[key]
  const self = localePath(lang, path)
  const ogTitle = m.ogTitle ?? m.title
  const ogDescription = m.ogDescription ?? m.description
  return {
    title: key === "home" ? { absolute: m.title } : m.title,
    description: m.description,
    keywords: KEYWORDS[lang],
    robots: { index: true, follow: true },
    alternates: {
      canonical: self,
      languages: { ja: localePath("ja", path), en: localePath("en", path), "x-default": localePath("ja", path) },
    },
    openGraph: {
      type: "website",
      locale: lang === "ja" ? "ja_JP" : "en_US",
      url: SITE_URL + self,
      siteName: "AidNavigator PH",
      title: ogTitle,
      description: ogDescription,
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription },
  }
}
