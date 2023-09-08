import { CartList } from "../CartList"
import { Icons } from "../icons"
import { Logo } from "../Logo"
import { SearchBox } from "../SearchBox"
import { ThemeToggle } from "../ThemeToggle"
import { Button } from "../ui/button"

export const SiteHeader = async () => {
  return (
    <header className="sticky top-0 z-50 shrink-0 bg-background">
      <section className="container mx-auto flex items-center justify-between px-4 py-2 md:p-4">
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