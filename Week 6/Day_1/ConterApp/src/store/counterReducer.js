// src/store/counterReducer.js

import { createSlice } from "@reduxjs/toolkit";

/*
---------------------------------------
createSlice = reducer + actions
---------------------------------------
*/
const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {

    // increment action
    increment: (state) => {
      state.value += 1;
    },

    // decrement action
    decrement: (state) => {
      state.value -= 1;
    },

    // reset action
    reset: (state) => {
      state.value = 0;
    }

  }
});

/*
Export actions
*/
export const { increment, decrement, reset } = counterSlice.actions;

/*
Export reducer
*/
export default counterSlice.reducer;