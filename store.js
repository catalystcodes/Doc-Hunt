import { displayBottomTab } from "./src/utils/appSetting";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    displayBottomTab: displayBottomTab,
  },
});
