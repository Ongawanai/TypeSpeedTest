import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./slices/testSlice";

const store = configureStore({
  reducer: {
    testSlice: testReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
