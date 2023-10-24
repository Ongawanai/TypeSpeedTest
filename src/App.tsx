import { FunctionComponent } from "react";
import "./style/App.css";
import "./style/fonts.css";
import "./style/test.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpeedTest from "./components/SpeedTest";
import ModalWindow from "./components/ModalWindow";
import Button from "./components/Button";
import { useAppSelector } from "./hooks/hooks";

const App: FunctionComponent = () => {
  const isStarted = useAppSelector((state) => state.testSlice.isStarted);

  return (
    <>
      <Header />
      <div className='container main'>{isStarted ? <SpeedTest /> : <ModalWindow />}</div>
      <Footer />
    </>
  );
};

export default App;
