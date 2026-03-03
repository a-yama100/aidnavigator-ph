import Link from 'next/link'

export const metadata = {
  title: "Housing Programs",
  description: "Pag-IBIG housing loans, NHA programs, socialized housing, and shelter assistance",
}

export default function HousingProgramsPage() {
  return (
    <div className="min-h-screen">

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Housing Programs</h1>
        <p className="text-gray-600 mb-8">Pag-IBIG housing loans, NHA programs, socialized housing, and shelter assistance</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium">Program database is being populated.</p>
          <p className="text-blue-600 text-sm mt-2">Check back soon for a comprehensive list of programs with eligibility requirements and application guides.</p>
        </div>
      </main>
    </div>
  )
}
