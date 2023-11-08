import { FunctionComponent } from "react";
import "./style/App.css";
import "./style/fonts.css";
import "./style/test.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpeedTest from "./components/SpeedTest";
import ModalWindow from "./components/ModalWindow";
import Button from "./components/Button";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setNumOfSentenses, setStart } from "./slices/testSlice";
import Select from "./components/Select";

const App: FunctionComponent = () => {
  const isStarted = useAppSelector((state) => state.testSlice.isStarted);
  const dispatch = useAppDispatch();
  const sentences = useAppSelector((state) => state.testSlice.numOfSentenses);
  const sentencesOptions = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
  ];
  const changeSentences = (value: number) => dispatch(setNumOfSentenses(value));
  const testStart = () => dispatch(setStart(true));

  return (
    <>
      <Header />
      <div className='container main'>
        {isStarted ? (
          <SpeedTest />
        ) : (
          <ModalWindow title='Выбери количество предложений'>
            <Select
              id='select-senteces'
              defaultValue={sentences}
              options={sentencesOptions}
              onChange={(e) => {
                const num = Number(e.target.value);
                return changeSentences(num);
              }}
            />

            <Button btnText='Начнём!' onClick={testStart} />
          </ModalWindow>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
