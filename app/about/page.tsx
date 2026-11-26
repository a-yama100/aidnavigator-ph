const IT_START_YEAR = 1990

export const metadata = {
  title: "About AidNavigator PH",
  description: "About AidNavigator PH, a guide to Philippine government aid programs built by PH AI Works.",
}

export default function AboutPage() {
  const itYears = new Date().getFullYear() - IT_START_YEAR
  return (
    <div className="min-h-screen">

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About AidNavigator PH</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            AidNavigator PH brings Philippine government aid programs together in one place:
            cash aid, healthcare, education, and housing support.
          </p>
          <p>
            Our goal is to help Filipino citizens, NGOs, barangay offices, and social workers
            quickly find the right programs, see who can apply, and know which documents to prepare.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-3">Planned Features</h2>
          <p>We are building the program database now. These features are planned:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>One program list covering DSWD, DOLE, DepEd, CHED, DOH, TESDA, Pag-IBIG, NHA, and more</li>
            <li>Eligibility requirements you can filter</li>
            <li>Application checklists for each program</li>
            <li>Alerts when a program changes</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-3">Built by PH AI Works</h2>
          <p>
            AidNavigator PH is developed and maintained by{" "}
            <a href="https://www.phaiworks.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              PH AI Works
            </a>
            , an AI solutions company based in the Philippines with {itYears}+ years of IT experience.
          </p>
        </div>
      </main>
    </div>
  )
}
