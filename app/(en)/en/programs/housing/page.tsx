import { ProgramPage } from "@/components/ProgramPage"
import { pageMetadata } from "../../../../_meta"

export const metadata = pageMetadata("en", "housing")

export default function Page() {
  return <ProgramPage lang="en" program="housing" />
}
