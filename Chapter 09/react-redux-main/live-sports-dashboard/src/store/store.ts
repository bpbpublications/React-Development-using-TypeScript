import { configureStore } from "@reduxjs/toolkit";
import { sportsReducer } from "./sportsReducer"; // Adjust import path as necessary

const store = configureStore({
  reducer: {
    sports: sportsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
