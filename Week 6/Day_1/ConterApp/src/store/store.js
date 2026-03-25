

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

/*
Create Redux Store
*/
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});