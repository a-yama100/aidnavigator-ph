"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
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

  return (
    <nav className="bg-blue-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center space-x-2 group">
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
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/programs/financial" className={linkClass("/programs/financial")}>Financial</Link>
            <Link href="/programs/health" className={linkClass("/programs/health")}>Healthcare</Link>
            <Link href="/programs/education" className={linkClass("/programs/education")}>Education</Link>
            <Link href="/programs/housing" className={linkClass("/programs/housing")}>Housing</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-blue-100 hover:bg-blue-800"
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
      {isOpen && (
        <div className="md:hidden border-t border-blue-800">
          <Link href="/" className={mobileLinkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/programs/financial" className={mobileLinkClass("/programs/financial")} onClick={() => setIsOpen(false)}>Financial</Link>
          <Link href="/programs/health" className={mobileLinkClass("/programs/health")} onClick={() => setIsOpen(false)}>Healthcare</Link>
          <Link href="/programs/education" className={mobileLinkClass("/programs/education")} onClick={() => setIsOpen(false)}>Education</Link>
          <Link href="/programs/housing" className={mobileLinkClass("/programs/housing")} onClick={() => setIsOpen(false)}>Housing</Link>
          <Link href="/about" className={mobileLinkClass("/about")} onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  )
}
