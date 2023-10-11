"use client"

import { useEffect } from "react"
import { useAppSelector } from "@/hooks/redux-hooks"

export const SaveCarts = () => {
  const carts = useAppSelector(state => state.carts)

  useEffect(() => {
    if (typeof window !== "undefined") {
      carts.length
        ? window.localStorage.setItem("carts", JSON.stringify(carts))
        : window.localStorage.removeItem("carts")
    }
  }, [carts])

  return null
}
