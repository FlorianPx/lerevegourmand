import React from "react";

import TitleBlock from "../TitleBlock/TitleBlock";
import Text from "./Text";
import { PresentationContainer } from "./styledComponents";
import FoodTruck from "../../assets/svg/foodtruck.svg";

const defaultTheme = {
  titleBlock: "Le food truck",
  logoBlock: FoodTruck,
  themeColor: "pink",
  horizontalLocation: "left",
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
