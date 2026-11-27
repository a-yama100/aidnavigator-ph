// 日本語（/）と英語（/en）の文言。ページの部品はここから文言を読む（2026-11-27 日本語版を追加）
export type Lang = "ja" | "en"

export const SITE_URL = "https://aid.phaiworks.com"

export type PageKey = "home" | "about" | "financial" | "health" | "education" | "housing"
export type ProgramKey = "financial" | "health" | "education" | "housing"

// 言語を除いたパス（日本語のパスと同じ）
export const PAGE_PATH: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  financial: "/programs/financial",
  health: "/programs/health",
  education: "/programs/education",
  housing: "/programs/housing",
}

// 言語を除いたパスを、その言語の URL のパスにする（日本語は /…、英語は /en/…）
export function localePath(lang: Lang, path: string): string {
  if (lang === "ja") return path
  return path === "/" ? "/en" : "/en" + path
}

// URL のパスから言語の部分を除く（/en/about → /about、/en → /）
export function stripLang(pathname: string): string {
  if (pathname === "/en") return "/"
  if (pathname.startsWith("/en/")) return pathname.slice(3)
  return pathname || "/"
}

// 本サイト（PH AI Works）の URL。日本語はルート、英語は /en
export const PHAIWORKS: Record<Lang, { home: string; contact: string }> = {
  ja: { home: "https://www.phaiworks.com/", contact: "https://www.phaiworks.com/contact" },
  en: { home: "https://www.phaiworks.com/en", contact: "https://www.phaiworks.com/en/contact" },
}

// 題名・説明（検索結果と SNS に出る文）。about と制度の分野のページは、title を h1 にも使う（h1 の文字はここだけ）
export const META: Record<Lang, Record<PageKey, { title: string; description: string; ogTitle?: string; ogDescription?: string }>> = {
  ja: {
    home: {
      title: "AidNavigator PH｜フィリピン政府の支援制度ガイド",
      description:
        "フィリピン政府の支援制度を紹介するサイトです。現金給付、医療、教育、住宅の4分野を扱います。制度の一覧、申請資格の確認、申請書類のチェックリストは準備中です。",
      ogTitle: "AidNavigator PH｜フィリピン政府の支援制度ガイド",
      ogDescription: "フィリピン政府の現金給付、医療、教育、住宅の支援制度を紹介するサイトです。制度の検索は準備中です。",
    },
    about: {
      title: "AidNavigator PH について",
      description: "PH AI Works が開発する「AidNavigator PH」の目的と、提供する予定の機能を紹介します。",
    },
    financial: {
      title: "現金給付・生活支援の制度",
      description: "フィリピン政府による現金給付、補助金、生計支援などの制度を扱うページです。",
    },
    health: {
      title: "医療支援制度",
      description: "PhilHealth の保険給付、DOH（保健省）の医療支援、医療費の助成などを扱うページです。",
    },
    education: {
      title: "教育支援・奨学金制度",
      description: "DepEd（教育省）、CHED（高等教育委員会）、TESDA（技術教育技能開発庁）による奨学金、職業訓練、学生への経済的支援を扱うページです。",
    },
    housing: {
      title: "住宅支援制度",
      description: "Pag-IBIG の住宅ローン、NHA（国家住宅庁）の住宅供給、社会住宅など、住まいの確保を支援する制度を扱うページです。",
    },
  },
  en: {
    home: {
      title: "AidNavigator PH - Philippine Government Aid & Support Programs Database",
      description:
        "A guide to Philippine government aid programs for cash assistance, healthcare, education, and housing. Eligibility checks and application checklists are coming soon.",
      ogTitle: "AidNavigator PH - Philippine Government Aid & Support Programs",
      ogDescription: "Find and apply for Philippine government aid programs. Subsidies, healthcare, education, housing support.",
    },
    about: {
      title: "About AidNavigator PH",
      description: "About AidNavigator PH, a guide to Philippine government aid programs built by PH AI Works.",
    },
    financial: {
      title: "Financial Aid Programs",
      description: "Government cash transfers, subsidies, livelihood assistance, and financial support programs",
    },
    health: {
      title: "Healthcare Programs",
      description: "PhilHealth coverage, DOH programs, medical assistance, and health-related aid",
    },
    education: {
      title: "Education & Scholarship Programs",
      description: "DepEd, CHED, TESDA scholarships, training programs, and student financial assistance",
    },
    housing: {
      title: "Housing Programs",
      description: "Pag-IBIG housing loans, NHA programs, socialized housing, and shelter assistance",
    },
  },
}

export const KEYWORDS: Record<Lang, string[]> = {
  ja: ["フィリピン 政府 支援制度", "フィリピン 補助金", "PhilHealth", "4Ps", "DOLE", "DSWD", "フィリピン 奨学金", "フィリピン 住宅支援", "SSS", "Pag-IBIG", "フィリピン 高齢者 支援", "TUPAD", "フィリピン 現金給付"],
  en: ["Philippine government aid", "subsidy Philippines", "PhilHealth", "4Ps program", "DOLE assistance", "DSWD programs", "education scholarship Philippines", "housing program Philippines", "SSS benefits", "Pag-IBIG fund", "senior citizen benefits Philippines", "PWD benefits Philippines", "TUPAD program", "government financial assistance"],
}

// ナビとフッター
export const NAV: Record<Lang, {
  items: { key: PageKey; label: string }[]
  menu: string
  toggle: string
  footerProject: [string, string]
  footerAbout: string
  footerContact: string
}> = {
  ja: {
    items: [
      { key: "home", label: "ホーム" },
      { key: "financial", label: "現金給付・生活支援" },
      { key: "health", label: "医療" },
      { key: "education", label: "教育" },
      { key: "housing", label: "住宅" },
      { key: "about", label: "このサイトについて" },
    ],
    menu: "メニュー",
    toggle: "English",
    footerProject: ["運営: ", ""],
    footerAbout: "このサイトについて",
    footerContact: "お問い合わせ",
  },
  en: {
    items: [
      { key: "home", label: "Home" },
      { key: "financial", label: "Financial" },
      { key: "health", label: "Healthcare" },
      { key: "education", label: "Education" },
      { key: "housing", label: "Housing" },
      { key: "about", label: "About" },
    ],
    menu: "Menu",
    toggle: "日本語",
    footerProject: ["A project by ", ""],
    footerAbout: "About",
    footerContact: "Contact",
  },
}

// トップページ。h1 は heroTitle（h1 の文字はここだけ）
export const HOME: Record<Lang, {
  heroTitle: string
  heroImageAlt: string
  heroLead: [string, string]
  browse: string
  howItWorks: string
  categoriesTitle: string
  comingSoon: string
  categories: { key: ProgramKey; title: string; description: string }[]
  featuresTitle: string
  featuresLead: string
  features: { title: string; description: string }[]
}> = {
  ja: {
    heroTitle: "フィリピン政府の支援制度ガイド",
    heroImageAlt: "バランガイの相談窓口で、ソーシャルワーカーが高齢の夫婦にタブレットを見せながら支援制度を説明している様子",
    heroLead: [
      "フィリピン政府の現金給付、医療、教育、住宅の支援制度を紹介するサイトです。",
      "制度の一覧、申請資格の確認、申請書類のチェックリストは、現在準備中です。",
    ],
    browse: "分野別の制度を見る",
    howItWorks: "このサイトについて",
    categoriesTitle: "分野別の支援制度",
    comingSoon: "準備中",
    categories: [
      { key: "financial", title: "現金給付・生活支援", description: "DSWD（社会福祉開発省）や DOLE（労働雇用省）などによる現金給付、補助金、生計支援" },
      { key: "health", title: "医療", description: "PhilHealth の保険給付、DOH（保健省）の医療支援、医療費の助成" },
      { key: "education", title: "教育", description: "DepEd（教育省）の教育支援、CHED（高等教育委員会）の奨学金、TESDA（技術教育技能開発庁）の職業訓練、学生への経済的支援" },
      { key: "housing", title: "住宅", description: "Pag-IBIG の住宅ローン、NHA（国家住宅庁）の住宅供給、低価格住宅などの住宅支援" },
    ],
    featuresTitle: "提供予定の機能",
    featuresLead: "以下の機能は、現在開発中です。",
    features: [
      { title: "支援制度データベース", description: "主な政府機関の支援制度を、一覧で見たり検索したりできる機能です" },
      { title: "申請資格の確認", description: "いくつかの質問に答えると、申請できる可能性のある制度を確かめられます" },
      { title: "申請書類・手続きのチェックリスト", description: "申請に必要な書類と申請先を、手続きの流れに沿って確かめられる機能です" },
    ],
  },
  en: {
    heroTitle: "Find Government Aid Programs You Qualify For",
    heroImageAlt: "A social worker at a barangay help desk explains an aid program checklist to an elderly couple",
    heroLead: [
      "Find Philippine government programs for cash aid, healthcare, education, and housing in one place.",
      "Eligibility checks and application checklists are coming soon.",
    ],
    browse: "Browse Programs",
    howItWorks: "How It Works",
    categoriesTitle: "Support Program Categories",
    comingSoon: "Coming soon",
    categories: [
      { key: "financial", title: "Financial Aid", description: "Cash aid, subsidies, and livelihood programs from DSWD, DOLE, and other agencies" },
      { key: "health", title: "Healthcare", description: "PhilHealth coverage, DOH programs, and help with medical costs" },
      { key: "education", title: "Education", description: "DepEd programs, CHED scholarships, TESDA training, and financial aid for students" },
      { key: "housing", title: "Housing", description: "Pag-IBIG loans, NHA housing, low-cost housing, and shelter assistance" },
    ],
    featuresTitle: "What AidNavigator PH Will Offer",
    featuresLead: "These features are in development.",
    features: [
      { title: "Program Database", description: "A searchable list of aid programs from all major government agencies" },
      { title: "Eligibility Checker", description: "Answer a few questions to see which programs may fit your situation" },
      { title: "Application Checklists", description: "Step-by-step guides with the documents you need and where to apply" },
    ],
  },
}

// このサイトについて。h1 は META の about.title。itYears は IT の経験の年数（自動の計算）
export const ABOUT: Record<Lang, {
  paragraphs: string[]
  plannedTitle: string
  plannedLead: string
  planned: string[]
  builtTitle: string
  built: (itYears: number) => [string, string]
}> = {
  ja: {
    paragraphs: [
      "AidNavigator PH は、フィリピン政府の支援制度を分かりやすく紹介するためのサイトです。現金給付、医療、教育、住宅の4分野を扱います。",
      "主な利用者として、フィリピンの市民、NGO、バランガイの窓口、ソーシャルワーカーを想定しています。必要な支援制度を探し、申請資格と必要な書類まで確かめられるサイトを目指しています。",
    ],
    plannedTitle: "提供予定の機能",
    plannedLead: "現在、支援制度のデータベースを作っており、次の機能を提供する予定です。",
    planned: [
      "DSWD、DOLE、DepEd、CHED、DOH、TESDA、Pag-IBIG、NHA などによる支援制度の一覧",
      "申請の条件による支援制度の絞り込み",
      "制度別の申請チェックリスト",
      "支援制度が変わったときのお知らせ",
    ],
    builtTitle: "開発元: PH AI Works",
    built: (itYears) => [
      "AidNavigator PH は、フィリピンを拠点とする AI ソリューション企業 ",
      ` が開発・運営しています。PH AI Works は IT の分野で ${itYears} 年以上の実績があります。`,
    ],
  },
  en: {
    paragraphs: [
      "AidNavigator PH brings Philippine government aid programs together in one place: cash aid, healthcare, education, and housing support.",
      "Our goal is to help Filipino citizens, NGOs, barangay offices, and social workers quickly find the right programs, see who can apply, and know which documents to prepare.",
    ],
    plannedTitle: "Planned Features",
    plannedLead: "We are building the program database now. These features are planned:",
    planned: [
      "One program list covering DSWD, DOLE, DepEd, CHED, DOH, TESDA, Pag-IBIG, NHA, and more",
      "Eligibility requirements you can filter",
      "Application checklists for each program",
      "Alerts when a program changes",
    ],
    builtTitle: "Built by PH AI Works",
    built: (itYears) => [
      "AidNavigator PH is developed and maintained by ",
      `, an AI solutions company based in the Philippines with ${itYears}+ years of IT experience.`,
    ],
  },
}

// 制度の分野のページ。h1 と説明は META と同じ文
export const PROGRAM_NOTICE: Record<Lang, { title: string; body: string }> = {
  ja: {
    title: "このページでは、支援制度の情報を順次公開する予定です。",
    body: "制度の概要、申請資格、申請方法などを掲載する予定です。",
  },
  en: {
    title: "We are adding programs to this page.",
    body: "Check back soon for program details, who can apply, and how to apply.",
  },
}
