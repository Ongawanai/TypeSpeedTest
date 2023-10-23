import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TextType = {
  char: string;
  class: string;
};

type TextState = {
  text: TextType[];
  currentCharIndex: number;
  currentWrongIndex: number | boolean;
  numOfErrors: number;
  numOfPressings: number;
};

const initialState: TextState = {
  text: [],
  currentCharIndex: 0,
  currentWrongIndex: false,
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
      console.log(action.payload);
      state.currentCharIndex = action.payload;
    },
    setWrongIndex(state, action: PayloadAction<number | boolean>) {
      state.currentWrongIndex = action.payload;
    },
    setNumOfErrors(state, action: PayloadAction<number>) {
      state.numOfErrors = action.payload;
    },
    addNumOfPressings(state) {
      state.numOfPressings = +1;
    },
  },
});

export const { setText, setCurrIndex, setWrongIndex, addNumOfPressings, setNumOfErrors } = textSlice.actions;

export default textSlice.reducer;
