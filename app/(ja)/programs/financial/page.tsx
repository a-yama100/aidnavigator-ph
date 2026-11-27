import { ProgramPage } from "@/components/ProgramPage"
import { pageMetadata } from "../../../_meta"

export const metadata = pageMetadata("ja", "financial")

export default function Page() {
  return <ProgramPage lang="ja" program="financial" />
}
