import Link from "next/link"

import { Icons } from "./icons"

export const Logo = () => (
  <Link href={"/"} className="flex items-center gap-2 text-primary">
    <Icons.logo className="h-5 w-5" />
    <h3 className="font-bold">کارتینو</h3>
  </Link>
)
