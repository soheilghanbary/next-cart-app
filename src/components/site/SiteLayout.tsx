import { PropsWithChildren } from "react"

import { SiteHeader } from "@/components/site/SiteHeader"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/toast-provider"

import { SiteFooter } from "./SiteFooter"

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        enableColorScheme
        defaultTheme="light"
        disableTransitionOnChange
      >
        <SiteHeader />
        <main className="container mx-auto my-2 min-h-screen px-2">
          {children}
        </main>
        <SiteFooter />
      </ThemeProvider>
      <ToastProvider />
    </>
  )
}
