import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "state",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleDarkMode: (state, { payload: { isDark } }) => {
      state.isDark = isDark;
    },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export const { toggleDarkMode } = counterSlice.actions;
