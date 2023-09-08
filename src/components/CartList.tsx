"use client"

import { useCartStore } from "@/store"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"
import { Pre } from "./Pre"
import { Button } from "./ui/button"

export function CartList() {
  const { carts } = useCartStore()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="relative">
          <Icons.cart className="h-4 w-4" />
          {carts.length ? (
            <span className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary p-1 text-center text-xs text-white">
              {carts.length}
            </span>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-right">لیست سبد خرید شما</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <pre>{JSON.stringify(carts, null, 2)}</pre>
      </SheetContent>
    </Sheet>
  )
}
