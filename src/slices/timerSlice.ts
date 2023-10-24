import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TimerState = {
  isTimerStarted: boolean;
  seconds: number;
};

const initialState: TimerState = {
  isTimerStarted: false,
  seconds: 0,
};

const timerSlice = createSlice({
  name: "timerSlice",
  initialState,
  reducers: {
    startTimer(state, action: PayloadAction<boolean>) {
      state.isTimerStarted = action.payload;
    },
    increaseSeconds(state) {
      state.seconds += 1;
    },
    resetSeconds(state) {
      state.seconds = 0;
    },
  },
});

export const { startTimer, increaseSeconds, resetSeconds } = timerSlice.actions;

export default timerSlice.reducer;
