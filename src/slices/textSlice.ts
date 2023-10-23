import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TestState = {
  text: string;
  currentCharIndex: number;
  numOfErrors: number;
  numOfPressings: number;
};

const initialState: TestState = {
  text: "",
  currentCharIndex: 0,
  numOfErrors: 0,
  numOfPressings: 0,
};

const textSlice = createSlice({
  name: "textSlice",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    setCurrIndex(state, action: PayloadAction<number>) {
      state.currentCharIndex = action.payload;
    },
    setNumOfErrors(state, action: PayloadAction<number>) {
      state.numOfErrors = action.payload;
    },
    setNumOfPressings(state, action: PayloadAction<number>) {
      state.numOfPressings = action.payload;
    },
  },
});

export const { setText, setCurrIndex, setNumOfPressings, setNumOfErrors } = textSlice.actions;

export default textSlice.reducer;
