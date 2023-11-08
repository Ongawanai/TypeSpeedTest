import { FunctionComponent } from "react";

import "../style/modal.css";

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
