import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummyData = [
  {
    id: 1,
    name: "Cheeseburger",
    price: 9.99,
    description:
      "A delicious beef burger topped with melted cheese, lettuce, tomato, and special sauce.",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 12.99,
    description:
      "A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    price: 8.49,
    description:
      "Crisp romaine lettuce tossed with grilled chicken, Parmesan cheese, and Caesar dressing.",
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    price: 11.99,
    description:
      "Pasta served with a rich tomato-based meat sauce, garnished with Parmesan cheese.",
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    price: 5.49,
    description:
      "A decadent chocolate dessert served warm, topped with vanilla ice cream.",
  },
];

const AvailableMeals = () => {
  return (
    <div>
      <Card>
        <div>
          <ul>
            {dummyData.map((e) => {
              return (
                <li>
                  <MealItem
                    name={e.name}
                    price={e.price}
                    description={e.description}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default AvailableMeals;
