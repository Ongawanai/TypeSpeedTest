import { FunctionComponent, ChangeEvent, ComponentPropsWithoutRef } from "react";
import { useAppDispatch } from "../hooks/hooks";

import "../style/modal.css";
import { setStart } from "../slices/testSlice";

type ModalTypeProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

const ModalWindow: FunctionComponent<ModalTypeProps> = ({ children, title }) => {
  return (
    <div className='modal-blackout'>
      <div className='modal'>
        <h2 className='header-text modal-text'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
