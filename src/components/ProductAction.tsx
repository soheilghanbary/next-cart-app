"use client"

import dynamic from "next/dynamic"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks"
import { addCart, removeCart, updateQuantity } from "@/features/slices/cart-slice"

const ProductEvents = (product: Product) => {
  const carts = useAppSelector(state => state.carts)
  const dispatch = useAppDispatch()
  // const { carts, addCart, updateQuantity, removeCart } = useCartStore()
  const isAddedtoCart = carts.find((cart) => cart.id === product.id)

  return (
    <>
      {isAddedtoCart ? (
        <div className="flex flex-1 items-center gap-4">
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() =>
              dispatch(updateQuantity({ id: isAddedtoCart.id , quantity: isAddedtoCart.quantity + 1}))
            }
          >
            <Icons.plus className="h-4 w-4" />
          </Button>
          {isAddedtoCart.quantity}
          {isAddedtoCart.quantity === 1 ? (
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => dispatch(removeCart(isAddedtoCart.id))}
            >
              <Icons.trash className="h-4 w-4 text-rose-500" />
            </Button>
          ) : (
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() =>
                // dispatch(updateQuantity(isAddedtoCart.id, isAddedtoCart.quantity - 1))
              dispatch(updateQuantity({ id: isAddedtoCart.id , quantity: isAddedtoCart.quantity - 1}))
              }
            >
              <Icons.min className="h-4 w-4" />
            </Button>
          )}
        </div>
      ) : (
        <Button onClick={() => dispatch(addCart(product))} className="w-fit">
          <Icons.shoping className="ml-2 h-4 w-4" />
          افزودن به سبد خرید
        </Button>
      )}
    </>
  )
}

const ProductEventsClient = dynamic(() => Promise.resolve(ProductEvents), {
  loading: () => <Skeleton className="h-9 w-32"></Skeleton>,
  ssr: false,
})

export const ProductAction = (product: Product) => {
  return <ProductEventsClient {...product} />
}
