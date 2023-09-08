import Link from "next/link"

import { Icons } from "./icons"

export const Logo = () => (
  <Link
    href={"/"}
    className="flex items-center gap-2 text-teal-500 dark:text-teal-400"
  >
    <Icons.logo className="h-5 w-5" />
    <h3 className="font-extrabold">کارتینو</h3>
  </Link>
)
