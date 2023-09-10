"use client"

import { useMemo } from "react"
import { useCartStore } from "@/store"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PaymentPage() {
  const { carts } = useCartStore()
  const totalPrice = useMemo(
    () => carts.reduce((total, cart) => total + cart.price * cart.quantity, 0),
    [carts]
  )
  return (
    <div className="mx-auto mt-4 grid max-w-sm gap-4 rounded-lg border bg-background p-8 shadow-sm">
      <h1 className="mb-8 text-center text-2xl font-black">پرداخت نهایی</h1>
      <div className="grid gap-2">
        <Label>نام و نام خانوادگی</Label>
        <Input type="text" />
      </div>
      <div className="grid gap-2">
        <Label>شماره تلفن</Label>
        <Input type="text" />
      </div>
      <p className="rounded-md border bg-secondary px-3 py-2">
        قیمت نهایی :{totalPrice} ریال
      </p>
      <Button>ورود به درگاه پرداخت</Button>
    </div>
  )
}
