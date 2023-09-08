"use client"

import dynamic from "next/dynamic"
import { useCartStore } from "@/store"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"

const ProductEvents = (product: Product) => {
  const { carts, addCart, updateQuantity } = useCartStore()
  const isAddedtoCart = carts.find((cart) => cart.id === product.id)

  return (
    <>
      {isAddedtoCart ? (
        <div className="flex flex-1 items-center justify-center gap-4">
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() =>
              updateQuantity(isAddedtoCart.id, isAddedtoCart.quantity + 1)
            }
          >
            <Icons.plus className="h-4 w-4" />
          </Button>
          {isAddedtoCart.quantity}
          <Button
            size={"icon"}
            variant={"outline"}
            disabled={isAddedtoCart.quantity === 1}
            onClick={() =>
              updateQuantity(isAddedtoCart.id, isAddedtoCart.quantity - 1)
            }
          >
            <Icons.min className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button onClick={() => addCart(product)} className="w-full">
          افزودن به سبد خرید
        </Button>
      )}
    </>
  )
}

const ProductEventsClient = dynamic(() => Promise.resolve(ProductEvents), {
  loading: () => <Skeleton className="h-9 w-full"></Skeleton>,
  ssr: false,
})

export const ProductAction = (product: Product) => {
  return <ProductEventsClient {...product} />
}
