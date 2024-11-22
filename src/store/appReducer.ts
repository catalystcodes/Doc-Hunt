import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
const initialState = {
  onBoarding: false,
};

const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    setOnboarding: (state, action) => {
      return { ...state, onBoarding: action.payload };
    },
  },
});

export const { setOnboarding } = appSlice.actions;

const persistConfig = {
  key: "app",
  storage: AsyncStorage,
};

const reducer = appSlice.reducer;

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
