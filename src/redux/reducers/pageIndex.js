import { createSlice } from "@reduxjs/toolkit";

const pageIndex = createSlice({
  name: "pageIndex",
  initialState: 1,
  reducers: {
    incrementPageIndex: (state) => state + 1,
  },
});

export const { incrementPageIndex } = pageIndex.actions;

export const pageIndexReducer = pageIndex.reducer;
