"use client"

import { useCartStore } from "@/store"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export const ProductAction = (product: Product) => {
  const { carts, addCart, updateQuantity, removeCart } = useCartStore()
  const isAddedtoCart = carts.find((cart) => cart.id === product.id)
  return (
    <>
      {isAddedtoCart?.quantity ? (
        <>
          <div className="flex items-center justify-around gap-4">
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() =>
                updateQuantity(isAddedtoCart.id, isAddedtoCart.quantity + 1)
              }
            >
              <Icons.right className="h-4 w-4" />
            </Button>
            {isAddedtoCart.quantity}
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() =>
                updateQuantity(isAddedtoCart.id, isAddedtoCart.quantity - 1)
              }
            >
              <Icons.left className="h-4 w-4" />
            </Button>
            <Button
              size={"icon"}
              variant={"destructive"}
              onClick={() => removeCart(product.id)}
            >
              <Icons.trash className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <Button onClick={() => addCart(product)} className="w-full">
          افزودن به سبد خرید
        </Button>
      )}
    </>
  )
}
