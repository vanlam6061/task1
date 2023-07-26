import { Fragment } from "react";
import classNames from "classnames/bind";

import classes from "./MealsSumary.module.css";
const cx = classNames.bind(classes);

const MealsSummary = () => {
  return (
    <section className={cx("summary")}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;