import React from "react";
import { ReactComponent as Icon } from "../assets/arrow-left.svg";

const Button = (props) => {
  return (
    <button className="Button" {...props}>
      {props.startIcon && <Icon />} {props.children}
    </button>
  );
};

export default Button;
