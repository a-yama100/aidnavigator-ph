import Link from 'next/link'

export const metadata = {
  title: "Education & Scholarship Programs",
  description: "DepEd, CHED, TESDA scholarships, training programs, and student financial assistance",
}

export default function EducationProgramsPage() {
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
            <Link href="/about" className="hover:text-blue-200">About</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Education & Scholarship Programs</h1>
        <p className="text-gray-600 mb-8">DepEd, CHED, TESDA scholarships, training programs, and student financial assistance</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium">Program database is being populated.</p>
          <p className="text-blue-600 text-sm mt-2">Check back soon for a comprehensive list of programs with eligibility requirements and application guides.</p>
        </div>
      </main>
    </div>
  )
}
