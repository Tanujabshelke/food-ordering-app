import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { onClose } = props;
  const cartCtx = useContext(CartContext);

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx?.items?.map((item) => {
        return (
          <CartItem
            props={item}
            id={item.id}
            onRemove={() => {
              cartCtx.removeItem(item.id);
            }}
            onAdd={() => {
              cartCtx.addItem({ ...item, amount: 1 });
            }}
          />
        );
      })}
    </ul>
  );
  const totalAmount = cartCtx.totalamount.toFixed(2);
  const hasItems = 1;
  // cartCtx.items.length > 0;

  return (
    <Modal onClose={onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
