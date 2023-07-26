import { configureStore } from "@reduxjs/toolkit";
import { pageIndexReducer, topBannerReducer } from "../reducers";
import { useReducer } from "react";

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexReducer,
    topBanner: topBannerReducer,
  },
});
