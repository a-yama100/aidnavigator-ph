import "../globals.css"
import { RootShell } from "@/components/RootShell"

export { layoutMetadata as metadata } from "../_meta"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="ja">{children}</RootShell>
}
