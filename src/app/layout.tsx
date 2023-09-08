import "@/styles/globals.css"

import type { Metadata } from "next"
import { irsans } from "@/assets/fonts"

import { SiteLayout } from "@/components/site/SiteLayout"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={irsans.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
