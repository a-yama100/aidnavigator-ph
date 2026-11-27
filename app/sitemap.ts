import type { MetadataRoute } from "next"
import { PAGE_PATH, SITE_URL, localePath, type PageKey } from "@/lib/content"

// 検索エンジン向けのページ一覧（/sitemap.xml）。日本語と英語を対にする
export default function sitemap(): MetadataRoute.Sitemap {
  const keys: PageKey[] = ["home", "financial", "health", "education", "housing", "about"]
  return keys.flatMap((key) => {
    const path = PAGE_PATH[key]
    const languages = { ja: SITE_URL + localePath("ja", path), en: SITE_URL + localePath("en", path) }
    const priority = key === "home" ? 1 : 0.7
    return [
      { url: languages.ja, lastModified: new Date(), changeFrequency: "monthly" as const, priority, alternates: { languages } },
      { url: languages.en, lastModified: new Date(), changeFrequency: "monthly" as const, priority: key === "home" ? 0.9 : 0.6, alternates: { languages } },
    ]
  })
}
