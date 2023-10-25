import { FunctionComponent, useEffect, useState } from "react";
import { countAccuracy, countSpeed } from "../instruments/speedLogic";
import { increaseSeconds, resetSeconds } from "../slices/timerSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Button from "./Button";

const Stats: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.textSlice.numOfErrors);
  const pressingCount = useAppSelector((state) => state.textSlice.numOfPressings);
  const time = useAppSelector((state) => state.timerSlice.seconds);
  const isTimerStarted = useAppSelector((state) => state.timerSlice.isTimerStarted);

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

  return (
    <div className='stats'>
      <div>
        <p className='stat-header uppercase-text stat-title'>скорость</p>
        <p className='uppercase-text'>{speed} CPM</p>
      </div>
      <div>
        <p className='stat-header uppercase-text stat-title'>аккуратность</p>
        <p className='uppercase-text'>{accuracy} %</p>
      </div>
    </div>
  );
};

export default Stats;
