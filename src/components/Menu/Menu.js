import React from "react";
import Dessert from "./Dessert/Dessert";
import Food from "./Food/Food";
import Price from "./Price/Price";

function Menu() {
  return (
    <div>
      <Food />
      <Dessert />
      <Price />
    </div>
  );
}

export default Menu;
