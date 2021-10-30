import React from "react";
import { ReactComponent as Icon } from "../assets/arrow-left.svg";

const Button = ({onClick, startIcon, children}) => {
  return (
    <button className="Button" onClick={onClick}>
      {startIcon && <Icon />} {children}
    </button>
  );
};

export default Button;
