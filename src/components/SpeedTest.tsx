import { FunctionComponent, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { TextType, addNumOfPressings, resetText, setCurrIndex, setNumOfErrors, setText } from "../slices/textSlice";
import { compareChars } from "../instruments/compareChars";
import { resetSeconds, startTimer } from "../slices/timerSlice";
import { resetTest, setFinish } from "../slices/testSlice";
import Stats from "./Stats";
import ModalWindow from "./ModalWindow";
import Button from "./Button";

const Test: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const numOfSentences = useAppSelector((state) => state.testSlice.numOfSentenses);
  const currIndex = useAppSelector((state) => state.textSlice.currentCharIndex);
  const errorsCount = useAppSelector((state) => state.textSlice.numOfErrors);
  const isFinished = useAppSelector((state) => state.testSlice.isFinished);

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
            return index === currIndex ? { char, class: "current-char" } : { char, class: "" };
          });
        dispatch(setText(text));
      });
  }, []);

  const testText = useAppSelector((state) => state.textSlice.text);
  const pressingCount = useAppSelector((state) => state.textSlice.numOfPressings);

  const restart = () => {
    dispatch(resetSeconds());
    dispatch(resetTest());
    dispatch(resetText());

    if (isFinished) {
      dispatch(setFinish(false));
    }
  };

  useEffect(() => {
    const newText = testText.map((letter: TextType, index: number) => {
      if (index === currIndex) {
        return { ...letter, class: "current-char" };
      } else if (index < currIndex) {
        return { ...letter, class: "right-char" };
      }
      return { ...letter, class: "" };
    });
    dispatch(setText(newText));
  }, [dispatch, currIndex]);

  useEffect(() => {
    if (pressingCount === 1 && testText.length > 0) {
      dispatch(startTimer(true));
    }

    if (currIndex < testText.length) {
      const keyPressHandler = (event: KeyboardEvent) => {
        const [newText, newIndex, newErrorsCount] = compareChars(testText, currIndex, event.key, errorsCount);
        dispatch(setCurrIndex(newIndex));
        if (errorsCount !== newErrorsCount) {
          dispatch(setNumOfErrors(newErrorsCount));
        }
        dispatch(setText(newText));
        dispatch(addNumOfPressings());

        if (newIndex === testText.length) {
          dispatch(startTimer(false));
          dispatch(setFinish(true));
        }
      };

      document.addEventListener("keypress", keyPressHandler);

      return () => {
        document.removeEventListener("keypress", keyPressHandler);
      };
    }
  }, [dispatch, testText]);

  return (
    <div className='test-container'>
      <div>
        {testText.map((letter, index) => {
          return (
            <span className={letter.class} key={index}>
              {letter.char}
            </span>
          );
        })}
      </div>
      <div>
        <Stats />
        <Button btnText='Начать заново' onClick={restart}></Button>
      </div>
      {isFinished && (
        <ModalWindow title='Тест закончен!'>
          <Stats />
          <Button btnText='Начать заново' onClick={restart}></Button>
        </ModalWindow>
      )}
    </div>
  );
};

export default Test;
