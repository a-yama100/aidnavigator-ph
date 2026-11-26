export const metadata = {
  title: "Financial Aid Programs",
  description: "Government cash transfers, subsidies, livelihood assistance, and financial support programs",
}

export default function FinancialProgramsPage() {
  return (
    <div className="min-h-screen">

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Financial Aid Programs</h1>
        <p className="text-gray-600 mb-8">Government cash transfers, subsidies, livelihood assistance, and financial support programs</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium">We are adding programs to this page.</p>
          <p className="text-blue-600 text-sm mt-2">Check back soon for program details, who can apply, and how to apply.</p>
        </div>
      </main>
    </div>
  )
}
