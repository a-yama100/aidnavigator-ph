import { ProgramPage } from "@/components/ProgramPage"
import { pageMetadata } from "../../../_meta"

export const metadata = pageMetadata("ja", "health")

export default function Page() {
  return <ProgramPage lang="ja" program="health" />
}
