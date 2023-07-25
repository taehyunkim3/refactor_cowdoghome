import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import { pageIndexReducer, topBannerReducer } from "../reducers";

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexReducer,
    topBanner: topBannerReducer,
    auth: authReducer,
  },
});
