import React from "react";
import { v4 as uuidv4 } from "uuid";


const Ingredients = ({ ingredients }) => {
  return ingredients.map((i) => {
    return (
      <ul key={uuidv4()}>
        <li> {i.text}</li>
      </ul>
    );
  });
};

export default Ingredients;
