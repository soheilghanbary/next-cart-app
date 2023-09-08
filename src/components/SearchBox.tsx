import { Icons } from "./icons"
import { Button } from "./ui/button"

export const SearchBox = () => {
  return (
    <Button
      variant={"outline"}
      className="min-w-[240px] px-4 text-muted-foreground"
    >
      <Icons.search className="ml-2 h-4 w-4" />
      جستجوی محصول
    </Button>
  )
}
