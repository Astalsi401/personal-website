import { useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

export type CurrentPostTitleType = {
  title: string;
  active: boolean;
};

type State = {
  isDark: boolean;
  sidebarActive: boolean;
  sidebarID: string;
  sidebarAnchorID: string;
  searchBarActive: boolean;
  searchString: string;
  imgGalaryActive: boolean;
  imgGalarySrc: string;
  currentPostTitles: CurrentPostTitleType[];
};

const counterSlice = createSlice({
  name: "state",
  initialState: {
    isDark: false,
    sidebarActive: false,
    sidebarID: "sidebar",
    sidebarAnchorID: "sidebarAnchor",
    searchBarActive: false,
    searchString: "",
    imgGalaryActive: false,
    imgGalarySrc: "",
    currentPostTitles: [],
  } as State,
  reducers: {
    updateStore: (state: any, { payload }: PayloadAction<{ [key: string]: boolean | string | CurrentPostTitleType[] }>) => Object.keys(payload).forEach((key) => (state[key] = payload[key])),
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const { updateStore } = counterSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const imgGallaryHeight = 150;

export default store;
