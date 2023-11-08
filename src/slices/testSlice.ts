import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TestState = {
  isStarted: boolean;
  isFinished: boolean;
  numOfSentenses: number;
};

const initialState: TestState = {
  isStarted: false,
  isFinished: false,
  numOfSentenses: 3,
};

const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    setStart(state, action: PayloadAction<boolean>) {
      state.isStarted = action.payload;
    },
    setFinish(state, action: PayloadAction<boolean>) {
      state.isFinished = action.payload;
    },
    setNumOfSentenses(state, action: PayloadAction<number>) {
      state.numOfSentenses = action.payload;
    },
    resetTest(state) {
      state.isStarted = false;
      state.isFinished = false;
      state.numOfSentenses = 3;
    },
  },
});

export const { setStart, setFinish, setNumOfSentenses, resetTest } = testSlice.actions;

export default testSlice.reducer;
