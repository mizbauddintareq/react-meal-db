import React from "react";

const Cart = (props) => {
  const { info } = props;
  return (
    <div>
      <ul>
        <li className="fw-bold">{info.strMeal}</li>
      </ul>
    </div>
  );
};

export default Cart;
