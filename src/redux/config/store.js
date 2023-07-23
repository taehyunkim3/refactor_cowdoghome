import { configureStore } from "@reduxjs/toolkit";
import { pageIndexReducer } from "../reducers";

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexReducer,
  },
});
