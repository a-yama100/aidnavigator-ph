import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>&copy; {year} AidNavigator PH</span>
          <span aria-hidden="true">|</span>
          <span>A project by <a href="https://www.phaiworks.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">PH AI Works</a></span>
        </div>
        <div className="flex gap-4">
          <a href="https://hojokin.phaiworks.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Hojokin de Go!</a>
          <Link href="/about" className="hover:text-white">About</Link>
          <a href="https://www.phaiworks.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
