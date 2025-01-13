import { configureStore } from "@reduxjs/toolkit";
import { noteApis, noteSlices } from "../features/note";

export const store = configureStore({
  reducer: {
    latestNote: noteSlices.reducer,
    [noteApis.reducerPath]: noteApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApis.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
