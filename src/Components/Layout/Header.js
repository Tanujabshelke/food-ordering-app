import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  const { onShowCart } = props;

  return (
    <Fragment>
      <header className={classes.header}>
        <p>Food App</p>
        <HeaderButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={
            "https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"
          }
          alt="Table full of Food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
