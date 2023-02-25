import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const { label, input } = props;
  return (
    <div className={classes.input}>
      <label htmlFor="item price">{label}</label>
      <input {...input} ref={ref} />
    </div>
  );
});

export default Input;
