import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "displayTab",
  initialState: false,
  reducers: {
    displayBottomTab(state, action) {
      return action.payload;
    },
  },
});

export const { displayBottomTab } = displaySlice.actions;
export default displaySlice.reducer;
