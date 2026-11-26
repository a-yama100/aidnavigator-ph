import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    title: "Financial Aid",
    description: "Cash aid, subsidies, and livelihood programs from DSWD, DOLE, and other agencies",
    href: "/programs/financial",
    icon: "peso-sign",
  },
  {
    title: "Healthcare",
    description: "PhilHealth coverage, DOH programs, and help with medical costs",
    href: "/programs/health",
    icon: "heart-pulse",
  },
  {
    title: "Education",
    description: "DepEd programs, CHED scholarships, TESDA training, and financial aid for students",
    href: "/programs/education",
    icon: "graduation-cap",
  },
  {
    title: "Housing",
    description: "Pag-IBIG loans, NHA housing, low-cost housing, and shelter assistance",
    href: "/programs/housing",
    icon: "house",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Find Government Aid Programs You Qualify For
          </h1>
          <Image
            src="/media/hero.webp"
            alt="A social worker at a barangay help desk explains an aid program checklist to an elderly couple"
            width={1600}
            height={679}
            priority
            sizes="(max-width: 896px) 100vw, 864px"
            className="w-full h-auto rounded-xl shadow-lg mb-8"
          />
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Find Philippine government programs for cash aid, healthcare, education, and housing in one place.
            Eligibility checks and application checklists are coming soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs/financial"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Programs
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
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">Coming soon</span>
              </div>
              <p className="text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">What AidNavigator PH Will Offer</h2>
          <p className="text-center text-gray-600 mb-10">These features are in development.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold mb-2">Program Database</h3>
              <p className="text-sm text-gray-600">A searchable list of aid programs from all major government agencies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold mb-2">Eligibility Checker</h3>
              <p className="text-sm text-gray-600">Answer a few questions to see which programs may fit your situation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold mb-2">Application Checklists</h3>
              <p className="text-sm text-gray-600">Step-by-step guides with the documents you need and where to apply</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
