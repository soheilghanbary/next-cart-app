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
  carts: JSON.parse(localStorage.getItem("carts")!) || [],
  addCart: (item) =>
    set((state) => ({ carts: [...state.carts, { ...item, quantity: 1 }] })),
  removeCart: (itemId) =>
    set((state) => ({
      carts: state.carts.filter((item) => item.id !== itemId),
    })),
  updateQuantity: (itemId, newQuantity) => {
    if (newQuantity === 0) {
      set((state) => ({
        carts: state.carts.filter((cart) => cart.id !== itemId),
      }))
    } else {
      set((state) => ({
        carts: state.carts.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ),
      }))
    }
  },
}))
