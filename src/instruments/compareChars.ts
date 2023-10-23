import { TextType } from "../slices/textSlice";

type CompareCharsType = (
  charsArray: TextType[],
  currentIndex: number,
  pressedKey: string,
  errorIndex: number | boolean
) => [resultArr: TextType[], currentIndex: number, errors: number | boolean];

export const compareChars: CompareCharsType = (charsArray, currentIndex, pressedKey, errorIndex) => {
  let newCurrentIndex = currentIndex;
  let newErrorIndex = errorIndex;
  const result = charsArray.map((letter: TextType, index: number) => {
    if (index === currentIndex && letter.char === pressedKey) {
      newCurrentIndex += 1;
      return {
        ...letter,
        class: "right-char",
      };
    } else if (index === currentIndex && letter.char !== pressedKey) {
      newErrorIndex = errorIndex;
      return {
        ...letter,
        class: "wrong-char",
      };
    }
    return letter;
  });

  return [result, newCurrentIndex, newErrorIndex];
};
