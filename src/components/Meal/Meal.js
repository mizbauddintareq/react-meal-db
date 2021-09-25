import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Meal = (props) => {
  const {
    strMeal,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strCategory,
  } = props.meal;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div>
      <div className="card mb-3 h-100">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={strMealThumb}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{strMeal}</h5>
              <p className="card-title">
                <small>
                  <h6>Category: {strCategory}</h6>
                </small>
              </p>
              <p className="card-text">
                <small>
                  <span className="fw-bold">Ingredients:</span> {strIngredient1}
                  ,{strIngredient2},{strIngredient3},{strIngredient4},
                  {strIngredient5},{strIngredient6},{strIngredient7},
                  {strIngredient8},{strIngredient9}, etc...
                </small>
              </p>

              <button
                onClick={() => props.handleBtn(props.meal)}
                type="button"
                className="btn btn-warning"
              >
                {cartIcon} Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
