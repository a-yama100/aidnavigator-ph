import Link from 'next/link'
import Image from 'next/image'
import { HOME, PAGE_PATH, localePath, type Lang } from '@/lib/content'

// トップページ（日本語は /、英語は /en）
export function HomePage({ lang }: { lang: Lang }) {
  const t = HOME[lang]
  return (
    <div className="min-h-screen">
      {/* Hero */}
      {/* 背景の帯も本文の幅に収める（2026-11-27） */}
      <section className="max-w-6xl mx-auto px-4 pt-6">
        <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white rounded-2xl py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {t.heroTitle}
            </h1>
            <Image
              src="/media/hero.webp"
              alt={t.heroImageAlt}
              width={1600}
              height={679}
              priority
              sizes="(max-width: 896px) 100vw, 864px"
              className="w-full h-auto rounded-xl shadow-lg mb-8"
            />
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              {t.heroLead[0]}
              {lang === 'en' ? ' ' : ''}
              {t.heroLead[1]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={localePath(lang, PAGE_PATH.financial)}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t.browse}
              </Link>
              <Link
                href={localePath(lang, PAGE_PATH.about)}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {t.howItWorks}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">{t.categoriesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.categories.map((cat) => {
            const href = localePath(lang, PAGE_PATH[cat.key])
            return (
              <Link key={cat.key} href={href} className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{cat.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">{t.comingSoon}</span>
                </div>
                <p className="text-gray-600">{cat.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">{t.featuresTitle}</h2>
          <p className="text-center text-gray-600 mb-10">{t.featuresLead}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.map((f, i) => (
              <div key={f.title} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
