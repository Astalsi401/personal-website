import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "state",
  initialState: {
    isDark: false,
    sidebarActive: false,
    sidebarID: "sidebar",
    sidebarAnchorID: "sidebarAnchor",
    currentPostTitles: [],
  },
  reducers: {
    updateStore: (state, { payload }) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export const { updateStore } = counterSlice.actions;
