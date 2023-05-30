import React from "react";
import MealItemForm from "./MealItemForm";
import "./MealItem.css"

const MealItem = ({name, price, description}) => {
  return (
    <span className="MealsListItem">
      <div className="priceNamePrice">
          <h2>{name}</h2>
          <p>{description}</p>
        <span>${price.toFixed(2)}</span>
      </div>

      <div className="priceIncDec">
        <MealItemForm />
      </div>
    </span>
  );
};

export default MealItem;
