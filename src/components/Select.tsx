import { ComponentPropsWithoutRef, FunctionComponent } from "react";

import "../style/select.css";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  defaultValue: number;
  options: {
    value: number;
    name: string;
  }[];
}

const Select: FunctionComponent<SelectProps> = ({ defaultValue, options, ...props }) => {
  return (
    <select className='uppercase-text select' defaultValue={defaultValue} {...props}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
