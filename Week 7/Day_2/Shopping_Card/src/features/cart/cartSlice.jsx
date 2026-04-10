import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // check if already exists
      const existing = state.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += 1; // increase quantity
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: () => {
      return [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;