import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const [cart, setCart] = useState([]);
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleBtn = (meal) => {
    const newMeal = [...cart, meal];
    setCart(newMeal);
  };
  return (
    <div className="row mt-3">
      <div className="col-md-9 border-end">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {meals.map((meal) => (
            <Meal meal={meal} handleBtn={handleBtn} key={meal.idMeal}></Meal>
          ))}
        </div>
      </div>
      <div className="col-md-3">
        <h5 className="text-center"> {cartIcon} Selected Items</h5>
        <hr />
        {cart.map((meals) => (
          <Cart info={meals} key={meals.idMeal}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Meals;
