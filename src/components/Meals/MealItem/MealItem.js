import classNames from "classnames/bind";

import classes from "./MealItem.module.css";
const cx = classNames.bind(classes);

function MealItem(props) {
  const price = `$${Math.floor(props.price).toFixed(2)}`;

  return (
    <li className={cx("meal")}>
      <div>
        <h3>{props.name}</h3>
        <div className={cx("description")}>{props.description}</div>

        <div className={cx("price")}>{price}</div>
      </div>
    </li>
  );
}
export default MealItem;
