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
  },
});

export const { setText, setCurrIndex, addNumOfPressings, setNumOfErrors } = textSlice.actions;

export default textSlice.reducer;
