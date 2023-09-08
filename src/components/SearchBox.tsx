"use client"

import { useEffect, useState } from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const SearchBox = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant={"outline"}
        className="w-full max-w-[200px] px-4 text-muted-foreground"
      >
        <Icons.search className="ml-2 h-4 w-4" />
        جستجوی محصول
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <Input type="text" placeholder="جستجو بر اساس عنوان" />
        </DialogContent>
      </Dialog>
    </>
  )
}
