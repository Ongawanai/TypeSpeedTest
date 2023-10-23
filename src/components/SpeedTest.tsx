import { FunctionComponent, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { TextType, addNumOfPressings, setCurrIndex, setNumOfErrors, setText, setWrongIndex } from "../slices/textSlice";
import { compareChars } from "../instruments/compareChars";

const Test: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const numOfSentences = useAppSelector((state) => state.testSlice.numOfSentenses);
  const currIndex = useAppSelector((state) => state.textSlice.currentCharIndex);
  const currWrongIndex = useAppSelector((state) => state.textSlice.currentWrongIndex);

  useEffect(() => {
    axios
      .get("https://fish-text.ru/get", {
        params: {
          type: "sentence",
          number: numOfSentences,
          format: "html",
        },
      })
      .then((responce) => {
        const text = responce.data
          .slice(3, -4)
          .split("")
          .map((char: string, index: number) => {
            if (index === currWrongIndex) {
              return { char, class: "wrong-char" };
            }
            return index === currIndex ? { char, class: "current-char" } : { char, class: "" };
          });
        dispatch(setText(text));
      });
  }, []);

  const testText = useAppSelector((state) => state.textSlice.text);

  useEffect(() => {
    const newText = testText.map((letter: TextType, index: number) => {
      if (index === currWrongIndex) {
        return { ...letter, class: "wrong-char" };
      }
      return index === currIndex ? { ...letter, class: "current-char" } : { ...letter, class: "" };
    });
    dispatch(setText(newText));
  }, [dispatch, currIndex]);

  useEffect(() => {
    if (currIndex < testText.length) {
      const keyPressHandler = (event: KeyboardEvent) => {
        const [newText, newIndex, newWrongIndex] = compareChars(testText, currIndex, event.key, currWrongIndex);
        dispatch(setCurrIndex(newIndex));
        dispatch(setWrongIndex(newWrongIndex));
        dispatch(setText(newText));
        dispatch(addNumOfPressings());
      };

      document.addEventListener("keypress", keyPressHandler);

      return () => {
        document.removeEventListener("keypress", keyPressHandler);
      };
    }
  }, [dispatch, testText]);

  return (
    <div>
      {testText.map((letter) => {
        return <span className={letter.class}>{letter.char}</span>;
      })}
    </div>
  );
};

export default Test;
