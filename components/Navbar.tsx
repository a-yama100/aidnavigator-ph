"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NAV, PAGE_PATH, localePath, stripLang, type Lang } from "@/lib/content"

export function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const t = NAV[lang]
  // 今のページの、言語を除いたパス（もう一方の言語の同じページへのリンクに使う）
  const basePath = stripLang(pathname)
  const other: Lang = lang === "ja" ? "en" : "ja"

  const isActive = (path: string) => {
    if (path === "/") return basePath === "/"
    return basePath.startsWith(path)
  }

  const linkClass = (path: string) => {
    const base = "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
    if (isActive(path)) {
      return base + " bg-blue-700 text-white"
    }
    return base + " text-blue-100 hover:bg-blue-800 hover:text-white"
  }

  const mobileLinkClass = (path: string) => {
    const base = "block px-4 py-3 text-sm font-medium transition-all duration-200"
    if (isActive(path)) {
      return base + " bg-blue-700 text-white"
    }
    return base + " text-blue-100 hover:bg-blue-800"
  }

  // 言語の切り替え。ルートレイアウトが別なので、Link ではなく a で移る
  const toggle = (
    <a
      href={localePath(other, basePath)}
      hrefLang={other}
      lang={other}
      className="px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-300 text-blue-100 hover:bg-blue-800 hover:text-white transition-all duration-200"
    >
      {t.toggle}
    </a>
  )

  return (
    <nav className="bg-blue-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href={localePath(lang, "/")} className="flex items-center space-x-2 group">
            <Image
              src="/favicon.svg"
              alt="AidNavigator PH"
              width={32}
              height={32}
              className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
            />
            <span className="font-bold text-white group-hover:text-blue-200 transition-colors text-sm sm:text-lg">
              AidNavigator PH
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {t.items.map((item) => (
              <Link key={item.key} href={localePath(lang, PAGE_PATH[item.key])} className={linkClass(PAGE_PATH[item.key])}>
                {item.label}
              </Link>
            ))}
            <span className="pl-2">{toggle}</span>
          </div>
          <div className="md:hidden flex items-center gap-2">
            {toggle}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t.menu}
              aria-expanded={isOpen}
              className="p-2 rounded-lg text-blue-100 hover:bg-blue-800 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-blue-800">
          {t.items.map((item) => (
            <Link
              key={item.key}
              href={localePath(lang, PAGE_PATH[item.key])}
              className={mobileLinkClass(PAGE_PATH[item.key])}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
