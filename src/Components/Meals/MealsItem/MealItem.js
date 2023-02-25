import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ props }) => {
  const { name, price, description, id } = props;
  const cartCtx = useContext(CartContext);

  const Price = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{Price}</p>
      </div>
      <div>
        <MealItemForm id={id} addToCartHandler={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
