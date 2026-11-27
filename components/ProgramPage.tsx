import { META, PROGRAM_NOTICE, type Lang, type ProgramKey } from "@/lib/content"

// 制度の分野のページ（金銭的な支援・医療・教育・住宅）。h1 と説明は META の文
export function ProgramPage({ lang, program }: { lang: Lang; program: ProgramKey }) {
  const m = META[lang][program]
  const notice = PROGRAM_NOTICE[lang]
  return (
    <div className="min-h-screen">

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{m.title}</h1>
        <p className="text-gray-600 mb-8">{m.description}</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium">{notice.title}</p>
          <p className="text-blue-600 text-sm mt-2">{notice.body}</p>
        </div>
      </main>
    </div>
  )
}
