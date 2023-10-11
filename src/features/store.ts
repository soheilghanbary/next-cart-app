import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import { apiSlice } from "./slices/posts-api-slice";

const store = configureStore({
  reducer: {
    carts: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
