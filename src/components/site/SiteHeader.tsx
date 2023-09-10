import { CartList } from "../CartList"
import { Logo } from "../Logo"
import { SearchBox } from "../SearchBox"
import { ThemeToggle } from "../ThemeToggle"

export const SiteHeader = async () => {
  return (
    <header className="sticky top-0 z-50 shrink-0 bg-background border-b shadow-sm">
      <section className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <SearchBox />
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <CartList />
        </nav>
      </section>
    </header>
  )
}
