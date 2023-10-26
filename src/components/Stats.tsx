import { FunctionComponent, useEffect, useState } from "react";
import { countAccuracy, countSpeed } from "../instruments/speedLogic";
import { increaseSeconds, resetSeconds } from "../slices/timerSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Button from "./Button";
import { resetTest, setFinish } from "../slices/testSlice";
import { resetText } from "../slices/textSlice";

const Stats: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.textSlice.numOfErrors);
  const pressingCount = useAppSelector((state) => state.textSlice.numOfPressings);
  const time = useAppSelector((state) => state.timerSlice.seconds);
  const isTimerStarted = useAppSelector((state) => state.timerSlice.isTimerStarted);
  const isFinished = useAppSelector((state) => state.testSlice.isFinished);

  const [speed, setSpeed] = useState("0.00");
  const [accuracy, setAccuracy] = useState("0.00");

  useEffect(() => {
    const correctLetters = pressingCount - errors;

    setAccuracy(countAccuracy(errors, pressingCount));
    setSpeed(countSpeed(correctLetters, time));
  }, [errors, pressingCount, time]);

  useEffect(() => {
    if (isTimerStarted) {
      const timer = setTimeout(() => {
        dispatch(increaseSeconds());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isTimerStarted, time, dispatch]);

  const restart = () => {
    dispatch(resetSeconds());
    dispatch(resetTest());
    dispatch(resetText());

    if (isFinished) {
      dispatch(setFinish(false));
    }
  };

  return (
    <div className='stats-container'>
      <div>
        <p className='stat-header uppercase-text stat-title'>скорость</p>
        <p className='uppercase-text'>{speed} CPM</p>
      </div>
      <div>
        <p className='stat-header uppercase-text stat-title'>аккуратность</p>
        <p className='uppercase-text'>{accuracy} %</p>
      </div>
      <Button btnText='Начать заново' onClick={restart}></Button>
    </div>
  );
};

export default Stats;
