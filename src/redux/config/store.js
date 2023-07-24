import { configureStore } from "@reduxjs/toolkit";
import { pageIndexReducer, topBannerReducer } from "../reducers";

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexReducer,
    topBanner: topBannerReducer,
  },
});
