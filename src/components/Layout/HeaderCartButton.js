import CartIcon from "../Carts/CartIcon";
import classNames from "classnames/bind";

import classes from "./HeaderCartButton.module.css";

const cx = classNames.bind(classes);

function HeaderCartButton() {
  return (
    <button className={cx("button")}>
      <span className={cx("icon")}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={cx("badge")}>3</span>
    </button>
  );
}
export default HeaderCartButton;
