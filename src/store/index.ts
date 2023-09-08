import { toast } from "sonner"
import { create } from "zustand"

type CartItem = Product & {
  quantity: number
}

type CartStore = {
  carts: CartItem[]
  addCart: (item: Product) => void
  removeCart: (itemId: number) => void
  updateQuantity: (itemId: number, newQuantity: number) => void
}

export const useCartStore = create<CartStore>((set) => ({
  carts:
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("carts")!) || []
      : [],
  addCart: (item) => {
    toast.success("محصول به سبد خرید اضافه شد")
    set((state) => ({ carts: [...state.carts, { ...item, quantity: 1 }] }))
  },
  removeCart: (itemId) => {
    toast.error("محصول از سبد خرید حذف شد")
    set((state) => ({
      carts: state.carts.filter((item) => item.id !== itemId),
    }))
  },
  updateQuantity: (itemId, newQuantity) =>
    set((state) => ({
      carts: state.carts.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    })),
}))
