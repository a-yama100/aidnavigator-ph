import { ABOUT, META, PHAIWORKS, type Lang } from "@/lib/content"

const IT_START_YEAR = 1990

// このサイトについて（日本語は /about、英語は /en/about）
export function AboutPage({ lang }: { lang: Lang }) {
  const t = ABOUT[lang]
  const itYears = new Date().getFullYear() - IT_START_YEAR
  const [builtBefore, builtAfter] = t.built(itYears)
  return (
    <div className="min-h-screen">

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">{META[lang].about.title}</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {t.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h2 className="text-xl font-semibold mt-8 mb-3">{t.plannedTitle}</h2>
          <p>{t.plannedLead}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.planned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-3">{t.builtTitle}</h2>
          <p>
            {builtBefore}
            <a href={PHAIWORKS[lang].home} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              PH AI Works
            </a>
            {builtAfter}
          </p>
        </div>
      </main>
    </div>
  )
}
