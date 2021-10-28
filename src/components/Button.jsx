import React from "react";
import { ReactComponent as Icon } from "../assets/arrow-left.svg";

const Button = ({ children, startIcon }) => {
  return (
    <button className="Button">
      {startIcon &&                                                                                                                                                                                                                                                                                                                           <Icon />} {children}
    </button>
  );
};

export default Button;
