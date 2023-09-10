import { CartList } from "../CartList"
import { Logo } from "../Logo"
import { ThemeToggle } from "../ThemeToggle"

export const SiteHeader = async () => {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b bg-background shadow-sm">
      <section className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <CartList />
        </nav>
      </section>
    </header>
  )
}
