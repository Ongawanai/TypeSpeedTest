import { FunctionComponent, ChangeEvent } from "react";
import Select from "./Select";
import Button from "./Button";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

import "../style/modal.css";
import { setNumOfSentenses, setStart } from "../slices/testSlice";

const ModalWindow: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const sentences = useAppSelector((state) => state.testSlice.numOfSentenses);
  const sentencesOptions = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
  ];
  const changeSentences = (value: number) => dispatch(setNumOfSentenses(value));
  const testStart = () => dispatch(setStart(true));

  return (
    <div className='modal-blackout'>
      <div className='modal'>
        <h2 className='header-text modal-text'>Выбери количество предложений</h2>
        <Select
          id='select-senteces'
          defaultValue={sentences}
          options={sentencesOptions}
          onChange={(e) => {
            const num = Number(e.target.value);
            return changeSentences(num);
          }}
        />
        <Button btnText='start' onClick={testStart} />
      </div>
    </div>
  );
};

export default ModalWindow;
