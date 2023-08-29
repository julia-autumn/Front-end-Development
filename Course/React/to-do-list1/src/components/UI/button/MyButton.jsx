import React, { useContext } from "react";
import classes from "./MyButton.module.css";
import setDarkMode from "../../setDarkMode";

const MyButton = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const className = "myBtn-" + theme;
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default MyButton;
