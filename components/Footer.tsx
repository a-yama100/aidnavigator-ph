import Link from "next/link"
import { NAV, PHAIWORKS, localePath, type Lang } from "@/lib/content"

export function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear()
  const t = NAV[lang]
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>&copy; {year} AidNavigator PH</span>
          <span aria-hidden="true">|</span>
          <span>{t.footerProject[0]}<a href={PHAIWORKS[lang].home} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">PH AI Works</a>{t.footerProject[1]}</span>
        </div>
        <div className="flex gap-4">
          <a href="https://hojokin.phaiworks.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Hojokin de Go!</a>
          <Link href={localePath(lang, "/about")} className="hover:text-white">{t.footerAbout}</Link>
          <a href={PHAIWORKS[lang].contact} target="_blank" rel="noopener noreferrer" className="hover:text-white">{t.footerContact}</a>
        </div>
      </div>
    </footer>
  )
}
