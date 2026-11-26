import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aid.phaiworks.com"
  const paths = ["", "/programs/financial", "/programs/health", "/programs/education", "/programs/housing", "/about"]
  return paths.map((p) => ({ url: base + p, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }))
}
