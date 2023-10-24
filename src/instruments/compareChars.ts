import { TextType } from "../slices/textSlice";

type CompareCharsType = (
  charsArray: TextType[],
  currentIndex: number,
  pressedKey: string,
  errorCount: number
) => [resultArr: TextType[], currentIndex: number, errors: number];

export const compareChars: CompareCharsType = (charsArray, currentIndex, pressedKey, errorCount) => {
  let newCurrentIndex = currentIndex;
  let newErrorCount = errorCount;
  const result = charsArray.map((letter: TextType, index: number) => {
    if (index === currentIndex && letter.char === pressedKey) {
      newCurrentIndex += 1;
      return {
        ...letter,
        class: "right-char",
      };
    } else if (index === currentIndex && letter.char !== pressedKey) {
      newErrorCount += 1;
      return {
        ...letter,
        class: "wrong-char",
      };
    }
    return letter;
  });

  return [result, newCurrentIndex, newErrorCount];
};
