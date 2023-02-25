import { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let enteredAmount = inputRef.current.value;
    let amount = +enteredAmount;

    if (enteredAmount.trim().length === 0 || amount < 0 || amount > 6) {
      setAmountIsValid(false);
      return;
    }
    return props.addToCartHandler(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label={"Amount"}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please entered valid amount</p>}
    </form>
  );
}

export default MealItemForm;
