import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TextType = {
  char: string;
  class: string;
};

type TextState = {
  text: TextType[];
  currentCharIndex: number;
  numOfErrors: number;
  numOfPressings: number;
};

const initialState: TextState = {
  text: [],
  currentCharIndex: 0,
  numOfErrors: 0,
  numOfPressings: 0,
};

const textSlice = createSlice({
  name: "textSlice",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<TextType[]>) {
      state.text = action.payload;
    },
    setCurrIndex(state, action: PayloadAction<number>) {
      state.currentCharIndex = action.payload;
    },
    setNumOfErrors(state, action: PayloadAction<number>) {
      state.numOfErrors = action.payload;
    },
    addNumOfPressings(state) {
      state.numOfPressings += 1;
    },
    resetText(state) {
      state.currentCharIndex = 0;
      state.numOfPressings = 0;
      state.numOfErrors = 0;
    },
  },
});

export const { setText, setCurrIndex, addNumOfPressings, setNumOfErrors, resetText } = textSlice.actions;

export default textSlice.reducer;
