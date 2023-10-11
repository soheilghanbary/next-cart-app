import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = Product & {
  quantity: number
}

const initialCartState = JSON.parse(localStorage.getItem('carts') || '[]') as CartItem[];

const cartSlice = createSlice({
  name: "carts",
  initialState: initialCartState,
  reducers: {
    addCart(state, action: PayloadAction<Product>) {
      return state.concat({ ...action.payload, quantity: 1 })
    },
    removeCart(state, action: PayloadAction<number>) {
      return state.filter(cart => cart.id !== action.payload)
    },
    updateQuantity(state, action: PayloadAction<{ id: number, quantity: number}>) {
      return state.map(cart => cart.id === action.payload.id ? { ...cart, quantity: action.payload.quantity } : cart)
    },
    clear(state) {
      return state = []
    },
  },
});

export const { addCart, removeCart, updateQuantity, clear } = cartSlice.actions;
export default cartSlice.reducer;