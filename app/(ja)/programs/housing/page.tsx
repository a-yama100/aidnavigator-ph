import { ProgramPage } from "@/components/ProgramPage"
import { pageMetadata } from "../../../_meta"

export const metadata = pageMetadata("ja", "housing")

export default function Page() {
  return <ProgramPage lang="ja" program="housing" />
}
