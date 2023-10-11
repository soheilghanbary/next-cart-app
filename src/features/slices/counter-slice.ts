import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 2;
    },
    decrement(state) {
      state.value -= 2;
    },
    reset(state) {
      state.value = 0;
    },
    amount(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, reset, amount } = counterSlice.actions;
export default counterSlice.reducer;
