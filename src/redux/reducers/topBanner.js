import { createSlice } from "@reduxjs/toolkit";

const topBanner = createSlice({
  name: "topBanner",
  initialState: true,
  reducers: {
    closeTopBanner: (state) => !state,
  },
});

export const { closeTopBanner } = topBanner.actions;

export const topBannerReducer = topBanner.reducer;
