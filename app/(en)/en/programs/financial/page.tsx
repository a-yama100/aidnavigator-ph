import { ProgramPage } from "@/components/ProgramPage"
import { pageMetadata } from "../../../../_meta"

export const metadata = pageMetadata("en", "financial")

export default function Page() {
  return <ProgramPage lang="en" program="financial" />
}
