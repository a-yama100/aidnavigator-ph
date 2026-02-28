import Link from 'next/link'

const categories = [
  {
    title: "Financial Aid",
    description: "Cash transfers, subsidies, livelihood programs from DSWD, DOLE, and other agencies",
    href: "/programs/financial",
    icon: "peso-sign",
    count: "50+",
  },
  {
    title: "Healthcare",
    description: "PhilHealth coverage, DOH programs, medical assistance, and health subsidies",
    href: "/programs/health",
    icon: "heart-pulse",
    count: "30+",
  },
  {
    title: "Education",
    description: "DepEd programs, CHED scholarships, TESDA training, and student financial aid",
    href: "/programs/education",
    icon: "graduation-cap",
    count: "40+",
  },
  {
    title: "Housing",
    description: "Pag-IBIG programs, NHA housing, socialized housing, and shelter assistance",
    href: "/programs/housing",
    icon: "house",
    count: "20+",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AidNavigator PH</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/programs/financial" className="hover:text-blue-200">Financial</Link>
            <Link href="/programs/health" className="hover:text-blue-200">Healthcare</Link>
            <Link href="/programs/education" className="hover:text-blue-200">Education</Link>
            <Link href="/programs/housing" className="hover:text-blue-200">Housing</Link>
            <Link href="/about" className="hover:text-blue-200">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find Government Aid Programs You Qualify For
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Navigate Philippine subsidies, healthcare, education, and housing support programs.
            Check eligibility, get application checklists, and receive program change alerts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs/financial"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse All Programs
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Support Program Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{cat.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">{cat.count} programs</span>
              </div>
              <p className="text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">What AidNavigator PH Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold mb-2">Program Database</h3>
              <p className="text-sm text-gray-600">Comprehensive, searchable database of government aid programs across all major agencies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold mb-2">Eligibility Checker</h3>
              <p className="text-sm text-gray-600">Answer a few questions to find programs you may qualify for based on your situation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold mb-2">Application Checklists</h3>
              <p className="text-sm text-gray-600">Step-by-step guides with required documents and office locations for each program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <span>AidNavigator PH</span>
            <span>|</span>
            <span>A project by <a href="https://www.phtechai.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">PH Tech AI</a></span>
          </div>
          <div className="flex gap-4">
            <a href="https://hojokin.phtechai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Hojokin de Go!</a>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
