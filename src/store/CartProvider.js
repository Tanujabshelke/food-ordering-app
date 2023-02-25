import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      let updatedTotalAmount =
        state.totalamount + action.item.price * action.item.amount;

      let existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      let existingCartItem = state.items[existingCartItemIndex];
      let updatedItem, updatedItems;
      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return { items: updatedItems, totalamount: updatedTotalAmount };

    case "REMOVE":
      let itemToBeRemove, removeCartItemIndex, updatedItemsAfterRemove;
      if (state.items.length > 0) {
        removeCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
      }
      itemToBeRemove = state.items[removeCartItemIndex];

      if (itemToBeRemove.amount === 1) {
        updatedItemsAfterRemove = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        let updatedItem = {
          ...itemToBeRemove,
          amount: itemToBeRemove.amount - 1,
        };

        updatedItemsAfterRemove = [...state.items];
        updatedItemsAfterRemove[removeCartItemIndex] = updatedItem;
      }

      let updatedTotalamount = state.totalamount - itemToBeRemove.price;

      return {
        items: updatedItemsAfterRemove,
        totalamount: updatedTotalamount,
      };

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
