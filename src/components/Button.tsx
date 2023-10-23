import { FunctionComponent, ComponentPropsWithoutRef } from "react";
import "../style/button.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  btnText: string;
}

const Button: FunctionComponent<ButtonProps> = ({ btnText, ...props }) => {
  return (
    <button className='uppercase-text button-standart' {...props}>
      {btnText}
    </button>
  );
};

export default Button;
