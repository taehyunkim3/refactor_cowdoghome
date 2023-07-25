import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import { pageIndexReducer, topBannerReducer } from "../reducers";
import { useReducer } from "react";

export const store = configureStore({
  reducer: {
    pageIndex: pageIndexReducer,
    topBanner: topBannerReducer,
    auth: authReducer,
  },
});
