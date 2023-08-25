import React, { forwardRef } from "react";
import classes from "./MyInput.module.css";

const MyInput = forwardRef ((props, ref) => {
  return <input className={classes.myInput} {...props} ref={ref}/>;
});

export default MyInput;
