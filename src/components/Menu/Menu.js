import React from "react";

import Dessert from "./Dessert/Dessert";
import Food from "./Food/Food";
import Price from "./Price/Price";
import { MenuContainer } from "./styledComponents";

function Menu() {
  return (
    <MenuContainer>
      <Food />
      <Price />
      <Dessert />
    </MenuContainer>
  );
}

export default Menu;
