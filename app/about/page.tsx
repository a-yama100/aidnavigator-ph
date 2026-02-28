import Link from 'next/link'

export const metadata = {
  title: "About AidNavigator PH",
  description: "Learn about AidNavigator PH - a comprehensive Philippine government aid programs database by PH Tech AI.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">AidNavigator PH</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/programs/financial" className="hover:text-blue-200">Financial</Link>
            <Link href="/programs/health" className="hover:text-blue-200">Healthcare</Link>
            <Link href="/programs/education" className="hover:text-blue-200">Education</Link>
            <Link href="/programs/housing" className="hover:text-blue-200">Housing</Link>
            <Link href="/about" className="text-blue-200 font-medium">About</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About AidNavigator PH</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            AidNavigator PH is a comprehensive information platform that organizes Philippine
            government subsidies, healthcare support, education assistance, housing programs,
            and financial aid into a searchable, easy-to-navigate database.
          </p>
          <p>
            Our mission is to help Filipino citizens, NGOs, barangay offices, and social workers
            quickly find relevant government programs, check eligibility requirements, and
            generate application checklists.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-3">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cross-agency program database covering DSWD, DOLE, DepEd, CHED, DOH, TESDA, Pag-IBIG, NHA, and more</li>
            <li>Eligibility requirement database with filtering</li>
            <li>Application checklist generator</li>
            <li>Program change alerts (coming soon)</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-3">Built by PH Tech AI</h2>
          <p>
            AidNavigator PH is developed and maintained by{" "}
            <a href="https://www.phtechai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              PH Tech AI
            </a>
            , an AI solutions company based in the Philippines with 35+ years of IT expertise.
          </p>
        </div>
      </main>
    </div>
  )
}
