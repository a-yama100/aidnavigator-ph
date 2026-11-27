import { ProgramPage } from "@/components/ProgramPage"
import { pageMetadata } from "../../../../_meta"

export const metadata = pageMetadata("en", "health")

export default function Page() {
  return <ProgramPage lang="en" program="health" />
}
