"use client"

import { useEffect } from "react"
import { useCartStore } from "@/store"

export const SaveCarts = () => {
  const { carts } = useCartStore()

  useEffect(() => {
    carts.length
      ? localStorage.setItem("carts", JSON.stringify(carts))
      : localStorage.removeItem("carts")
  }, [carts])

  return null
}
