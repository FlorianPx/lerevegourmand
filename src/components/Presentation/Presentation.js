import React from "react";

import TitleBlock from "../TitleBlock/TitleBlock";
import Text from "./Text";
import { PresentationContainer } from "./styledComponents";
import FoodTruck from "../../assets/images/foodtruck.svg";

const defaultTheme = {
  titleBlock: "Le Food Truck",
  logoBlock: FoodTruck,
  themeColor: "pink",
};

function Presentation() {
  return (
    <PresentationContainer>
      <TitleBlock defaultTheme={defaultTheme} />
      <Text />
    </PresentationContainer>
  );
}

export default Presentation;
