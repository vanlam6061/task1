import { Fragment } from "react";
import classNames from "classnames/bind";
import mealImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const cx = classNames.bind(classes);

function Header(props) {
  return (
    <Fragment>
      <header className={cx("header")}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={cx("main-header")}>
        <img src={mealImage} alt="table full of delicious foods" />
      </div>
    </Fragment>
  );
}
export default Header;
