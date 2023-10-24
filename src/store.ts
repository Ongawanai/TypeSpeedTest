import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./slices/testSlice";
import textReducer from "./slices/textSlice";
import timerReducer from "./slices/timerSlice";

const store = configureStore({
  reducer: {
    testSlice: testReducer,
    textSlice: textReducer,
    timerSlice: timerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
