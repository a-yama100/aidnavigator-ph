import { AboutPage } from "@/components/AboutPage"
import { pageMetadata } from "../../../_meta"

export const metadata = pageMetadata("en", "about")

export default function Page() {
  return <AboutPage lang="en" />
}
